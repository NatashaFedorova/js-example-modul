// ========================================================================================
// ================================Перебирающие методы=====================================
// ========================================================================================

// ====================================Метод forEach=======================================
// const numbers = [5, 10, 15, 20, 25, 30];

// numbers.forEach(function (num, idx, array) {
//   console.log(`Елемент массива - ${num} с индексом ${idx} в массиве ${array}`);
// });

// ==================================================================
// forEach(function(element, index, array) { /* ... */ }, thisArg) - у метода есть 2 аргумента
// thisArg -необязательный параметр. Значение, используемое в качестве this при вызове функции callback.
// Если в метод forEach() был передан параметр thisArg,
// при вызове callback он будет использоваться в качестве значения this.

// const numbers = [5, 10, 15, 20, 25, 30];

// numbers.forEach(
//   function (num) {
//     console.log(`Елемент массива - ${num}`);
//     console.log(this);
//   },
//   { a: 5, b: 10 }
// );
// console.log(numbers);

// ИЛИ ============================================
// const numbers = [5, 10, 15, 20, 25, 30];

// numbers.forEach(function (num) {
//   console.log(`Елемент массива - ${num}`);
//   console.log(this);
// }, numbers);
// console.log(numbers);

// =======================================Метод map=========================================
// перебирает оригинаьный массив
// не изменят  оригинальный массив
// возвращает новый массив такой же длины
// если не указаны новые значения для нового массива - будет undefined (для каждого)
// const numbers = [5, 10, 15, 20, 25, 30];

// const doubleNums = numbers.map(function (number) {
//   console.log(number);
// });
// console.log(`doubleNums`, doubleNums); // doubleNums(6)[(undefined, undefined, undefined, undefined, undefined, undefined)];

// =============================================================
// если указаны новые значения для нового массива - будут они
// const numbers = [5, 10, 15, 20, 25, 30];

// const doubleNums = numbers.map(function (number) {
//   console.log(number);
//   return 55555;
// });
// console.log(`doubleNums`, doubleNums); // doubleNums (6) [55555, 55555, 55555, 55555, 55555, 55555]

// ==============================================================
// или так...
// const numbers = [5, 10, 15, 20, 25, 30];

// const doubleNums = numbers.map(function (number) {
//   console.log(number);
//   return number;
// });
// console.log(`doubleNums`, doubleNums); // doubleNums (6) [5, 10, 15, 20, 25, 30]

// ==============================================================
// или так...
// const numbers = [5, 10, 15, 20, 25, 30];

// const doubleNums = numbers.map(number => number * 3);
// console.log(`doubleNums`, doubleNums); // doubleNums (6) [15, 30, 45, 60, 75, 90]

// ===================================Метод map. Задача=========================================
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];
// console.table(players);

// массив из  players.name===============================================================
// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames); // playerNames (5) ['Mango', 'Kiwi', 'Pear', 'Cherry', 'Ajax']

// список из id==========================================================================
// const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds); //playerIds (5) ['player-1', 'player-2', 'player-3', 'player-4', 'player-5']

// список из объектов name:... и isOnline:...=============================================
// const players2 = players.map(({ name, isOnline }) => ({
//   name,
//   isOnline,
// }));
// console.log(players2);
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {name: 'Mango', isOnline: true}...

// увеличить кол-о points для каждого игрока на 20%=========================================
// const increaseQuantityPoints = players.map(player => ({
//   ...player,
//   points: Math.round(player.points * 1.2), // 1.2 = 120%
// }));

// console.log(increaseQuantityPoints);
//  (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 65}

// у player-3 изменить  timePlayed на 100
// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player =>
//   player.id === playerIdToUpdate
//     ? {
//         ...player,
//         timePlayed: player.timePlayed + 100,
//       }
//     : player
// );

// console.table(updatedPlayers);

// ===================================Метод filter. Задача=========================================
// const numbers = [5, 10, 15, 20, 25, 30];
// const filteredArray1 = numbers.filter(number => number > 15);
// console.log(filteredArray1); // [20, 25, 30]

// const filteredArray2 = numbers.filter(number => number >= 15 && number < 30);
// console.log(filteredArray2); // [15, 20, 25]

// ===================================Метод filter. Задача=========================================
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];
// console.table(players);

// // все игроки, которые онлайн
// const playersIsOnline = players.filter(player => player.isOnline);
// console.log(playersIsOnline);

// // все игроки, которые офлайн
// const playersIsOffline = players.filter(player => !player.isOnline);
// console.log(playersIsOffline);
// console.log(players);

// // все игроки, у которых timePlayed > 250
// const topPlayersByTimePlayed = players.filter(player => player.timePlayed > 250);
// console.log(topPlayersByTimePlayed);

// ===================================Метод find. Задача=========================================
// const numbers = [5, 10, 15, 20, 25, 30];

