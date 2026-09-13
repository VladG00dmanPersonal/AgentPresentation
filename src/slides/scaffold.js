import { addFooter, addLine, addRect, addSpeakerNotes, addText } from '../primitives.js';
import { theme } from '../theme.js';

export function addTechnicalScaffoldSlide(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: theme.colors.paper };
  addRect(slide, { x: 0, y: 0, w: 0.18, h: theme.height, fill: theme.colors.red });
  addRect(slide, { x: 8.7, y: 0.7, w: 4.3, h: 0.18, fill: theme.colors.red });
  addLine(slide, { x: 8.3, y: 1.05, w: 4.45, h: 3.2, color: theme.colors.ink, width: 1.5 });
  addText(slide, 'ТЕХНИЧЕСКИЙ\nКАРКАС', { style: 'title', x: 0.8, y: 1.28, w: 6.8, h: 1.25, fontSize: 39 });
  addText(slide, 'PptxGenJS · 16:9 · один нейтральный слайд', { style: 'body', x: 0.83, y: 2.88, w: 5.7, h: 0.28, fontSize: 16 });
  addText(slide, 'НЕ ЧАСТЬ БУДУЩЕЙ ИСТОРИЧЕСКОЙ КОЛОДЫ', { style: 'label', x: 0.83, y: 3.55, w: 5.3, h: 0.18, color: theme.colors.red });
  addText(slide, 'Следующие слайды создаются вручную как отдельные композиции по редакционному сценарию slides.md.', { style: 'body', x: 0.83, y: 4.0, w: 5.3, h: 0.8, fontSize: 14, color: theme.colors.muted });
  addFooter(slide, 0, 'PPTXGENJS · TECHNICAL SCAFFOLD');
  addSpeakerNotes(slide, 'Технический слайд: не использовать в историческом выступлении. Заменить после согласования прототипов.');
  return slide;
}
