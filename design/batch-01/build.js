const C={paper:{r:241/255,g:235/255,b:221/255},ink:{r:23/255,g:23/255,b:21/255},red:{r:201/255,g:55/255,b:40/255},muted:{r:98/255,g:93/255,b:84/255}};
await Promise.all([{family:"Oswald",style:"Bold"},{family:"PT Sans",style:"Regular"},{family:"PT Sans",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=[],slides=[],images={};
function record(n,name){n.name=name;ids.push(n.id);return n}
function frame(p,name,x,y,w,h,c){const n=record(figma.createFrame(),name);p.appendChild(n);n.resize(w,h);n.fills=c?[{type:"SOLID",color:c}]:[];n.x=x;n.y=y;return n;}
function rect(p,name,x,y,w,h,c){const n=record(figma.createRectangle(),name);p.appendChild(n);n.resize(w,h);n.fills=[{type:"SOLID",color:c}];n.x=x;n.y=y;return n;}
function txt(p,name,str,x,y,w,size=40,color=C.ink,display=false,bold=false){const n=record(figma.createText(),name);p.appendChild(n);n.fontName=display?{family:"Oswald",style:"Bold"}:{family:"PT Sans",style:bold?"Bold":"Regular"};n.fontSize=size;n.lineHeight={unit:"PERCENT",value:display?110:120};n.characters=str;n.fills=[{type:"SOLID",color}];n.resize(w,Math.max(size*1.2,1));n.textAutoResize="HEIGHT";n.x=x;n.y=y;return n;}
function stack(p,name,x,y,w,items,gap=15){const n=record(figma.createAutoLayout("VERTICAL"),name);p.appendChild(n);n.fills=[];n.itemSpacing=gap;n.counterAxisSizingMode="FIXED";n.resize(w,100);n.x=x;n.y=y;for(const t of items){const a=txt(n,t.name||t.text,t.text,0,0,w,t.size||40,t.color||C.ink,t.display||false,t.bold||false);a.layoutSizingHorizontal="FILL";}return n;}
function pic(p,key,x,y,w,h){const n=rect(p,"Изображение / "+key,x,y,w,h,C.paper);images[key]=n.id;return n;}
function slide(name,bg=C.paper){const s=record(figma.createSlide(),name);s.fills=[{type:"SOLID",color:bg}];slides.push(s);return s;}
function footer(s,num,dark=false){txt(s,"Колонтитул","СОВЕТСКИЙ КОНСТРУКТИВИЗМ",88,1022,900,23,dark?C.paper:C.muted,false,true);txt(s,"Номер",num,1745,1010,90,32,dark?C.paper:C.ink,true);}
let s=slide("01 / Как эпоха меняет город?");
txt(s,"Рубрика","ИСТОРИЯ  /  АРХИТЕКТУРА  /  ГРАФИКА",88,64,1200,28,C.ink,false,true);
rect(s,"Красная метка",1744,64,88,18,C.red);
stack(s,"Титульный вопрос",88,187,850,[{text:"КАК ЭПОХА",size:148,display:true},{text:"МЕНЯЕТ",size:148,display:true},{text:"ГОРОД?",size:168,display:true,color:C.red}],0);
txt(s,"Период","1920-е — 1930-е",1040,192,810,90,C.red,true);
pic(s,"narkomfin",960,355,960,640);
stack(s,"Вступительный тезис",88,790,800,[{text:"Советский конструктивизм",size:44,bold:true},{text:"Пространство, вещи, информация —\nчасти общего замысла.",size:38}],16);
txt(s,"Подпись изображения","Дом Наркомфина",1040,305,600,27,C.muted);
footer(s,"01");
s=slide("02 / Новая жизнь после потрясений");
const left=frame(s,"1917 / потрясения",0,0,700,995,C.ink);
txt(left,"Рубрика","ИСТОРИЧЕСКИЙ КОНТЕКСТ",88,65,535,27,C.paper,false,true);
txt(left,"Дата революции","1917",80,217,570,226,C.paper,true);
stack(left,"Революция и последствия",88,540,530,[{text:"РЕВОЛЮЦИЯ",size:60,display:true,color:C.paper},{text:"Гражданская война\nи разруха",size:47,color:C.paper},{text:"Нехватка жилья.\nРазрушение хозяйства.",size:37,color:C.paper}],27);
stack(s,"Контекст НЭПа",800,72,1030,[{text:"НОВАЯ ЖИЗНЬ\nПОСЛЕ ПОТРЯСЕНИЙ",size:88,display:true},{text:"С 1921 ГОДА",size:92,display:true,color:C.red}],38);
stack(s,"Новая экономическая политика",800,477,970,[{text:"НЭП",size:120,display:true},{text:"Новая экономическая политика",size:42,bold:true},{text:"Восстановление хозяйства",size:41}],10);
const band=frame(s,"Поиск нового быта",700,805,1220,190,C.red);
txt(band,"Новый быт","ПОИСК НОВОГО БЫТА",100,40,1040,70,C.paper,true);
footer(s,"02");
s=slide("03 / Башня для нового мира");
pic(s,"tatlin",0,0,746,998);
txt(s,"Подпись модели","Модель проекта памятника III Интернационалу",24,1022,780,24,C.muted);
rect(s,"Красный вертикальный акцент",788,88,13,897,C.red);
stack(s,"Башня Татлина",865,76,970,[{text:"ВЛАДИМИР ТАТЛИН",size:30,bold:true},{text:"БАШНЯ\nДЛЯ НОВОГО МИРА",size:105,display:true}],28);
txt(s,"Датировка проекта","1919–1920",865,442,930,102,C.red,true);
stack(s,"Назначение проекта",865,595,950,[{text:"Памятник III Интернационалу",size:45,bold:true},{text:"Искусство, техника,\nобщественная функция.",size:44}],21);
const status=frame(s,"Статус проекта",865,823,630,110,C.ink);txt(status,"Не построена","НЕ ПОСТРОЕНА",30,23,570,46,C.paper,true);
txt(s,"Дата относится к проекту","Проект и модель",865,950,820,29,C.muted);
txt(s,"Номер","03",1745,1010,90,32,C.ink,true);
s=slide("04 / Один конкурс — разные пути");
txt(s,"Тема","ДВОРЕЦ ТРУДА  /  МОСКВА  /  1922–1923",88,55,1400,28,C.muted,false,true);
txt(s,"Заголовок","ОДИН КОНКУРС — РАЗНЫЕ ПУТИ",88,123,1744,95,C.ink,true);
const tro=frame(s,"Первая премия / Троцкий",88,285,460,625);
txt(tro,"Первая премия","I ПРЕМИЯ",0,0,460,55,C.ink,true);
pic(tro,"trotsky",0,90,290,483);
txt(tro,"Ной Троцкий","Ной Троцкий",0,585,460,34,C.ink,false,true);
const ves=frame(s,"Третья премия / Веснины",646,285,1186,625);
txt(ves,"Третья премия","III ПРЕМИЯ",0,0,1150,55,C.red,true);
pic(ves,"vesnin",0,90,1034,483);
txt(ves,"Братья Веснины","Александр, Виктор и Леонид Веснины",0,585,1186,32,C.ink,false,true);
rect(s,"Разделитель проектов",589,285,3,625,C.ink);
const strip=frame(s,"Историческое значение",88,945,1510,59,C.red);
txt(strip,"Значение Весниных","ПРОЕКТ ВЕСНИНЫХ — ВАЖНАЯ ВЕХА КОНСТРУКТИВИЗМА",18,11,1470,28,C.paper,false,true);
txt(s,"Не построен","Не построен",1620,956,230,28,C.ink,false,true);
footer(s,"04");
s=slide("05 / Сначала задача — затем форма");
txt(s,"Рубрика","КАК ЧИТАТЬ КОНСТРУКТИВИСТСКОЕ ЗДАНИЕ",88,62,1560,28,C.muted,false,true);
txt(s,"Заголовок","СНАЧАЛА ЗАДАЧА — ЗАТЕМ ФОРМА",88,137,1744,94,C.ink,true);
const qs=[["01","ФУНКЦИЯ","Что происходит\nвнутри?"],["02","ОБЪЁМЫ И СВЯЗИ","Как перемещаются\nлюди?"],["03","КОНСТРУКЦИЯ","Что держит здание\nи открывает пространство?"]];
for(let i=0;i<3;i++){const g=frame(s,"Вопрос "+(i+1),88,330+i*210,650,190);txt(g,"Номер вопроса",qs[i][0],0,0,110,64,C.red,true);stack(g,"Вопрос и пояснение",130,0,510,[{text:qs[i][1],size:35,bold:true},{text:qs[i][2],size:37}],11);}
pic(s,"gosprom",790,330,1130,665);
txt(s,"Объект","Госпром, Харьков",884,282,940,28,C.muted);
footer(s,"05");
return {createdNodeIds:ids,slides:slides.map(s=>({id:s.id,name:s.name,width:s.width,height:s.height})),images};
