// ================Стрелочные функции  явным возвратом (explicit)=============================
// объявлен  return
// const add = function (a, b, c) {
//   return a + b + c;
// };
// console.log(add(3, 5, 7)); // 15

// ================Стрелочные функции  неявным возвратом (implicit)==========================
// const add = (a, b, c) => a + b + c;
// console.log(add(3, 5, 7)); // 15

// ===================Стрелочные функции с 2-мя и больше параметрами==========================
// const add = (a, b, c) => {
//   return a + b + c;
// };
// console.log(add(3, 5, 7)); // 15

// ==============================Стрелочные функции с 1 параметром============================
// const message = word => {
//   return `стрелочная функция с 1 параметром - ${word}`;
// };
// console.log(message('параметр - без скобок')); // стрелочная функция с 1 параметром - параметр - без скобок

// ==============================Стрелочные функции без параметров============================
// const functioWithoutParameters = () => {
//   return `Functio without parameters - функция без параметров`;
// };
// console.log(functioWithoutParameters()); // Functio without parameters - функция без параметров

// ==============================Стрелочные функции и arguments============================
// const createArray = (...args) => {
//   console.log(args);
// };

// createArray(1, 5, 7, 9, 0); // [1, 5, 7, 9, 0]

// ==============================Стрелочные функции. Контекст стрелки. this============================
// контекст стрелки определяется местом ее определения, а не вызова,
// и ссылается на контекст родительсткой функции

// this объявлена в глобальном контексте, поэтому undefined
// const showThis = () => {
//   console.log('this showThis', this);
// };
// showThis(); // this showThis undefined

// ==============================Стрелочные функции (стрелки как метод объекта). this============================
// ниже обычные функции
// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this', this); // this {fullName: 'Mango', showName: ƒ}
//     console.log('this.fullName', this.fullName); // this.fullName Mango

//     const inner = function () {
//       console.log('this in inner', this);
//     };
//       inner(); // this in inner undefined

//   },
// };

// user.showName();

// this и стрелочная функция
// this ссылается на объект, в которм находится
// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this', this); // this {fullName: 'Mango', showName: ƒ}
//     console.log('this.fullName', this.fullName); // this.fullName Mango

//     const inner = () => {
//       console.log('this in inner', this);
//     };
//     inner(); // this in inner {fullName: 'Mango', showName: ƒ}
//   },
// };

// user.showName();

// ==============================Стрелочные функции (стрелки как метод объекта). this============================
// НЕ РАБОТАЕТ - UNDEFINED - this в глобальной области видимости
// const user = {
//   fullName: 'Mango',
//   showName: () => {
//     console.log('this', this); // this {fullName: 'Mango', showName: ƒ}
//     console.log('this.fullName', this.fullName); // this.fullName Mango
//   },
// };
// user.showName(); // this undefined

// ==============================Стрелочные функциии и функции-конструкторы============================
// стрелочный функции НЕ БЫВАЮТ  в функциях-конструкторах
// обычный контрукотор
// const User = function (name) {
//   this.name = name;
// };
// console.log(new User('Mango')); // User {name: 'Mango'}

// стрелочная функция - НЕ РАБОТАЕТ - ОШИБКА
// стрелочная функция не может быть конструктором
//у нее есть только CALL и нет - CONSTRUCT
// const User = name => {
//   this.name = name;
// };
// console.log(new User('Mango')); // User {name: 'Mango'}

// ===================================Стрелочные функциии как метод объекта==============================
// const objA = {
//   x: 5,
//   showX() {
//     console.log('this.x', this.x);

//     const objB = {
//       y: 10,

//       showY() {
//         console.log('this.y', this); // this.y {y: 10, showY: ƒ}
//       },
//     };
//     objB.showY();
//   },
// };
// objA.showX(); // 5

// Стрелочные функциии - НЕ РАБОТАЕТ
// const objA = {
//   x: 5,
//   showX() {
//     console.log('this.x', this.x);

//     const objB = {
//       y: 10,

//       showY: () => {
//         console.log('this.y', this); // this.y {x: 5, showX: ƒ}
//       },
//     };
//     objB.showY();
//   },
// };
// objA.showX(); // 5

// ===================================Стрелочные функциии. Задача 1-1==============================
// из массива  чисел нужно получить числа больше 2
// обычная функция
// const numbers = [1, 5, 8, 15, 2];

// const greaterThenTwo = numbers.filter(function (num) {
//   return num >= 2;
// });
// console.log(greaterThenTwo); // [5, 8, 15, 2]

//Стрелочные функциии
// const greaterThenTwo = numbers.filter(num => num >= 2);
// console.log(greaterThenTwo); // [5, 8, 15,2]

// ===================================Стрелочные функциии. Задача 1-2==============================
// трансформация массива, умножаес каждое число на 3
// обычная функция
// greaterThenTwo - из примера выше (раскомментировать)
// const multByThree = greaterThenTwo.map(function (num) {
//   return num * 3;
// });
// console.log(multByThree); // [15, 24, 45, 6]

//стрелочные функциии
// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree); // [15, 24, 45, 6]

// ===================================Стрелочные функциии. Задача 1-3==============================
// сортируем от меньшего к большему
// multByThree - из примера выше (раскомментировать)
// обычная функция
// const sorted = multByThree.sort(function (a, b) {
//   return a - b;
// });
// console.log(sorted); // [6, 15, 24, 45]

//стрелочные функциии
// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted); // [6, 15, 24, 45]

// ===================================Стрелочные функциии (цепочка методов) Задача 1-3==============================
// числа >= 3
// умножить на 3
// порядок  - на спад
// обычная функция ниже
// filter(function (num) {
//     return num >= 3;
// })

//стрелочные функциии
// const numbers = [1, 5, 8, 15, 2, 6];
// const res = numbers
//   .filter(num => num >= 3)
//   .map(num => num * 3)
//   .sort((a, b) => b - a);

// console.log(res); // [45, 24, 18, 15]

// ===================================Стрелочные функциии (цепочка методов) Задача 1-3==============================
// обычная функция
// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Kiwi', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Pear', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Cherry', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//   .filter(function (player) {
//     return player.isOnline;
//   })
//   .sort(function (prevPlayer, nextPlayer) {
//     return prevPlayer.rank - nextPlayer.rank;
//   });

// console.log(onlineAndSorted);

//стрелочные функциии
// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.log(onlineAndSorted);

// ===================================Стрелочные функциии (цепочка методов) Задача 1-3==============================
// увеличить количество points
// увеличить количество часов игрока по id
// обычная функция
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
  { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
  { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
  { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
  { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
];

const upatedPlayers = players.map(function (player) {
  return {
    ...player,
    points: player.points + player * 0.1,
  };
});

console.table(upatedPlayers);
//стрелочные функциии
