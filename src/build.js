import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import pptxgen from 'pptxgenjs';
import { addOpeningSlides } from './slides/opening.js';
import { addArchitectureSlides } from './slides/architecture.js';
import { theme } from './theme.js';

export async function buildPresentation(outputPath = resolve('output/soviet-constructivism.pptx')) {
  const pptx = new pptxgen();
  pptx.layout = theme.layout;
  pptx.author = 'AgentPresentation';
  pptx.company = 'AgentPresentation';
  pptx.subject = 'Советский конструктивизм 1920-х–1930-х годов';
  pptx.title = 'Советский конструктивизм: как спроектировать новую жизнь';
  pptx.lang = 'ru-RU';
  pptx.theme = { headFontFace: theme.fonts.display, bodyFontFace: theme.fonts.body, lang: 'ru-RU' };
  addOpeningSlides(pptx);
  addArchitectureSlides(pptx);
  await mkdir(dirname(outputPath), { recursive: true });
  await pptx.writeFile({ fileName: outputPath });
  return outputPath;
}

if (import.meta.url === `file://${process.argv[1]}`) await buildPresentation();
