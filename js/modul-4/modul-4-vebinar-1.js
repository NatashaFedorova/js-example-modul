// ==============================Задача==========================
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.forEach(number => console.log(number)); //перебеираем каждый элемент numbers

// ==============================Задача. Method map()==========================
// каждыйэлемент перемножить на 2
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);

// const res = numbers.map(num => num * 2);
// console.log(res); // [2, 4, 6, 8, 10, 12, 14]

// const res2 = numbers.map(num => num + 100);
// console.log(res2); // [101, 102, 103, 104, 105, 106, 107]

// ==============================Задача. callback()==========================
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// callback-function
// const add = number => number + 100;
// const mult = number => number * 2;

// const mapFunction = (array, callback) => {
//   const newArray = [];
//   array.forEach(item => newArray.push(callback(item)));

//   return newArray;
// };

// console.log(mapFunction(numbers, add)); // [101, 102, 103, 104, 105, 106, 107]
// console.log(mapFunction(numbers, mult)); // [2, 4, 6, 8, 10, 12, 14]
// console.log(mapFunction(numbers, number => number * 10)); // [10, 20, 30, 40, 50, 60, 70]

// console.log(
//   mapFunction(
//     ['www.google.com', 'www.facebook.com', 'www.amazon.com'],
//     url => `<a href='${url}'>${url}</a>`
//   )
// ); //  ["<a href='www.google.com'>www.google.com</a>", "<a href='www.facebook.com'>www.facebook.com</a>", "<a href='www.amazon.com'>www.amazon.com</a>"]

// ==============================Задача. callback()==========================
// найти необходимый объект в массиве
// const persons = [
//   { name: 'Mango', age: 18, isOnline: true },
//   { name: 'Kiwi', age: 20, isOnline: false },
//   { name: 'Pear', age: 25, isOnline: true },
//   { name: 'Cherry', age: 30, isOnline: true },
//   { name: 'Banana', age: 12, isOnline: false },
//   { name: 'Apple', age: 65, isOnline: false },
// ];

// const findPear = item => item.name === 'Pear';

// const find = (array, callback) => {
//   for (const item of array) {
//     if (callback(item)) {
//       return item;
//     }
//   }
// };
// console.log(find(persons, findPear)); // {name: 'Pear', age: 25, isOnline: true}

// console.log(find(persons, item => item.name === 'Mango')); // { name: 'Mango', age: 18, isOnline: true }
// console.log(find(persons, item => item.name === 'Banana')); // { name: 'Banana', age: 12, isOnline: false }
// console.log(find(persons, item => item.age === 65)); // { name: 'Apple', age: 65, isOnline: false }

// console.log(find([1, 3, 6, 9, 13, 16], item => item > 9)); // 13
// console.log(find([1, 3, 6, 9, 13, 16, 19], item => item > 14 && item < 20)); // 16

// ==============================Задача. callback()==========================
// const persons = [
//   { name: 'Mango', age: 18, isOnline: true },
//   { name: 'Kiwi', age: 20, isOnline: false },
//   { name: 'Pear', age: 25, isOnline: true },
//   { name: 'Cherry', age: 30, isOnline: true },
//   { name: 'Banana', age: 12, isOnline: false },
//   { name: 'Apple', age: 65, isOnline: false },
//   { name: 'Kiwi-Aplle', age: 20, isOnline: false },
// ];

// const filter = (array, callback) => {
//   const newArray = [];

//   array.forEach(item => {
//     if (callback(item)) {
//       newArray.push(item);
//     }
//   });

//   return newArray;
// };
// console.log(filter(persons, item => item.age < 25));
// console.log(filter(persons, item => item.age > 25));
// console.log(filter(persons, item => item.isOnline));
// console.log(filter(persons, item => !item.isOnline));
// console.log(filter(persons, item => item.name[0] === 'A'));
// console.log(filter(persons, item => item.name[0] === 'K'));

// ==============================Задача. ЗАМЫКАНИЕ==========================
// function Counter(initialValue = 0) {
//   let x = initialValue;
//   return function () {
//     console.log((x += 1)); // 1, 2, 3, 4
//   };
// }

// const counter1 = Counter();
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// counter1(); // 4

// const counter2 = Counter(10);
// counter2(); // 11
// counter2(); // 12
// counter2(); // 13
// counter2(); // 14

// ==================================Задача. callback()==================================
// Напишите следующие функции:
// createProduct(obj, callback) - принимает объект товара без id, а также колбек.
//      Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и
//      вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль

// Мое решение
// const logProduct = object => console.log(object);
// const logTotalPrice = object => console.log(object.price * object.quantity);

// function createProduct(obj, callback) {
//   const newObject = { ...obj, id: Date.now() };
//   return callback(newObject);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Решение
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// ==================================Задача. callback()==================================
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и
// deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.

// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT
// или this.balance, и onSuccess в противном случае.

// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT
// или меньше либо равен нулю, и onSuccess в противном случае.

// мое решение
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//       return onError(amount);
//     }
//     return onSuccess(amount);
//   },

//   deposit(amount, onSuccess, onError) {
//     let message;
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//       return onError(amount);
//     } else {
//       const res = (this.balance += amount);
//       message = `Операция прошла успешно, ваш баланс ${res}`;
//       return onSuccess(message);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Решение
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ==================================Задача. callback()==================================
// Напишите функцию each(array, callback), которая первым параметром ожидает массив,
// а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

// Решение
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// ==================================Задача. Стрелочная функция==================================
// Выполните рефакторинг кода используя стрелочные функции.

// базовый код
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// рефакторинг
// const createProduct = (partialProduct, callback) => callback({ id: Date.now(), ...partialProduct });

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// ==================================Задача. Стрелочная функция==================================
// Выполните рефакторинг кода используя стрелочные функции. Исходный код строка 156
// const handleSuccess = message => console.log(`✅ Success! ${message}`);
// const handleError = message => console.log(`❌ Error! ${message}`);

// ==================================Задача. Стрелочная функция==================================
// Выполните рефакторинг кода используя стрелочные функции. Исходный код строка 250

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// ==================================Задача. Стрелочная функция==================================
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// до
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// после рефакторинга
// const logItems = items => items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));

// или так...
// const logItems = items => {
//   console.log(items);
//   items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ==================================Задача. Стрелочная функция==================================
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.
// до
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// после рефакторинга
// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

// вариант 1
//   nameList.forEach((name, idx) => console.log(`${name}: ${phoneList[idx]}`));

// вариант 2 (на месте первого параметра _  - означает, что параметр не используется)
//   nameList.forEach((_, idx) => console.log(`${nameList[idx]}: ${phoneList[idx]}`));
// };
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ==================================Задача. Стрелочная функция==================================
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// до
// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// после рефакторинга
// function calсulateAverage(...args) {
//   let total = 0;

//   args.forEach(item => (total += item));

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
