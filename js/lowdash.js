// console.dir(_);
//==============================isEmpty()=================================
// проверяет пустой или не пустой объект
// console.log(_.isEmpty({})); // true - пустой
// console.log(_.isEmpty({ a: 2 })); // false - не пустой

//==============================get()=================================
// помогает получить глубоко вложеное свойство
// const user = {
//   nameUser: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(_.get(user, 'stats.followers')); // 5603
// ЕСЛИ  stats вообще будет отсутсвовать  -undefined

// console.log(user.stats.followers); // 5603
// ЕСЛИ  stats вообще будет отсутсвовать  - выдаст ошибку
// исправить это можно (код ниже)
// if (user && user.stats && user.stats.followers) {
//   console.log(user.stats.followers);

// ниже код, каторый заменяет if...
// console.log(user?.stats?.followers);  // это  JS

//==============================union()=================================
//объеденяет в один массив? только уникальные элементы (без повторений)
// console.log(_.union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

//==============================range()=================================
// _.range([(start = 0)], end, [(step = 1)]);  - где:
// start = 0 - необязателное значение(от какого числа начинать), по умолчанию  0
// end - обязательное (на какой заканчивается, НЕ влючительно)
//step = 1 - шаг
// console.log(_.range(5)); // [0, 1, 2, 3, 4]
// console.log(_.range(3, 9)); // [3, 4, 5, 6, 7, 8]
// console.log(_.range(2, 10, 3)); //  [2, 5, 8] - где 3 - это шаг

//==============================sortBy()=================================
// const users = [
//   { user: 'fred', age: 48 },
//   { user: 'barney', age: 36 },
//   { user: 'fred', age: 40 },
//   { user: 'barney', age: 34 },
// ];

// console.log(_.sortBy(users, ['user', 'age'])); //  [{…}, {…}, {…}, {…}] 0: {user: 'barney', age: 34}...

//==============================sum() и sumBy()=================================
// console.log(_.sum([1, 2, 3, 4, 5, 6])); // 21

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];

// console.log(_.sumBy(players, player => player.timePlayed)); // 1250

//==============================min() и max()=================================
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 240, isOnline: false, points: 92 },
//   { id: 'player-3', name: 'Pear', timePlayed: 180, isOnline: true, points: 48 },
//   { id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71 },
//   { id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48 },
// ];
// console.log(_.minBy(players, player => player.timePlayed)); // {id: 'player-5', name: 'Ajax', timePlayed: 50, isOnline: false, points: 48}
// console.log(_.maxBy(players, player => player.timePlayed)); // {id: 'player-4', name: 'Cherry', timePlayed: 470, isOnline: true, points: 71}

//==============================преобразование строки=================================
// console.log(_.camelCase('Foo Bar')); //  fooBar
// console.log(_.camelCase('--foo-bar--')); // fooBar
// console.log(_.camelCase('__FOO_BAR__')); // fooBar

// console.log(_.capitalize('FRED')); // Fred

// console.log(_.kebabCase('s j j f k l f s ')); // s-j-j-f-k-l-f-s

// ===================================================================================

// lowerCase(), upperCase() - можно использовать
//uniq(), uniqBy(), sortedUniq(), sortedUniqBy(), random() - также можно использовать
