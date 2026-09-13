import { theme, textStyles } from './theme.js';

export function addText(slide, value, options = {}) {
  const { style = 'body', ...position } = options;
  slide.addText(value, { ...textStyles[style], ...position });
}
export function addRect(slide, { x, y, w, h, fill = theme.colors.ink, line = fill }) {
  slide.addShape('rect', { x, y, w, h, fill: { color: fill }, line: { color: line, transparency: 100 } });
}
export function addLine(slide, { x, y, w, h = 0, color = theme.colors.ink, width = 1 }) {
  slide.addShape('line', { x, y, w, h, line: { color, width } });
}
export function addImageFit(slide, path, { x, y, w, h }) {
  slide.addImage({ path, sizing: { type: 'contain', x, y, w, h } });
}
export function addImageCrop(slide, path, { x, y, w, h }) {
  slide.addImage({ path, sizing: { type: 'cover', x, y, w, h } });
}
export function addFooter(slide, number, label = 'СОВЕТСКИЙ КОНСТРУКТИВИЗМ') {
  const y = theme.height - 0.4;
  addLine(slide, { x: theme.grid.margin, y: y - 0.1, w: theme.width - theme.grid.margin * 2, color: theme.colors.rule, width: 0.6 });
  addText(slide, label, { style: 'label', x: theme.grid.margin, y, w: 4.3, h: 0.14 });
  addText(slide, String(number).padStart(2, '0'), { style: 'label', x: theme.width - theme.grid.margin - 0.4, y, w: 0.4, h: 0.14, align: 'right' });
}
export function addSpeakerNotes(slide, notes) { slide.addNotes(notes); }
