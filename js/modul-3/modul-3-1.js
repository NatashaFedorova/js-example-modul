// ------------------------------Создаем объект (пример 1)--------------------------
// const playlist = {
//   name: 'Yes',
//   b: [2, 4],
//   c: true,
//   c: false,
// };
// console.log(playlist); // {name: 'Yes', b: Array(2), c: false}

// ---------------------------------Создаем объект (пример 2)----------------------------
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
// };
// console.log(playlist); // {name: 'Kaleo', rating: 8, tracks: Array(3), trackCount: 3}

//------------------------------------Обращение к свойству----------------------------------
// console.log(playlist.name); // Kaleo
// console.log(playlist.rating); // 8
// console.log(playlist.tracks); // ['Skinny', 'Break My Baby', 'Into My Mother`s Arms']
// console.log(playlist.trackCount); // 3

// console.log(playlist.rating); // 8
// console.log(playlist['rating']); // 8

//-------------------------------Если значение ключа лежит в переменной---------------------
// const propertyName = 'tracks';

// console.log(playlist.propertyName); // undefined
// console.log(playlist[propertyName]); // ['Skinny', 'Break My Baby', 'Into My Mother`s Arms']
// console.log(propertyName); // tracks

//----------------------Создаем объект с динамическим ключом ---------------------------------
// const userName = 'Mango';
// const email = 'mango@gmail.com';

// // const signupData = {
// //   userName: userName,
// //  userEmail: email,
// // };

// // ИЛИ, если имя ключа совпадает с именем переменной, в которой лежит значение свойства
// const signupData = {
//   userName, //  !!!!!!!!
//   userEmail: email,
// };
// console.log(signupData); // {userName: 'Mango', userEmail: 'mango@gmail.com'}

//------------------------Вычесляемые свойства(используются в формах)-------------------------------
// < input name = "color"  value = "tomato" > - отсюда берем значение
// const inputName = 'color';
// const inputValue = 'tomato';

// // const colorPickerData = {
// //   [inputName]: 5,
// // };
// // console.log(colorPickerData); // {color: 5}

// const colorPickerData = {
//   inputName: inputValue, // [] означают - пойди найди переменную с таким именем  и используй как ключ
// };
// console.log(colorPickerData); // {color: 'tomato'}

//результат, якщо [] відсутні
// const colorPickerData = {
//   inputName: inputValue, // [] означают - пойди найди переменную с таким именем  и используй как ключ
// };
// console.log(colorPickerData); //{inputName: 'tomato'}

//--------------------Добавить в объект новые елементы---------------------------
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
// };
// console.log(playlist); // {name: 'Kaleo', rating: 8, tracks: Array(3), trackCount: 3}

// playlist.songsAuthor = 'Daníel Kristjánsson';
// playlist.rating = 9.5;

// console.log(playlist); // {name: 'Kaleo', rating: 9.5, tracks: Array(3), trackCount: 3, songsAuthor: 'Daníel Kristjánsson'}

//--------------------Объект - ссылочный тип---------------------------
// console.log({ a: 1 } === { a: 1 }); // false

// const a = {
//   x: 1,
//   y: 2,
// };
// const b = a;

// console.log(a === b); // true - сравниваем пути к объекту

// ==================
// a.hello = 100;
// console.log(a); // {x: 1, y: 2, hello: 100}

// b.hello = 150;
// console.log(b); // {x: 1, y: 2, hello: 150}

// ==================
// a.hello = 100;
// b.hello = 150;

// console.log(a); // {x: 1, y: 2, hello: 150}
// console.log(b); // {x: 1, y: 2, hello: 150}

//--------------------Массивы и функции - это объекты---------------------------
// const a = [1, 2, 3];
// a.hello = ':)';

// console.log(a); // [1, 2, 3, hello: ':)']

// ==========================================
// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ':)';
// console.dir(fn);
//  f fn()
// hello: ":)"
// length: 0
// name: "fn"

//--------------------Синтаксис - метод объекта---------------------------
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
//   // ниже пример объявление метода объекта (фукция) - устаревший вариант
//   // getName: function (a) {
//   //   console.log('Это getName - функция с параметром:', a); // Это getName - функция с параметром: 5
//   // },

//   // ниже пример объявление метода объекта (фукция) - современный вариант
//   getName(a) {
//     console.log('Это getName - функция с параметром:', a); // Это getName - функция с параметром: 5
//   },
// };
// console.log(playlist); // {name: 'Kaleo', rating: 8, tracks: Array(3), trackCount: 3, getName: ƒ}
// playlist.getName(5);

//--------------------Пример метода объекта---------------------------
// метод менят name, свойство в самом объекте
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,

//   changName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },
// };

// playlist.changName('Kaleo A/B');
// console.log(playlist); // {name: 'Kaleo A/B', rating: 8, tracks: Array(3), trackCount: 3, changName: ƒ, …}

