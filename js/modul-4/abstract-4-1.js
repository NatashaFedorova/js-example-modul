//==================================Callback-function===========================================
// function greet(name) {
//   return `Ласкаво просимо ${name}`;
// }
// викликаємо фунуцію та виводимо в консоль результат
// console.log(greet('Nata'));
// Ласкаво просимо Nata

// виводимо фнкцію greet у консоль
// console.log(greet);
// ƒ greet(name) {
//   return `Ласкаво просимо ${name}`;
// }

// const functionGreet = greet;
// console.log(functionGreet);
// ƒ greet(name) {
//   return `Ласкаво просимо ${name}`;
// }
//==========================Callback-function & higher order function===========================================
// Callback-function, нижче
// function greet(name) {
//   console.log(`Ласкаво просимо${name}`);
// }
// // higher order function, нижче
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}`);
//   callback(name);
// }

// registerGuest('Nata', greet);

//==========================Callback-function & higher order function===========================================
// приклад 2( мій)
// function messageAboutAdult(number) {
//   return `Ви повнолтній! Ваш вік  ${number}`;
// }
// function adult(number, messageAboutAdult) {
//   if (number >= 18) {
//     const res = messageAboutAdult(number);
//     return res;
//   }
//   return `Ви не повнолтній!  Ваш вік  ${number}`;
// }

// console.log(adult(23, messageAboutAdult));
// console.log(adult(17, messageAboutAdult));

//==========================================Інлайн колбеки======================================================
// function registerGuest(name, callback) {
//   console.log(`Вітаємо ${name}`);
//   callback(name);
// }

// registerGuest('Nata', function greet(name) {
//   console.log(`Шановний (-вна) ${name}, ми забронювали для вас номер`);
// });

// registerGuest('Poly', function greet(name) {
//   console.log(`Шановний (-вна) ${name}, ваш номер буде готовий через 30 хвилин`);
// });

//=======================================Декілька колбеків===================================================
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// // processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Полі', takeCall, leaveHoloMessage);

//=================================Абстрагирование повторения=========================================
// напишем функцию, которая вызывает console.log() N раз
// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);
// repeatLog(10);

//=================================Абстрагирование повторения=========================================
// Оскільки «робити щось» можна уявити функцією,
// а функції - це просто значення, ми можемо передати дію як аргумент.
// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// printValue(2);
// prettyPrint(2);

// Передаємо printValue як callback-функцію
// repeat(3, printValue);
// 0
// 1
// 2

// Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

//=================================Метод forEach=========================================
// массив.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

//===============================Стрілочні функції=======================================
// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// console.log(arrowAdd(1, 2, 3));

//================Стрілочні функції - explicit return (явне повернення)=============================
// const add = (a, b, c) => {
//   console.log(a, b, c); // 1 2 3
//   return a + b + c;
// };
// console.log(add(1, 2, 3)); // 6

//================Стрілочні функції - implicit return (неявне повернення)=============================
// const add = (a, b, c) => a + b + c;
// console.log(add(1, 2, 3)); //

//==========================Стрілочні функції та псевдомасив arguments================================
// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

//=================================Стрілочні функції як колбеки=======================================
// const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// =============
// const colors = ['black', 'red', 'blue'];
// colors.forEach((color, index) => {
//   console.log(`Індекс - ${index}, значення - ${color}`);
// });

// =============
// const basket = [
//   { name: '🍎', price: 50 },
//   { name: '🍇', price: 70 },
//   { name: '🍑', price: 60 },
//   { name: '🍌', price: 110 },
// ];

// basket.forEach((product, index) => {
//   console.log(`Індекс - ${index}, значення - ${product.name}`);
// });
// Індекс - 0, значення - 🍎
// Індекс - 1, значення - 🍇
// Індекс - 2, значення - 🍑
// Індекс - 3, значення - 🍌

//========================Стрілочні функції як колбеки oголошуємо окремо================================
// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

//====================================== Імперативний підхід ===========================================
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

//====================================== Декларативний підхід ===========================================
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]