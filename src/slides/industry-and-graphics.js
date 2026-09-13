import { theme } from '../theme.js';
import { addRect, addLine } from '../primitives.js';
import { base, text, title, label, photo } from './shared.js';

const { paper, ink, red, muted } = theme.colors;

function kitchen(pptx) {
  const s = base(pptx, 11, 'ВАСИЛЕОСТРОВСКАЯ ФАБРИКА-КУХНЯ / ЛЕНИНГРАД / 1930–1931');
  title(s, 'ОБЕД СТАНОВИТСЯ\nОБЩЕСТВЕННОЙ ЗАДАЧЕЙ', 0.55, 0.92, 12.23, 1.35, 35);
  photo(s, 'Василеостровская-Борисова.jpg', 0.55, 2.48, 7.2, 4.1);
  ['Производство еды', 'Столовая', 'Магазин\nполуфабрикатов'].forEach((value, i) => {
    const y = 2.77 + i * 0.95;
    addRect(s, { x: 8.08, y: y + 0.11, w: 0.13, h: 0.13, fill: red });
    text(s, value, 8.48, y, 4.3, 0.75, 24, { bold: true, valign: 'top' });
  });
  text(s, 'Замысел: меньше\nдомашнего труда', 8.48, 5.73, 4.3, 0.76, 24, { color: red });
  text(s, 'Фото: Екатерина Борисова, 2022 · CC BY-SA 4.0 · Вид после перестроек', 0.58, 6.7, 7.4, 0.2, 10, { color: muted });
}

function bakery(pptx) {
  const s = base(pptx, 12, 'ХЛЕБОЗАВОД № 5 / МОСКВА / СТРОИТЕЛЬСТВО 1931–1932');
  title(s, 'ПОЧЕМУ ХЛЕБОЗАВОД\nКРУГЛЫЙ?', 0.55, 0.95, 7.3, 1.36, 36);
  photo(s, 'Хлебозавод5-Зотов.jpg', 5.68, 2.04, 7.1, 4.72);
  addRect(s, { x: 0.58, y: 2.77, w: 0.1, h: 2.8, fill: red });
  text(s, 'Кольцевой\nконвейер', 0.97, 2.75, 4.45, 1.0, 30, { bold: true });
  text(s, 'По кругу,\nсверху вниз', 0.97, 4.06, 4.45, 0.88, 25);
  text(s, 'Система инженера\nГеоргия Марсакова', 0.97, 5.31, 4.45, 0.7, 20, { color: muted });
  text(s, 'Технология задаёт форму', 0.58, 6.4, 4.95, 0.37, 22, { bold: true, color: red });
}

function palace(pptx) {
  const s = base(pptx, 13, 'ДВОРЕЦ СОВЕТОВ / МОСКВА / КОНКУРСНЫЕ ЭТАПЫ 1931–1933');
  photo(s, 'ДворецСоветов.jpg', 7.08, 0.95, 5.7, 5.7);
  title(s, 'ГОСУДАРСТВУ\nНУЖЕН\nДРУГОЙ ОБРАЗ', 0.55, 1.04, 6.2, 2.03, 35);
  addLine(s, { x: 0.58, y: 3.5, w: 5.85, color: red, width: 2 });
  text(s, 'Монументальность\nИсторические формы', 0.58, 3.82, 6.15, 0.92, 25, { bold: true });
  text(s, 'Основа проекта —\nпредложение Бориса Иофана', 0.58, 5.05, 6.1, 0.76, 22);
  label(s, 'СТРОИТЕЛЬСТВО НЕ ЗАВЕРШЕНО', 0.6, 6.35, 6.1, red);
  text(s, 'Макет одного из поздних вариантов Дворца Советов', 7.08, 6.73, 5.7, 0.2, 11, { color: muted });
}

function attention(pptx) {
  const s = base(pptx, 14, 'ОТ АРХИТЕКТУРЫ К ГРАФИКЕ / ПАРАЛЛЕЛЬНАЯ ИСТОРИЯ');
  label(s, 'ВОЗВРАЩАЕМСЯ: КОНЕЦ 1910-х — 1920-е', 0.6, 1.02, 11, red);
  title(s, 'ТЕПЕРЬ — КАК', 0.55, 1.64, 12.23, 0.86, 46);
  addRect(s, { x: 0.55, y: 2.83, w: 12.23, h: 1.48, fill: red });
  title(s, 'НАПРАВИТЬ ВЗГЛЯД', 0.84, 3.08, 11.65, 0.96, 46, { color: paper });
  text(s, 'Пространство', 0.6, 4.86, 4.6, 0.48, 28, { bold: true });
  s.addShape('rightArrow', { x: 5.24, y: 4.87, w: 1.13, h: 0.42, fill: { color: ink }, line: { transparency: 100 } });
  text(s, 'Внимание', 7.12, 4.86, 5.6, 0.48, 28, { bold: true });
  text(s, 'Агитация   /   Реклама   /   Просвещение', 0.6, 6.11, 12.1, 0.45, 25);
}

function lissitzky(pptx) {
  const s = base(pptx, 15, 'ЭЛЬ ЛИСИЦКИЙ / «КЛИНОМ КРАСНЫМ БЕЙ БЕЛЫХ» / ИЗДАНИЕ 1920');
  photo(s, '../posters/Лисицкий.JPG', 0.55, 0.92, 7.25, 5.94);
  title(s, 'КОНФЛИКТ\nВ НЕСКОЛЬКИХ\nФИГУРАХ', 8.19, 1.15, 4.62, 1.96, 30);
  addLine(s, { x: 8.2, y: 3.52, w: 4.57, color: red, width: 2 });
  text(s, 'Красный клин\nвторгается\nв белый круг', 8.2, 3.89, 4.55, 1.35, 26);
  text(s, 'Супрематическая\nгеометрия', 8.2, 5.86, 4.55, 0.76, 23, { color: red, bold: true });
}

export function addIndustryAndGraphicsSlides(pptx) {
  [kitchen, bakery, palace, attention, lissitzky].forEach((compose) => compose(pptx));
}