// playlist.addTrack('Way down we go');
// console.log(playlist); // {name: 'Kaleo A/B', rating: 8, tracks: Array(4), trackCount: 4, changName: ƒ, …}

// playlist.updateRating(9.5);
// console.log(playlist); // {name: 'Kaleo A/B', rating: 9.5, tracks: Array(4), trackCount: 4, changName: ƒ, …}

// ==============================================================================================================
//в  версии примера (смотреть выше), решение сo свойством trackCount возможно другим способом, ниже вариант лучше
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],

//   changName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTracksCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist); //  {name: 'Kaleo', rating: 8, tracks: Array(3), changName: ƒ, addTrack: ƒ, …}

// console.log(playlist.getTracksCount()); // 3

// playlist.addTrack('Way down we go');
// console.log(playlist); // {name: 'Kaleo', rating: 8, tracks: Array(4), changName: ƒ, addTrack: ƒ, …}

// console.log(playlist.getTracksCount()); // 4

//--------------------Object.keys - возврат ключей---------------------------
// const feetback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeetback = 0;

// const keys = Object.keys(feetback); // этот метод позволяет получить ключи
// console.log(keys); // ['good', 'neutral', 'bad']

// for (const key of keys) {
//   console.log(`${key}: ${feetback[key]}`);

//   // good: 5
//   // neutral: 10
//   // bad: 3

//   // можно и проще
//   console.log(key);
//   console.log(feetback[key]);
//   //  good
//   //  5
//   // и дальше

//   totalFeetback += feetback[key];
// }
// console.log(`Общее количество отзывов: ${totalFeetback}`); // Общее количество отзывов: 18

//--------------------Object.values - возврат значений---------------------------
// const feetback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeetback = 0;

// const values = Object.values(feetback);
// console.log(values); // [5, 10, 3];

// for (const value of values) {
//   totalFeetback += value;
// }
// console.log(totalFeetback); // 18

//--------------------Работа с коллекцией (массивом объекта)---------------------------
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Pear', online: true },
//   { name: 'Apple', online: true },
//   { name: 'Cherry', online: false },
// ];

// console.table(friends); // 0	'Mango'	false

// friends[1].newprop = 555; // 1	'Pear'	true	555 // добавит только массиву под 1 индексом
// console.table(friends[1]);

// for (const friend of friends) {
// console.log(friend); // {name: 'Mango', online: false} - перебираем по-объектно
// console.log(friend.name); //Mango // и так далее
// console.log(friend.online); // false  // и так далее
// friend.newprop = 555; // добавит всем
// }
// console.table(friends); // 1	'Pear'	true	555 // у каждого объекта появился новый ключ со свойством

//--------------------Массив объекта - поиск друга по имени---------------------------
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Pear', online: true },
//   { name: 'Apple', online: true },
//   { name: 'Cherry', online: false },
// ];

// // console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name === friendName);

//     if (friend.name === friendName) {
//       return 'найдено';
//     }
//   }
//   return ' не найдено';
// };

// console.log(findFriendByName(friends, 'Pear'));
// console.log(findFriendByName(friends, 'Bob'));

//--------------------Массив объекта - получить имена всех друзей---------------------------
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Pear', online: true },
//   { name: 'Apple', online: true },
//   { name: 'Cherry', online: false },
// ];

// console.table(friends);

// const getAllNames = function (allFriends) {
//   const friendsName = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     friendsName.push(friend.name);
//   }
//   return friendsName;
// };

// console.log(getAllNames(friends));

//--------------------Массив объекта - получить имена всех друзей, которые онлайн или оффлайн---------------------------
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Pear', online: true },
//   { name: 'Apple', online: true },
//   { name: 'Cherry', online: false },
// ];

// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends)); // [{…}, {…}],в масив  переданы объекты целиком с  именами Pear и Apple

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };
// console.log(getOfflineFriends(friends));

//--------------------Массив объекта - получить имена всех друзей, которые онлайн или оффлайн---------------------------
// 2 предидущие функции в одной
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Pear', online: true },
//   { name: 'Apple', online: true },
//   { name: 'Cherry', online: false },
// ];

// console.table(friends);

// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     console.log(friend);

// if (friend.online) {
//   friendsByStatus.online.push(friend);
//   continue;
// }

// friendsByStatus.offline.push(friend);

//  через тернарный оператор
// const key = friend.online ? 'online' : 'offline';
// friendsByStatus[key].push(friend);
//   }
//   return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

//--------------------Посчитать количество свойств в объекте---------------------------
// const playlist = {
//   name: 'Kaleo',
//   rating: 8,
//   tracks: ['Skinny', 'Break My Baby', 'Into My Mother`s Arms'],
//   trackCount: 3,
// };
// console.log(Object.keys(playlist).length); // 4
