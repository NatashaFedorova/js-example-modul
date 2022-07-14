// =================================Задача 1============================================
// ФУНКЦІЯ ЯК ЗНАЧЕННЯ
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// const result = makePizza();
// const pointer = makePizza;

// =================================Задача 2============================================
// КОЛБЕК - ФУНКЦІЇ
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// =================================Задача 3============================================
// ІНЛАЙН-КОЛБЕКИ
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// =================================Задача 4============================================
//  ДЕКІЛЬКА КОЛБЕКІВ
// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         for (const pizza of this.pizzas) {
//             if (pizza === pizzaName) {
//                 return onSuccess(pizzaName);
//             }
//         }
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     },
// };

// Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// =================================Задача 5============================================
// МЕТОД forEach(CALLBACK)
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

// вариант 1
//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

// вариант 2
//   orderedItems.forEach(function (number) {
//     return (totalPrice += number);
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

// =================================Задача 6============================================
// ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
// Change code below this line

// вариант 1
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

// вариант 2
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//       return filteredNumbers;
//     }
//   });

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //  [4, 5]

// =================================Задача 7============================================
// СПІЛЬНІ ЕЛЕМЕНТИ
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

// вариант 1
//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

// вариант 2
//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]), [2]);
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]

// =================================Задача 8============================================
// СТРІЛОЧНІ ФУНКЦІЇ
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// =================================Задача 9============================================
// НЕЯВНЕ ПОВЕРНЕННЯ
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// =================================Задача 10============================================
// СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

// =================================Задача 11============================================
//  ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]

// ================================= Задача 12 ============================================
// СПІЛЬНІ ЕЛЕМЕНТИ 2.0
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]

// =================================Задача 13============================================
// ЧИСТІ ФУНКЦІЇ
//// вариант 1
// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

// вариант 2
// function changeEven(numbers, value) {
//   const newNumbers = [];

//   numbers.forEach(num => {
//     newNumbers.push(num % 2 === 0 ? (num = num + value) : num);
//   });
//   return newNumbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5])

// =================================Задача 14============================================
// МЕТОД map()
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const planetsLengths = planets.map(planet => planet.length);

// =================================Задача 15============================================
// МЕТОД map() І МАСИВ ОБ'ЄКТІВ
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(({ title }) => title);

// console.log(titles);

// =================================Задача 16============================================
// МЕТОД flatmap()
// const books = ...строка 218 (раскомментировать )

// const genres = books.flatMap(book => book.genres);

// =================================Задача 17============================================
// ІМЕНА КОРИСТУВАЧІВ
// const getUserNames = users => users.map(user => user.name);

// =================================Задача 18============================================
//  ПОШТИ КОРИСТУВАЧІВ
// const getUserEmails = users => users.map(user => user.email);

// =================================Задача 19============================================
// МЕТОДИ filter() І find()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// const oddNumbers = numbers.filter(num => num % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);
// =================================Задача 20============================================
// ФІЛЬТРАЦІЯ УНІКАЛЬНИХ ЕЛЕМЕНТІВ
// const books = ...строка 218 (раскомментировать )

// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, idx, array) => array.indexOf(genre) === idx);

// =================================Задача 21============================================
// МЕТОД filter() І МАСИВ ОБ'ЄКТІВ
// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// =================================Задача 22============================================
//  КОРИСТУВАЧІ З КОЛЬОРОМ ОЧЕЙ
// const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);

// =================================Задача 23============================================
// КОРИСТУВАЧІ У ВІКОВІЙ КАТЕГОРІЇ
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(({ age }) => age > minAge && age < maxAge);

// =================================Задача 24============================================
// КОРИСТУВАЧІ З ДРУГОМ
// const users = [
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
// const friendName = 'Briana Decker';
// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, friendName));

// =================================Задача 25============================================
// СПИСОК ДРУЗІВ
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
// Вариант 1
// const getFriends = users => {
//   const friends = users.flatMap(user => user.friends);
//   const uniqueFriennds = friends.filter((friend, idx, friends) => friends.indexOf(friend) === idx);
//   return uniqueFriennds;
// };

// вариант 2
// const getFriends = users =>
//   users.flatMap(user => user.friends).filter((friend, idx, array) => array.indexOf(friend) === idx);

// console.log(getFriends(users));

// =================================Задача 26============================================
// АКТИВНІ КОРИСТУВАЧІ
// масив строчка 323
// const getActiveUsers = users => users.filter(({ isActive }) => isActive);

// =================================Задача 27============================================
// НЕАКТИВНІ КОРИСТУВАЧІ
// масив строчка 323
// const getActiveUsers = users => users.filter(({ isActive }) => !isActive);

// =================================Задача 28============================================
// find()
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(({ title }) => BOOK_TITLE === title);
// const bookByAuthor = books.find(({ author }) => AUTHOR === author);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// =================================Задача 29============================================
//  КОРИСТУВАЧ З ПОШТОЮ
// масив строчка 323
// const getUserWithEmail = (users, email) => users.find(user => user.email === email);

// =================================Задача 30============================================
// МЕТОД every()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 === 0);

// =================================Задача 31============================================
// ЧИ ВСІ КОРИСТУВАЧІ АКТИВНІ
// масив строчка 323
// const isEveryUserActive = users => users.every(user => user.isActive);

// =================================Задача 32============================================
// Метод some()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

// =================================Задача 33============================================
// ЧИ Є АКТИВНІ КОРИСТУВАЧІ
// масив строчка 323
// const isAnyUserActive = users => users.some(user => user.isActive);

// =================================Задача 34============================================
// Метод reduce()
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, value) => acc + value);

// const averagePlayTime = totalPlayTime / playtimes.length;

// =================================Задача 35============================================
// МЕТОД reduce() І МАСИВ ОБ'ЄКТІВ

// =================================Задача 36============================================

// =================================Задача 37============================================

// =================================Задача 38============================================

// =================================Задача 39============================================

// =================================Задача 40============================================

// =================================Задача 41============================================

// =================================Задача 42============================================

// =================================Задача 43============================================

// =================================Задача 44============================================

// =================================Задача 45============================================

// =================================Задача 46============================================

// =================================Задача 47============================================

// =================================Задача 48============================================
