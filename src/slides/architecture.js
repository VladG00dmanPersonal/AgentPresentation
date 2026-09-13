import { theme } from '../theme.js';
import { addRect, addLine } from '../primitives.js';
import { base, text, title, label, photo } from './shared.js';

const { paper, ink, red, muted } = theme.colors;

function gosprom(pptx) {
  const s = base(pptx, 6, 'ГОСПРОМ / ХАРЬКОВ / СТРОИТЕЛЬСТВО 1925–1928');
  title(s, 'МАСШТАБ УПРАВЛЕНИЯ', 0.55, 0.94, 12.2, 0.75, 39);
  photo(s, 'ЗданиеГоспрома3.jpg', 0.55, 1.96, 8.25, 4.7);
  addRect(s, { x: 9.18, y: 2.12, w: 0.1, h: 2.75, fill: red });
  text(s, 'Корпуса\nи переходы', 9.53, 2.15, 3.15, 1.0, 28, { bold: true });
  text(s, 'Управление\nпромышленностью', 9.53, 3.48, 3.2, 0.85, 22);
  text(s, 'Железобетон', 9.53, 4.55, 3.15, 0.45, 23, { color: red, bold: true });
  text(s, 'С. Серафимов\nС. Кравец\nМ. Фельгер', 9.53, 5.39, 3.1, 1.02, 18, { color: muted });
}

function melnikov(pptx) {
  const s = base(pptx, 7, 'ДОМ МЕЛЬНИКОВА / МОСКВА / СТРОИТЕЛЬСТВО 1927–1929');
  photo(s, 'ДомМельникова.jpg', 0.55, 0.94, 4.15, 5.78);
  photo(s, 'ДомМельникова2.jpg', 4.89, 3.25, 2.7, 3.4);
  title(s, 'ДВА ЦИЛИНДРА', 5.04, 0.96, 7.72, 0.78, 36);
  title(s, 'ДЛЯ ЖИЗНИ\nИ РАБОТЫ', 5.04, 1.77, 7.65, 1.28, 35, { color: red });
  text(s, 'Дом-мастерская', 8.01, 3.65, 4.75, 0.47, 25, { bold: true });
  text(s, 'Семья\nТворчество\nСвет', 8.01, 4.38, 4.75, 1.48, 25, { breakLine: false });
  text(s, 'Константин Мельников', 8.01, 6.26, 4.75, 0.3, 17, { color: muted });
}

function clubs(pptx) {
  const s = base(pptx, 8, 'РАБОЧИЕ КЛУБЫ / К. МЕЛЬНИКОВ / МОСКВА / ПРОЕКТЫ И СТРОИТЕЛЬСТВО 1927–1929');
  title(s, 'ПОСЛЕ РАБОТЫ — В КЛУБ', 0.55, 0.94, 12.2, 0.77, 38);
  text(s, 'Одна общественная задача — разные формы', 0.58, 1.88, 12, 0.45, 24);
  const columns = [
    [0.55, 'ДомКультурыРусакова.jpg', 'РУСАКОВА', 'Выступающие\nчасти зала'],
    [4.72, 'КлубКаучук.jpg', '«КАУЧУК»', 'Полукруглый\nобъём'],
    [8.89, 'КлубСвобода.jpg', '«СВОБОДА»', 'Вытянутый\nкорпус зала'],
  ];
  columns.forEach(([x, image, name, caption]) => {
    photo(s, image, x, 2.62, 3.89, 2.84);
    addLine(s, { x, y: 5.65, w: 3.89, color: red, width: 2 });
    text(s, name, x, 5.82, 3.89, 0.35, 22, { bold: true });
    text(s, caption, x, 6.27, 3.89, 0.59, 18);
  });
}

function narkomfin(pptx) {
  const s = base(pptx, 9, 'ДОМ НАРКОМФИНА / МОСКВА / СТРОИТЕЛЬСТВО 1928–1930');
  title(s, 'ЛИЧНОЕ ЖИЛЬЁ\nИ ОБЩИЕ ФУНКЦИИ', 0.55, 0.92, 12.1, 1.36, 37);
  photo(s, 'ДомНаркомфина.jpg', 0.55, 2.53, 7.82, 4.03);
  text(s, 'Своя квартира', 8.86, 2.74, 3.94, 0.48, 26, { bold: true });
  title(s, '+', 8.86, 3.36, 1, 0.55, 38, { color: red });
  text(s, 'Общие помещения', 8.86, 4.04, 3.94, 0.68, 25, { bold: true });
  addRect(s, { x: 8.85, y: 5.0, w: 3.93, h: 0.76, fill: red });
  text(s, 'Дом переходного типа', 9.02, 5.12, 3.58, 0.49, 20, { color: paper, bold: true });
  text(s, 'М. Гинзбург, И. Милинис\nИнженер С. Прохоров', 8.86, 6.02, 3.94, 0.63, 16, { color: muted });
}

function commune(pptx) {
  const s = base(pptx, 10, 'ДОМ-КОММУНА / ИВАН НИКОЛАЕВ / МОСКВА / СТРОИТЕЛЬСТВО 1929–1931');
  title(s, 'МОЖНО ЛИ СПРОЕКТИРОВАТЬ\nРАСПОРЯДОК ДНЯ?', 0.55, 0.94, 12.23, 1.34, 33);
  photo(s, 'ДомКоммуна.jpg', 6.59, 2.55, 6.19, 4.12);
  text(s, 'Студенческое\nобщежитие', 0.6, 2.74, 5.5, 0.91, 27, { bold: true });
  label(s, 'ФУНКЦИИ РАЗНЕСЕНЫ ПО БЛОКАМ', 0.6, 3.96, 5.8, red);
  ['Сон', 'Гигиена', 'Занятия'].forEach((value, i) => {
    const y = 4.48 + i * 0.6;
    addRect(s, { x: 0.61, y: y + 0.1, w: 0.14, h: 0.14, fill: red });
    text(s, value, 0.95, y, 4.98, 0.4, 24);
  });
  text(s, 'Планировка задаёт ритм жизни', 0.6, 6.38, 5.67, 0.38, 20, { bold: true, color: red });
}

export function addArchitectureSlides(pptx) {
  [gosprom, melnikov, clubs, narkomfin, commune].forEach((compose) => compose(pptx));
}
