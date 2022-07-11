// ==================================Метод sort(). Пример========================================
// по умолчанию приводит числа к строке сотрирует по Unicode
// const numbers = [61, 2, 19, 3, 74, 7, 35, 92, 56];
// numbers.sort();
// console.log(numbers); // [19, 2, 3, 35, 56, 61, 7, 74, 92]

// const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// ========================Метод sort(compareFunction). Пример==================================
// по возростанию
// const numbers1 = [23, 65, 3, 6, 33, 2, 4, 12];
// numbers1.sort((curEl, nextEl) => curEl - nextEl);
// console.log(numbers1); // [2, 3, 4, 6, 12, 23, 33, 65]

// на убывание
// const numbers2 = [61, 2, 19, 3, 74, 7, 35, 92, 56];
// numbers2.sort((curEl, nextEl) => nextEl - curEl);
// console.log(numbers2); // [92, 74, 61, 56, 35, 19, 7, 3, 2]

// по возростанию, если есть одинаковые элементы
// const numbers3 = [2, 92, 61, 2, 19, 3, 74, 7, 35, 92, 7, 56];
// numbers3.sort((curEl, nextEl) => curEl - nextEl);
// console.log(numbers3); // [2, 2, 3, 7, 7, 19, 35, 56, 61, 74, 92, 92]

// ========================Метод sort(compareFunction). Пример==================================
// sort перебирает оригинальны массив, вносит изминения - плохо
// необходимо сделать копию, а потом сортировать
// const numbers = [2, 92, 61, 2, 19, 3, 74, 7, 35, 92, 7, 56];

// вариант 1
// const numbersCoppy = [...numbers];
// numbersCoppy.sort((curEl, nextEl) => curEl - nextEl);
// console.log(numbersCoppy); // [2, 2, 3, 7, 7, 19, 35, 56, 61, 74, 92, 92]

// вариант 2
// const numbersCoppy = [...numbers].sort((curEl, nextEl) => curEl - nextEl);
// console.log(numbersCoppy); // [2, 2, 3, 7, 7, 19, 35, 56, 61, 74, 92, 92]

// console.log(numbers); // [2, 92, 61, 2, 19, 3, 74, 7, 35, 92, 7, 56]

// =============================Метод sort(). Пример=====================================
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];

//  по возростанию  timePlayed - числа
// const sortByBestplayers = [...players].sort(
//   (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );
// console.table(sortByBestplayers);

// =============================Метод sort(). Пример=====================================
// сортируем по первой букве в имени
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];

// const byName = [...players].sort((curName, nextName) =>
//   curName.name[0] > nextName.name[0] ? 1 : -1
// );

// console.table(byName);

// =============================Метод flat(). Пример=====================================
// "разглаживает" в глубину на 1 по умолчанию
// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat()); // [1, 2, 4, Array(1), 6, Array(3)]

// // "разглаживает" в глубину на 2
// console.log(array.flat(2)); // [1, 2, 4, 5, 6, 7, 8, Array(1)]

// // "разглаживает" в глубину на 3
// console.log(array.flat(3)); // [1, 2, 4, 5, 6, 7, 8, 9]

// =============================Метод flatMap(). Пример=====================================
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// вариант 1
// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags); //  ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// вариант 2
// const allTags = tweets.flatMap(el => el.tags);
// console.log(allTags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// =============================Chaining - цепочки вызова методов (пример)=====================================
// const numbers = [1, 5, 8, 15, 2];

// const sorted = numbers
//   .filter(num => num >= 2) // [5, 8, 15,2]
//   .map(num => num * 3) // [15, 24, 45, 6]
//   .sort((a, b) => a - b); // [6, 15, 24, 45]

// console.log(sorted); // [6, 15, 24, 45]

// =============================Chaining - цепочки вызова методов (пример)=====================================
// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Kiwi', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Pear', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Cherry', isOnline: true, rank: 400 },
//   { id: 'id-5', tag: 'Banana', isOnline: false, rank: 350 },
//   { id: 'id-6', tag: 'Apple', isOnline: false, rank: 200 },
// ];
// const sortedPlayersIsOnline = players
//   .filter(({ isOnline }) => isOnline)
//   .sort((a, b) => a.rank - b.rank);

// console.log(sortedPlayersIsOnline); // массив из Mango, Pear, Cherry

// const sortedPlayersIsOffline = players
//   .filter(player => !player.isOnline)
//   .sort((curRank, nextRank) => nextRank - curRank);
// console.log(sortedPlayersIsOffline); // массив из Kiwi, Banana, Apple

// ==========================Chaining - цепочки вызова методов (пример - jquery)=====================================
// const element = {
//   class: '',
//   hovered: false,

//   changeClass(cls) {
//     this.class = cls;

//     return this;
//   },

//   toggleHovered() {
//     this.hovered = !this.hovered;

//     return this;
//   },
// };

// element.toggleHovered().changeClass('open').toggleHovered();
// console.log(element); // {class: 'open', hovered: false, changeClass: ƒ, toggleHovered: ƒ}

// =============================Chaining - цепочки вызова методов (пример)=====================================
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets
//   .flatMap(el => el.tags)
//   .reduce((acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }), {});
// console.log(allTags); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
