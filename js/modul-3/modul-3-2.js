//-------------------- Оперция SPREAD (распыление) аналог concat---------------------------
//  Array.prototype.concat()  и аналог через spread
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//  Оперция SPREAD
// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const numbers = [...[1, 2, 3], 4, 5]; // распыляем масив
// console.log(numbers); // [1, 2, 3, 4, 5]

// const numbers = [...[1, 2, 3]]; // распыляем масив
// console.log(numbers); // [1, 2, 3]

// const numbers = [0.5, 0.75, ...[1, 2, 3], 4, 5, 6]; // распыляем масив
// console.log(numbers); // [0.5, 0.75, 1, 2, 3, 4, 5, 6]

// const numbers = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000, ...[7, 8, 9], 9000]; // распыляем масив
// console.log(numbers); //[1000, 1, 2, 3, 5000, 4, 5, 6, 7000, 7, 8, 9, 9000]

//-------------------- Оперция SPREAD (распыление) задача---------------------------
// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6)); // 17 - поиск самого большого числа, если не массив
// console.log(Math.max(...temps)); // 29 - поиск самого большого числа, если  массив

//-------------------- Оперция SPREAD (распыление) пример---------------------------
// const a = [1, 2, 3];
// const b = [...a]; // в этот массив распылились элементы, копия елементов с а
// console.log(a); // [1, 2, 3]
// console.log(b); // [1, 2, 3]
// console.log(a === b); // false - a  и  b ссылочный тип

//-------------------- Оперция SPREAD (распыление) пример---------------------------
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];
// console.log('a:', a); // a: (3) [{…}, {…}, {…}] // 0: {x: 1}
// console.log('b:', b); // b: (3) [{…}, {…}, {…}]

// console.log(a[0] === b[0]); // true
// console.log(a === b); // false

// ------Обратить внимание на значение ключа х, до и после изменения этого значения!!!!!!!!!!!-----
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];
// console.log('a:', a); // a: (3) [{…}, {…}, {…}] // 0: {x: 1000}
// console.log('b:', b); // b: (3) [{…}, {…}, {…}]

// console.log(a[0] === b[0]); // true
// console.log(a === b); // false

// a[0].x = 1000; // меняем значение  ключа х

// console.log('a:', a); //0: {x: 1000}
// console.log('b:', b); //0: {x: 1000}

//-------------------- Оперция SPREAD (распыление) пример---------------------------
// const lastWeekTemps = [1, 2, 3];
// const currenttWeekTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currenttWeekTemps, ...nextWeekTemps];

// console.log(allTemps); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//-------------------- Оперция SPREAD (распыление) пример---------------------------
// запись с Object.assign() - устаревший способ----------------
// const a = { x: 1, y: 2 };
// const b = { x: 15, c: 25 };

// const all = Object.assign({}, a, b);
// console.log(all); // {x: 15, y: 2, c: 25}

// запись с ...spread----------------
// const a = { x: 1, y: 2 };
// const b = { x: 15, c: 25 };

// const all = { ...a, ...b };
// console.log(all); // {x: 15, y: 2, c: 25}

//-------------------- Оперция SPREAD (распыление) пример---------------------------
// const a = { x: 1, y: 2 };
// const b = { x: 15, c: 25 };

// const all = {
//   ...a,
//   X: 10,
//   ...b,
//   y: 20,
// };
// {}
// a  -  x: 1, y: 2
// x: 10
// b - x: 15, c: 25
// y: 20

// console.log(all); // {x: 15, y: 20, X: 10, c: 25}

//------------------------SPREAD (распыление) пример--------------------------------
// const defauiltSettings = {
//   theme: 'dark',
//   showNotification: 'true',
//   hideSidebar: 'false',
// };
// const userSettings = {
//   theme: 'light',
//   showNotification: 'true',
//   hideSidebar: 'false',
// };

// const finalSettings = {
//   ...defauiltSettings,
//   ...userSettings,
// };
// console.log(finalSettings); //{theme: 'light', showNotification: 'true', hideSidebar: 'false'}

//------------------------Деструктуризация объекта--------------------------------
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
// };

// громоздкий код
// console.log(playlist.name, playlist.rating, playlist.tracks, playlist.trackCount);
// Kaleo 8 (3) ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'] 3

// более  чисты код
// const { rating } = playlist;
// console.log(rating); //8

// const { name, rating, tracks, trackCount } = playlist;
// console.log(rating, tracks); //8 (3) ['Skinny', 'Break My Baby', 'Into My Mother`s Arms']
// console.log(`Rating: ${rating}.`, `Tracks: ${tracks}`); // Rating: 8. Tracks: Skinny,Break My Baby,Into My Mother`s Arms
// console.log(name, rating, tracks, trackCount); // Kaleo 8 (3) ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'] 3