// const filteredValue1 = numbers.find(num => num === 15);
// console.log(filteredValue1); // 15 - это не  массив

// const filteredValue2 = numbers.find(num => num > 15);
// console.log(filteredValue2); // 20 - это не  массив

// ===================================Метод find. Задача=========================================
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];
// console.table(players);

// найти игрока с id - 'player-3'
// const playerIdToFind = 'player-3';
// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId); //{id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48}

// найти игрока с id - 'player-3' другой способ записи
// const findPlayerById = (allPlayers, playerId) => allPlayers.find(({ id }) => id === playerId);
// console.log(findPlayerById(players, 'player-5')); // {id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48}

// найти игрока с name: 'Cherry'
// const playerNameToFind = 'Cherry';
// const playerWitName = players.find(({ name }) => name === playerNameToFind);
// console.log(playerWitName); // {id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71}

// ===================================Метод every(). Задача=========================================
// метод возвращает true или false, как проверка всех
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];
// console.table(players);

// const allPlayersIsOnline = allPlayers => allPlayers.every(player => player.isOnline);
// console.log(allPlayersIsOnline(players)); //false

// ===================================Метод some(). Задача=========================================
// метод возвращает true или false, если соответствует хотя бы 1 элемент
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];
// console.table(players);

// const findPlayersByTimePlayed = (allelements, value) =>
//   allelements.some(({ timePlayed }) => timePlayed === value);
// console.log(findPlayersByTimePlayed(players, 240)); // true

// const somePlayersIsOnline = allPlayers => allPlayers.some(player => player.isOnline);
// console.log(somePlayersIsOnline(players)); // true

// const anyHardcorePlayers = (allPlayers, value) =>
//   allPlayers.some(({ timePlayed }) => timePlayed > value);
// console.log(anyHardcorePlayers(players, 250)); // true

// ===================================Метод reduce(). Задача=========================================
// acc - это вроде let total = ?;
// при этом ? это любое число
// или, если не задано,  значение 1 элемента
//  или значение return
// const numbers = [5, 10, 15, 20, 25, 30];

// вариант 1
// const total = numbers.reduce((acc, number) => {
//   //   console.log('acc', acc);
//   //   console.log('number', number);

//   return acc + number;
// }, 0);
// console.log(total);

// вариант 2
// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// ===================================Метод reduce(). Задача=========================================
// total  salary
// const salary = {
//   mango: 1000,
//   kiwi: 1500,
//   pear: 2000,
// };

// const totalsalary = Object.values(salary).reduce((total, value) => total + value, 0);
// console.log(totalsalary); // 4500

// ===================================Метод reduce(). Задача=========================================
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];

// const totalTimePlayed = players.reduce((total, { timePlayed }) => total + timePlayed, 0);
// console.log(totalTimePlayed); //1250

// ===================================Метод reduce(). Задача=========================================
// const cart = [
//   { name: '🍎', price: 50, quatity: 5 },
//   { name: '🍇', price: 70, quatity: 4 },
//   { name: '🍑', price: 60, quatity: 7 },
//   { name: '🍌', price: 110, quatity: 2 },
// ];
// const totalAmoumt = cart.reduce((total, { price, quatity }) => total + price * quatity, 0);
// console.log(totalAmoumt); // 1170

// ===================================Метод reduce(). Задача=========================================
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// распыляеться в начале аккумулятор - пустой масив, а потом распыляеться значение tweet.tags
// после первой итерации -распыляется массив после первой итерации (...acc) а потом ...tweet.tags() со второва объекта и т д
// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags); //  ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// =============================================================
// ведем статистику тегов в виде объекта,
//  где имя тега это ключ, а значение свойства -
//  это количество одинаковых тегов
// если свойство с ключем(tag) есть - +1
// если свойство с ключем(tag) нет - сделать, задать  - 1
// acc[tags] - возвращает имя ключа

// вариант 1 - плохой
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(tag);
//   console.log(acc[tag]);

//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});
// console.log(tagsStats); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// вариант 2
// const tagsStats = allTags.reduce(
//   (acc, tag) =>
//     acc[tag]
//       ? {
//           ...acc,
//           [tag]: (acc[tag] += 1),
//         }
//       : {
//           ...acc,
//           [tag]: 1,
//         },
//   {}
// );
// console.log(tagsStats); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

//  вариант 3
// const tagsStats = allTags.reduce(
//   (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
//   {}
// );

// console.log(tagsStats); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// ===================================Повтор инфо про объект=========================================
// const obj = {
//   name: 'Apple',
//   color: 'blue',
//   quantity: 4,
// };
// console.log(Object.keys(obj)); // ['name', 'color', 'quantity'];
// console.log(Object.values(obj)); // ['Apple', 'blue', 4]
// console.log(obj.name); // Apple
// console.log(obj['name']); // Apple

// const key = 'name';
// console.log(obj[key]); // Apple
