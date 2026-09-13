// Pending revision for lNMybuIlB1rY2xxwmzgyJ6. Run via use_figma after inspecting the live file.
// Edits existing slides only. Does not create slides or replace images.
const expectedFileKey = "lNMybuIlB1rY2xxwmzgyJ6";
if (figma.fileKey && figma.fileKey !== expectedFileKey) throw new Error("Wrong Figma file");
const order = ["4:2", "4:18", "4:69", "4:37", "4:52"];
const notes = [
  "Время: 00:40.\n\nПредставьте свой обычный путь в школу. По дороге встречаются жилые дома, магазины, может быть, завод или старый клуб. Мы привыкаем к ним и редко спрашиваем, почему они устроены именно так. Но здание сохраняет представления своего времени: где человек должен работать, как отдыхать, сколько пространства иметь для себя. Сегодня мы посмотрим на советский конструктивизм как на попытку спроектировать новую жизнь. Начнём с архитектуры, затем перейдём к плакатам. И попробуем понять, почему в определённый момент такие эксперименты стали возможны.\n\nИсточники и материалы:\n- Основа рассказа: [задание](brief.md), [исходная мысль](content/narrative.md). Вступительный вопрос — авторская рамка, а не историческая цитата.\n- Материал для знакомства: [Дом Наркомфина](assets/architecture/ДомНаркомфина.jpg); историческая атрибуция — на слайде 09.",
  "Время: 00:45.\n\nПосле революции 1917 года и Гражданской войны страна столкнулась с разрушением хозяйства, бедностью и нехваткой жилья. В 1921 году началась новая экономическая политика, сокращённо НЭП. Она разрешала частную торговлю и небольшое предпринимательство, сохраняя за государством ключевые отрасли. Это не означало общей политической свободы. На фоне восстановления художники и архитекторы обсуждали, каким должно стать социалистическое общество. Они надеялись изменить не только внешний вид города, но и повседневные привычки людей. Как этот поиск нового быта превращался в архитектуру? Начнём с трёх вопросов: для чего нужно здание, как в нём движутся люди и что держит его конструкцию.\n\nИсточники и материалы:\n- [Татарская энциклопедия: НЭП](https://tatarica.org/ru/razdely/istoriya/novejshee-vremya/ekonomika/novaya-ehkonomicheskaya-politika-nehp) — начало политики и хозяйственные меры.\n- [MoMA: Родченко и исторический контекст](https://www.moma.org/interactives/exhibitions/1998/rodchenko/introduction.html) — связь авангарда с революцией и последующей политической историей.\n- Не воспроизводить из исходника утверждения о «возвращении к капиталистической системе» и всеобщем воодушевлении. Единую дату окончания всех боевых действий не вводить.",
  "Время: 00:40.\n\nФункция здания — это то, для чего оно нужно. Конструктивисты стремились начинать именно с неё: кто сюда приходит, что делает, как переходит из одного помещения в другое. Отсюда интерес к простым геометрическим объёмам и связям между ними. Каркас из опор и перекрытий позволял иначе организовать внутреннее пространство, а большие окна — впустить больше света. Но далеко не каждое авангардное здание целиком железобетонное. И отсутствие украшений само по себе ещё ничего не объясняет. На фотографии Госпрома уже видны объёмы и переходы, к которым мы ещё вернёмся. Но сначала посмотрим, как общественную задачу пытались выразить в одном из ранних проектов — башне Татлина.\n\nИсточники и материалы:\n- [Журнал «Современная архитектура»: разбор Дворца труда](https://tehne.com/event/arhivsyachina/arhiv-sa-proekt-dvorca-truda-institut-lenina) — связь внутреннего решения и объёмов.\n- [Описание Госпрома в заявке Украины на сайте ЮНЕСКО](https://whc.unesco.org/en/tentativelists/6249/) — конструкция, остекление и пути движения.\n- Пример для объяснения: [Госпром](assets/architecture/ЗданиеГоспрома3.jpg). Три вопроса — авторское обобщение метода.",
  "Время: 00:40.\n\nНачнём с первого вопроса: для чего нужно сооружение? Вернёмся к 1919–1920 годам, ещё до НЭПа. Тогда Владимир Татлин разрабатывал памятник Третьему Интернационалу — международному объединению коммунистических партий. Вместо привычной статуи он предложил огромное сооружение со спиральным каркасом и помещениями для общественной работы. В проекте даже предполагалось вращение внутренних объёмов. Так памятник становился образом действующей машины нового общества. Но башню не построили: существовала модель, а не здание над городом. Для нас важен сам масштаб мысли — соединить искусство и техническую организацию жизни. Следующий пример переносит этот поиск в архитектурный конкурс.\n\nИсточники и материалы:\n- [Русский музей: Владимир Татлин](https://rusmuseum.ru/news/tatlin/) — автор, датировка и значение проекта; [TATLIN: башня](https://tatlin.ru/articles/bashnya_tatlina) — устройство замысла.\n- [Фотография модели](assets/architecture/БашняТалина2.jpg). Подпись: «Модель проекта памятника III Интернационалу»; точную дату снимка не назначать.\n- [Башня в городской панораме](assets/architecture/БашняТалина.jpg) — монтаж/визуализация, не фотография постройки. `БашняТалина3.png` помечена в исходнике как ИИ-изображение. Оба файла исключить из документального ряда.",
  "Время: 00:45.\n\nКонкурс на Дворец труда в Москве проходил в 1922–1923 годах. Требовалось объединить большие залы и разнообразные общественные помещения. Первую премию получил Ной Троцкий. Однако особенно важным для истории конструктивизма стало предложение братьев Весниных, занявшее третье место. Они искали выразительность в сочетании объёмов, каркасе и организации большого комплекса. Победитель конкурса и проект, повлиявший на дальнейшее развитие архитектуры, здесь не совпадают. Дворец так и не построили. Здесь пригодились наши вопросы о функции, объёмах и конструкции. Теперь перейдём от неосуществлённых замыслов к построенному комплексу — Госпрому.\n\nИсточники и материалы:\n- [Культура.РФ: Дворец труда](https://www.culture.ru/institutes/13807/dvorec-truda-neosushestvlennyi-proekt) — конкурс, премии, статус.\n- [Архив журнала «Современная архитектура»: проект Весниных](https://tehne.com/event/arhivsyachina/arhiv-sa-proekt-dvorca-truda-institut-lenina) — исторические изображения и оценка современников. Использовать как источник иллюстрации предложения Весниных.\n- [Локальный проект Троцкого](assets/architecture/ДворецТрудаНойТроцкий.jpg). `ДворецТруда.jpg` и `ДворецТруда2.jpg` также показывают предложение Троцкого: не подписывать их фамилией Весниных. `ДворецТруда3.png` — ИИ по исходнику, исключить."
];
const titles = ["Как эпоха меняет город?", "Новая жизнь после потрясений", "Сначала задача — затем форма", "Башня: общественная задача", "Один конкурс — разные пути"];
const slides = await Promise.all(order.map(id => figma.getNodeByIdAsync(id)));
if (slides.some(s => !s || s.type !== "SLIDE")) throw new Error("Inspect current slide IDs before applying");
const rows = figma.currentPage.children.filter(n => n.type === "SLIDE_GRID").flatMap(g => g.children);
const grid = rows.filter(r => r.type === "SLIDE_ROW").map(r => r.children.filter(n => n.type === "SLIDE"));
if (!grid.length) throw new Error("Cannot read actual slide rows");
const flat = grid.flat();
const matched = flat.filter(s => order.includes(s.id));
if (matched.length !== 5 || flat.slice(0,5).some(s => !order.includes(s.id))) throw new Error("Batch structure changed; inspect before reordering");
const texts = slides.map(s => s.findAllWithCriteria({types:["TEXT"]}));
const numbers = texts.map(ts => ts.find(t => t.name === "Номер"));
const towerTitle = texts[3].find(t => t.characters === "БАШНЯ\nДЛЯ НОВОГО МИРА" || t.characters === "БАШНЯ:\nОБЩЕСТВЕННАЯ\nЗАДАЧА");
const towerPurpose = texts[3].find(t => t.characters === "Искусство, техника,\nобщественная функция." || t.characters === "Помещения\nдля общественной работы.");
if (numbers.some(n => !n) || !towerTitle || !towerPurpose) throw new Error("Expected text changed; inspect current content");
const images = await Promise.all(["4:11","4:38","4:57","4:61","4:87"].map(id => figma.getNodeByIdAsync(id)));
if (images.some(n => !n || !Array.isArray(n.fills) || !n.fills.some(f => f.type === "IMAGE"))) throw new Error("Expected image missing");
const fonts = new Map();
for (const ts of texts) for (const t of ts) for (const seg of t.getStyledTextSegments(["fontName"])) fonts.set(JSON.stringify(seg.fontName), seg.fontName);
await Promise.all([...fonts.values()].map(f => figma.loadFontAsync(f)));
const mutated = [];
let index = 0;
figma.setSlideGrid(grid.map(row => row.map(s => order.includes(s.id) ? slides[index++] : s)));
mutated.push(...rows.map(r=>r.id));
for (let i=0;i<slides.length;i++) {
  slides[i].name = String(i+1).padStart(2,"0") + " / " + titles[i];
  slides[i].speakerNotes = notes[i];
  numbers[i].characters = String(i+1).padStart(2,"0");
  mutated.push(slides[i].id,numbers[i].id);
}
towerTitle.characters = "БАШНЯ:\nОБЩЕСТВЕННАЯ\nЗАДАЧА";
towerTitle.fontSize = 88;
towerPurpose.characters = "Помещения\nдля общественной работы.";
mutated.push(towerTitle.id,towerPurpose.id);
for (const n of images) {
  n.fills = n.fills.map(f => f.type === "IMAGE" ? {...f,filters:{...f.filters,saturation:0}} : f);
  mutated.push(n.id);
}
return {mutatedNodeIds:[...new Set(mutated)], slideIds:order, needsVisualReview:true};