// undefined
// const { name, rating, trackssssssssss, trackCount } = playlist;
// console.log(trackssssssssss); // undefined

// вносим изменения
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
// };
// const { name, rating, tracks, trackCount } = playlist;
// console.log(name, rating, tracks, trackCount); // Kaleo 8(3)['Skinny', 'Break My Baby', 'Into My Mother`s Arms'] 3

// tracks.push('Backbone');
// console.log(name, rating, tracks, trackCount); // Kaleo 8 (4) ['Skinny', 'Break My Baby', 'Into My Mother`s Arms', 'Backbone'] 3

//------------------Деструктуризация объекта(значение по умолчанию)------------------------
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
// };
// const { name, rating, tracks, trackCount, author = 'Jökull Júlíusson' } = playlist;
// console.log(name, rating, tracks, trackCount, author); // Kaleo 8 (3) ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'] 3 Jökull Júlíusson

// есть свойство, а также значение по умолчанию------------------------------
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
//   author: 'Jökull Júlíusson',
// };
// const { name, rating = 0, tracks, trackCount, author } = playlist;
// у рейтинга, есть значение по умолчанию и это свойство указано в объекте

// console.log(name, rating, tracks, trackCount, author);
// Kaleo 8 (3) ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'] 3 Jökull Júlíusson
// В консоле 8 - !!!!!

//--------------------------------Деструктуризация объекта(значение по умолчанию)------------------------------
// ЦЕЛЬ. Имя свойства  - tracks, а выводиться  - bestTracks
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
//   author: 'Jökull Júlíusson',
// };
// const { name, rating, tracks: bestTracks, trackCount, author } = playlist;
// console.log(bestTracks); // ['Skinny', 'Break My Baby', 'Into My Mother`s Arms']

// Меняем имя ключа для вывода в консоль
// const playlistFirst = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
//   author: 'Jökull Júlíusson',
// };
// const {
//   name: nameFirst,
//   rating: ratingFirst = 0,
//   tracks: tracksFirst,
//   trackCount: trackCountFirst,
//   author: authorFirst,
// } = playlistFirst;
// ========
// const playlistSecond = {
//   name: 'Kaleo',
//   rating: 9.5,
//   tracks: ['Save yourself ', 'I can’t go on without you'],
//   trackCount: 2,
//     author: 'Jökull Júlíusson',
// };
// const {
//   name: nameSecond,
//   rating: ratingSecond = 0,
//   tracks: tracksSecond,
//   trackCount: trackCountSecond,
//   author: authorSecond,
// } = playlistSecond;

// console.log('tracksFirst', tracksFirst); // tracksFirst (3) ['Skinny', 'Break My Baby', 'Into My Mother`s Arms']
// console.log('tracksSecond', tracksSecond); // tracksSecond (2) ['Save yourself ', 'I can’t go on without you']

//--------------------------------------Глубокая деструктуризация объекта------------------------------------
// const profile = {
//   nameUser: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Ukraine',
//     city: 'Kiev',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
//   first: {
//     second: {
//       third: 10,
//     },
//   },
// };

// const { nameUser, tag } = profile;
// console.log('nameUser:', nameUser, 'tag:', tag); //nameUser: Jacques Gluke tag: jgluke

// вариант 1(глубокой деструк-и)-------------------
// const { country, city } = profile.location;
// console.log(country, city); // Ukraine Kiev

// вариант 2(глубокой деструк-и)--------------------
// const {
//   nameUser,
//   tag,
//   location: { country, city },

//   stats: { followers, views, likes },
//   first: {
//     second: { third },
//   },
// } = profile;

// console.log(followers, views, likes); // 5603 4827 1308
// console.log(country, city); // Ukraine Kiev
// console.log(nameUser, tag, country, city, followers, views, likes); // Jacques Gluke jgluke Ukraine Kiev 5603 4827 1308
// console.log(third); //10

// вариант 3(глубокой деструк-и)-------------------
// const { nameUser, tag, location, stats } = profile;

// const { country, city } = location;
// const { followers, views, likes } = stats;

// console.log(country, city); // Ukraine Kiev
// console.log(followers, views, likes); // 5603 4827 1308

// undefined (глубокой деструк-и)-------------------
// const { country, city } = location;
// console.log(country, city); // undefined undefined

//--------------------------------Деструктуризация массива------------------------------
// const rgb = [255, 100, 80];
// const [red, , blue] = rgb;

// console.log(red); // 255
// console.log(green); // 100
// console.log(blue); // 80

// console.log(red, green, blue); //255 100 80

