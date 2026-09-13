import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import JSZip from 'jszip';

test('build writes all twenty historical slides with complete speaker notes', async () => {
  const { buildPresentation } = await import('../src/build.js');
  const directory = mkdtempSync(join(tmpdir(), 'constructivism-pptx-'));
  const outputPath = join(directory, 'scaffold.pptx');

  try {
    await buildPresentation(outputPath);
    assert.equal(existsSync(outputPath), true);

    const archive = readFileSync(outputPath);
    assert.equal(archive.subarray(0, 4).toString('hex'), '504b0304');
    const packageContents = await JSZip.loadAsync(archive);
    assert.equal(packageContents.file(/^ppt\/slides\/slide\d+\.xml$/).length, 20);
    for (let i = 1; i <= 20; i++) {
      const slide = await packageContents.file(`ppt/slides/slide${i}.xml`).async('string');
      assert.doesNotMatch(slide, /ТЕХНИЧЕСКИЙ|Текст спикера|Источники и материалы/);
      const notes = await packageContents.file(`ppt/notesSlides/notesSlide${i}.xml`).async('string');
      assert.match(notes, /Источники и материалы/);
      assert.match(notes, /Время/);
      assert.ok(notes.length > 1500);
    }
    const notes = await packageContents.file('ppt/notesSlides/notesSlide1.xml').async('string');
    assert.match(notes, /Представьте свой обычный путь в школу/);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
