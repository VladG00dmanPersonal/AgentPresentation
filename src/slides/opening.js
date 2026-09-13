import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import imageSize from 'image-size';
import { theme } from '../theme.js';
import { addText, addRect, addLine, addFooter } from '../primitives.js';

const { paper, ink, red, muted } = theme.colors;
const asset = (name) => fileURLToPath(new URL(`../../assets/architecture/${name}`, import.meta.url));
const editorial = readFileSync(new URL('../../slides.md', import.meta.url), 'utf8');

// Only notes come from Markdown. Every visible composition is authored below.
function base(pptx, number, section) {
  const slide = pptx.addSlide();
  slide.background = { color: paper };
  addFooter(slide, number);
  label(slide, section, 0.55, 0.38, 11.8);
  const block = editorial.split(/^## /m).find((part) => part.startsWith(`${String(number).padStart(2, '0')}.`));
  if (!block) throw new Error(`Missing editorial slide ${number}`);
  slide.addNotes(block.split('**Текст спикера:**')[1].replace(/\n---\s*$/, '').trim());
  return slide;
}
function text(s, value, x, y, w, h, size = 22, opts = {}) {
  addText(s, value, { x, y, w, h, fontSize: size, margin: 0, valign: 'mid', ...opts });
}
function title(s, value, x, y, w, h, size = 38, opts = {}) {
  text(s, value, x, y, w, h, size, { fontFace: 'DejaVu Sans Condensed', bold: true, breakLine: false, ...opts });
}
function label(s, value, x, y, w, color = muted) {
  text(s, value, x, y, w, 0.22, 10, { bold: true, charSpacing: 1.4, color });
}
function photo(s, name, x, y, w, h) {
  const path = asset(name);
  const dimensions = imageSize(readFileSync(path));
  const scale = Math.min(w / dimensions.width, h / dimensions.height);
  const width = dimensions.width * scale;
  const height = dimensions.height * scale;
  s.addImage({ path, x: x + (w - width) / 2, y: y + (h - height) / 2, w: width, h: height });
}

function opening(pptx) {
  const s = base(pptx, 1, 'АРХИТЕКТУРА КАК СВИДЕТЕЛЬСТВО ЭПОХИ');
  photo(s, 'ДомНаркомфина.jpg', 5.25, 1.03, 8.083, 5.39);
  addRect(s, { x: 0.55, y: 1.05, w: 0.8, h: 0.12, fill: red });
  title(s, 'КАК ЭПОХА\nМЕНЯЕТ\nГОРОД?', 0.55, 1.53, 4.8, 2.65, 43);
  text(s, 'Советский\nконструктивизм', 0.58, 4.57, 4.3, 0.85, 25, { bold: true });
  text(s, '1920-е — 1930-е', 0.58, 5.63, 4.3, 0.46, 24, { color: red, bold: true });
  label(s, 'Дом Наркомфина', 5.3, 6.57, 5);
}

function context(pptx) {
  const s = base(pptx, 2, 'КОНТЕКСТ / ОТ ПОТРЯСЕНИЙ К ВОССТАНОВЛЕНИЮ');
  title(s, 'НОВАЯ ЖИЗНЬ\nПОСЛЕ ПОТРЯСЕНИЙ', 0.55, 0.95, 11.8, 1.4, 38);
  addLine(s, { x: 0.6, y: 3.42, w: 11.95, width: 1.8 });
  title(s, '1917', 0.55, 2.58, 3.9, 0.85, 57);
  title(s, '1921', 7.22, 2.58, 4.5, 0.85, 57, { color: red });
  addRect(s, { x: 0.58, y: 3.35, w: 0.14, h: 0.14, fill: ink });
  addRect(s, { x: 7.24, y: 3.35, w: 0.14, h: 0.14, fill: red });
  text(s, 'Революция', 0.6, 3.69, 5.8, 0.45, 28, { bold: true });
  text(s, 'Гражданская война, разруха,\nнехватка жилья', 0.6, 4.33, 5.8, 0.85, 23);
  text(s, 'Начало НЭПа', 7.25, 3.69, 5.4, 0.45, 28, { bold: true });
  text(s, 'Новая экономическая политика.\nВосстановление хозяйства', 7.25, 4.33, 5.4, 0.85, 23);
  addRect(s, { x: 0.55, y: 5.74, w: 12.23, h: 0.82, fill: red });
  text(s, 'Как устроить новый быт?', 0.83, 5.91, 11.6, 0.43, 28, { color: paper, bold: true });
}

function reading(pptx) {
  const s = base(pptx, 3, 'МЕТОД / ТРИ ВОПРОСА К ЗДАНИЮ');
  title(s, 'СНАЧАЛА ЗАДАЧА —\nЗАТЕМ ФОРМА', 0.55, 0.9, 12, 1.35, 36);
  photo(s, 'ЗданиеГоспрома3.jpg', 0.55, 2.3, 7.33, 4.25);
  // Preserve the whole photograph, including its original photographer credit.
  const rows = [
    ['01', 'ФУНКЦИЯ', 'Что происходит внутри?'],
    ['02', 'ОБЪЁМЫ И СВЯЗИ', 'Как перемещаются люди?'],
    ['03', 'КОНСТРУКЦИЯ', 'Что держит здание?'],
  ];
  rows.forEach(([n, head, body], i) => {
    const y = 2.65 + i * 1.24;
    label(s, n, 8.4, y, 0.5, red);
    text(s, head, 9.03, y - 0.05, 3.75, 0.4, 19, { bold: true });
    text(s, body, 9.03, y + 0.46, 3.7, 0.68, 19);
    if (i < 2) addLine(s, { x: 8.4, y: y + 1.08, w: 4.37, color: theme.colors.rule });
  });
  label(s, 'Госпром · Харьков', 0.58, 6.61, 7);
}

function tatlin(pptx) {
  const s = base(pptx, 4, 'РАННИЙ ЗАМЫСЕЛ / ВОЗВРАЩАЕМСЯ К 1919–1920 ГОДАМ');
  photo(s, 'БашняТалина2.jpg', 7.6, 0.87, 4.42, 5.92);
  addRect(s, { x: 7.21, y: 0.87, w: 0.12, h: 5.92, fill: red });
  title(s, 'БАШНЯ\nТАТЛИНА', 0.55, 1.0, 6.4, 1.62, 47);
  text(s, 'Общественная задача\nв масштабе памятника', 0.6, 2.98, 6.1, 0.96, 27);
  text(s, 'Владимир Татлин\nПамятник III Интернационалу', 0.6, 4.28, 6.1, 0.77, 20);
  text(s, '1919–1920', 0.6, 5.34, 5.8, 0.5, 31, { bold: true, color: red });
  label(s, 'ПРОЕКТ И МОДЕЛЬ · НЕ ПОСТРОЕНА', 0.62, 6.04, 6, red);
  text(s, 'Модель проекта памятника III Интернационалу', 7.65, 6.81, 4.8, 0.2, 9, { color: muted });
}

function competition(pptx) {
  const s = base(pptx, 5, 'ДВОРЕЦ ТРУДА / МОСКВА / КОНКУРС 1922–1923');
  title(s, 'ОДИН КОНКУРС — РАЗНЫЕ ПУТИ', 0.55, 0.95, 12.2, 0.72, 34);
  photo(s, 'ДворецТрудаНойТроцкий.jpg', 0.65, 2.0, 2.55, 4.25);
  text(s, 'I', 3.4, 2.0, 0.85, 0.65, 42, { bold: true });
  label(s, 'ПРЕМИЯ', 3.42, 2.78, 1.45);
  text(s, 'Ной\nТроцкий', 3.4, 3.25, 1.9, 0.85, 22, { bold: true });
  addLine(s, { x: 5.53, y: 2.0, w: 0, h: 4.53, color: theme.colors.rule });
  text(s, 'III', 5.9, 1.94, 1.18, 0.68, 42, { bold: true, color: red });
  label(s, 'ПРЕМИЯ', 7.15, 2.03, 1.7, red);
  text(s, 'Братья Веснины', 7.15, 2.4, 5.5, 0.42, 25, { bold: true });
  photo(s, 'ДворецТрудаВеснины-СА1927.jpg', 5.94, 3.13, 6.83, 2.9);
  text(s, 'Александр, Виктор и Леонид Веснины', 5.96, 6.1, 6.6, 0.24, 13, { color: muted });
  text(s, 'Важная веха конструктивизма', 5.96, 6.49, 6.6, 0.32, 21, { color: red, bold: true });
  label(s, 'ДВОРЕЦ НЕ ПОСТРОЕН', 0.64, 6.53, 4.7);
}

export function addOpeningSlides(pptx) {
  [opening, context, reading, tatlin, competition].forEach((compose) => compose(pptx));
}