// пропускаем елемент
// const rgb = [255, 100, 80];
// const [red, , blue] = rgb;
// console.log(red, blue); //255 80

//--------------------------------Деструктуризация объекта (пример)- entries----------------------------
// найти самый высокий рейтинг
// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// способ 1
// const rating = Object.values(authors);
// console.log(Math.max(...rating)); // 9

// способ 2
// const keys = Object.keys(authors);

// for (const key of keys) {
//   console.log(key); //9 // и т.д.
//   console.log(authors[key]); // kiwi // и т д
// }

// способ 3 - Object.entries()!!!!!!!=================================!!!!!
// const entries = Object.entries(authors);
// console.log(entries); // результат в консоле ниже
// [Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['kiwi', 4]
// 1: (2) ['poly', 7]
// 2: (2) ['ajax', 9]
// 3: (2) ['mango', 6]
// for (const entry of entries) {
//   console.log(entry); // (2) ['kiwi', 4]

//   // запись  - вариант 1
//   //   const name = entry[0];
//   //   const raiting = entry[1];

//   // запись  - вариант 2
//   // const [name, raiting] = entry;

//   console.log(name, raiting); //kiwi 4
// }

// запись - вариант 3
// for (const [name, raiting] of entries) {
//   console.log(name, raiting); // kiwi 4
// }

//---------------------------------------------(...rest)----------------------------------
// const profile = {
//   nameUser: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Kiev, Ukraine',
//   avatar: 'link',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const { nameUser, tag, location, ...restProps } = profile;
// console.log(nameUser, tag, location); // Jacques Gluke jgluke Kiev, Ukraine
// console.log(restProps); // {avatar: 'link', stats: {…}}

//--------------------------------Патерн "Объект настроек (параматров)"--------------------
// const fn = function (params) {};

// вызов функции - не читабельно
// fn(10, 5, true, [], {}, 6);

// вызов функции - удобно для понимания и прочтения
// fn({
//   age: 10,
//   friends: 5,
//   isOnline: true,
//   hobbies: [],
//   games: {},
//   rating: 6,
// });

//--------------------------------Патерн "Объект настроек (параматров)" - пример--------------------
// const showProfileInfo = function (userProfile) {
//   console.log(userProfile); // {nameUser: 'Jacques Gluke', tag: 'jgluke', location: 'Kiev, Ukraine', avatar: 'link', stats: {…}}
// };

// вариант 1
// const profile = {
//   nameUser: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Kiev, Ukraine',
//   avatar: 'link',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// showProfileInfo(profile);

// вариант 2
// showProfileInfo({
//   nameUser: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Kiev, Ukraine',
//   avatar: 'link',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// });

// вариант 3
// const showProfileInfo = function (userProfile) {
//   const {
//     nameUser,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;

//   console.log(nameUser, tag, location, avatar, followers, views, likes); // Jacques Gluke jgluke Kiev, Ukraine link 5603 4827 1308
// };

// showProfileInfo({
//   nameUser: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Kiev, Ukraine',
//   avatar: 'link',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// });

// вариант 4
// const showProfileInfo = function ({
//   nameUser,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// }) {
//   console.log(nameUser, tag, location, avatar, followers, views, likes); // Jacques Gluke jgluke Kiev, Ukraine link 5603 4827 1308
// };

// showProfileInfo({
//   nameUser: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Kiev, Ukraine',
//   avatar: 'link',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// });

// вариант 5
// const showProfileInfo = function ({ nameUser, tag, location, ...rest }) {
//   console.log(nameUser, tag, location); // Jacques Gluke jgluke Kiev, Ukraine
//   console.log(rest); // {avatar: 'link', stats: {…}}
// };

// showProfileInfo({
//   nameUser: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Kiev, Ukraine',
//   avatar: 'link',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// });

//------------------------------------------Profile(начало index.html строка 21)
// const profile = {
//   nameUser: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Kiev, Ukraine',
//   avatar: 'link',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// // showProfileInfo(profile);

// const makeProfileMarkup = function (userProfile) {
//   const {
//     avatar = './images/look.com.ua-317815.jpg',
//     nameUser,
//     tag,
//     location = 'Europe',
//     stats: { followers, views, likes },
//   } = userProfile;

//   return `<div>
//       <img src="${avatar}" alt="Foto"/>
//       <p>Name: ${nameUser}</p>
//       <p>Tag: ${tag}</p>
//       <p>Location: ${location}</p>
//       <ul>
//         <li>Followers: ${followers}</li>
//         <li>Views: ${views}</li>
//         <li>Likes: ${likes}</li>
//       </ul>
//     </div>`;
// };

// const markup = makeProfileMarkup(profile);

// console.log(markup);

// document.body.insertAdjacentHTML('afterbegin', markup);
