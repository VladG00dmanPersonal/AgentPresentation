import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import imageSize from 'image-size';
import { theme } from '../theme.js';
import { addText, addRect, addLine, addFooter } from '../primitives.js';

const { paper, ink, red, muted } = theme.colors;
const asset = (name) => fileURLToPath(new URL(`../../assets/architecture/${name}`, import.meta.url));
const editorial = readFileSync(new URL('../../slides.md', import.meta.url), 'utf8');

// Only notes come from Markdown. Every visible composition is authored below.
export function base(pptx, number, section) {
  const slide = pptx.addSlide();
  slide.background = { color: paper };
  addFooter(slide, number);
  label(slide, section, 0.55, 0.38, 11.8);
  const block = editorial.split(/^## /m).find((part) => part.startsWith(`${String(number).padStart(2, '0')}.`));
  if (!block) throw new Error(`Missing editorial slide ${number}`);
  slide.addNotes(block.split('**Текст спикера:**')[1].replace(/\n---\s*$/, '').trim());
  return slide;
}
export function text(s, value, x, y, w, h, size = 22, opts = {}) {
  addText(s, value, { x, y, w, h, fontSize: size, margin: 0, valign: 'mid', ...opts });
}
export function title(s, value, x, y, w, h, size = 38, opts = {}) {
  text(s, value, x, y, w, h, size, { fontFace: 'DejaVu Sans Condensed', bold: true, breakLine: false, ...opts });
}
export function label(s, value, x, y, w, color = muted) {
  text(s, value, x, y, w, 0.22, 10, { bold: true, charSpacing: 1.4, color });
}
export function photo(s, name, x, y, w, h) {
  const path = asset(name);
  const dimensions = imageSize(readFileSync(path));
  const scale = Math.min(w / dimensions.width, h / dimensions.height);
  const width = dimensions.width * scale;
  const height = dimensions.height * scale;
  s.addImage({ path, x: x + (w - width) / 2, y: y + (h - height) / 2, w: width, h: height });
}

