// ================================================================================================
// ====================================Callback-функции============================================
// ================================================================================================

// ==============================Callback-функции. Пример============================================
// fnB-функцию ставим вторым аргументом при вызове fnA-функции
// в парараметрах fnА вторим стоит параметр fnB - callback
// внутри fnA вызываем fnB
// fnA - функция высшего порядка

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);

//   callback(100);
// };

// const fnB = function (number) {
//   console.log(`Функция fnB = ${number}`);
// };

// fnA('Hello', fnB);

// ==============================Callback-функции. Пример============================================
// const doMath = function (a, b, callback) {
//   const result = callback(a, b); // вызов функии
//   console.log(result);
// };

// const add = function (x, y) {
//   return x * y;
// };

// doMath(20, 40, add);

// ==============================Callback-функции. Пример============================================
// const fn1 = function (a, b, c, callback) {
//   const result = callback(a, b, c);
//   console.log(result);
// };
// const multiplication = function (x, z, y) {
//   return x * z * y;
// };

// const add = function (d, f, j) {
//   return d + f + j;
// };

// const createArray = function (...rest) {
//   return rest;
// };

// fn1(1, 2, 3, multiplication); //6
// fn1(12, 14, 40, add); //66
// fn1(12, 14, 40, createArray); // [12, 14, 40]

// ===================Callback-функции. Инлайн-функции. Пример============================================
//в объявлении одной функии, как аргумент, callback-функция
// const fn1 = function (a, b, c, callback) {
//   const result = callback(a, b, c);
//   console.log(result);
// };

// fn1(1, 2, 3, function (x, z, y) {
//   return x * z * y;
// }); //6
// fn1(12, 14, 40, function (d, f, j) {
//   return d + f + j;
// }); //66
// fn1(12, 14, 40, function (...rest) {
//   return rest;
// }); // [12, 14, 40]

// ===================Отложеный вызов: регистрация событий.  Пример============================================
// кнопка "нажать"(строка 35 в index.html)
// const buttonPef = document.querySelector('.js-btn');

// const handleBtnClick = function () {
//   console.log('клик по кнопке');
// };

// добавляем слушателя событий по клику
// первый аргумент - событие, на котором будет вызываться callback-функция и что-то делать
// второй аргумент - кусочек кода (callback-функция), который будет выполняться после того, как произойдет событие(первый аргумент)
// buttonPef.addEventListener('click', handleBtnClick);

// пример вызова  callback-функция, код не работает
// означает. Если eventType === event  - вызываем callback-функцию (handleBtnClick)
// function addEventListener(eventType, handleBtnClick) {
//     if (eventType === event) {
//         handleBtnClick();
//     }
// }

// ===================Отложеный вызов: геолокация.  Пример============================================
// синтаксис navigator.geolocation.getCurrentPosition(success[, error[, options]])
// getCurrentPosition = ничего не деает, он вызывает определенные функции, те что  мы указали, когда надо
// порядок передачи функций в  getCurrentPosition важен:
// первая - success (положительный результат)
// вторая - error (негативный результат, ошибка)
//success - колбэк-функция, которая принимает объект Position (en-US) в качестве единственного входного параметра.

// const onGetPositionSuccess = function (position) {
//   console.log(`Вызов функии onGetPositionSuccess ${position}`);
// };

// const onGetPositionError = function (error) {
//   console.log(`Вызов функии onGetPositionError ${error}`); //Вызов функии onGetPositionError [object GeolocationPositionError]
// };
// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

// ===================Отложеный вызов: интервали.  Пример============================================
// console.log('В коде перед таймаутом');

// вызов функции через время
// const callback = function () {
//   console.log('Через 3 секунды внутри callback в таймауте');
// };
// const callback2 = function () {
//   console.log('Через 6 секунды внутри callback в таймауте');
// };
// setTimeout(callback, 2000);

// setTimeout(callback2, 4000);
// console.log('В коде после таймаута');

// ===================Отложеный вызов: фильтр.  Пример============================================
// цель вернуть  массив из чисел больше или равно 3
// цель вернуть  массив из чисел меньше или равно 4
// цель вернуть  массив из элементов ,у которых  isFresh: true

// const filter = function (array, test) {
//   const filteredArray = [];
//   for (const number of array) {
//     const passed = test(number); // значением будет результат проверки number (turue/false)

//     if (passed) {
//       filteredArray.push(number);
//     }
//   }

//   return filteredArray;
// };

// 1. передать функцию
// 2. функция получает элемент массива
// 3. Если элемент удовлетворяет условие  - функция вернет true
// 3. Если элемент НЕ удовлетворяет условие  - функция вернет false

// callback-функции
// const callback = function (number) {
//   return number >= 3;
// };

// const getFruitsWithQuantity = function filter(element) {
//   const res = element.isFresh === true;
//   return res;
// };

// цель вернуть  массив из чисел больше или равно 3
// const r1 = filter([1, 2, 3, 4, 5], callback);
// console.log(r1); //[3, 4, 5]

// цель вернуть  массив из чисел меньше или равно 4
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (number) {
//   return number <= 4;
// });
// console.log(r2); // [1, 2, 3, 4]

// вернуть те элементы,у которых  isFresh: true
// const fruits = [
//   { name: 'Apple', quantity: 200, isFresh: true },
//   { name: 'Pear', quantity: 150, isFresh: false },
//   { name: 'Bananas', quantity: 120, isFresh: true },
// ];
// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3); // массив из 2-х объектов (яблоки и бананы)

// =======================================ЗАМЫКАНИЕ============================================
// результат работы функции  fnA будет функция,
// которая внутри функции  fnA  назувается innerFunction()
// значение переменной fnВ, являеться вызов функции, а точнее ее результат
// const fnA = function (parameter) {
//   const innerValible = 'значение внутренней переменной функции  fnA';

//   const innerFunction = function () {
// console.log(innerValible);
// console.log(parameter);
// console.log('это вызов innerFunction? которая результат fnA');
//   };

//   return innerFunction;
// };
// вызов функции fnA()
// const fnB = fnA(55555);

// вызов функции fnA()
// fnB();

// console.log(fnB);
// ƒ () {
//     console.log(innerValible);
//     console.log(parameter);
//     console.log('это вызов innerFunction');
//   }

// ==================================Задача. ЗАМЫКАНИЕ============================================
// избавить от повторений

// пример грамоздкого кода
// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };
// makeDish('Манго', 'пирожок');
// makeDish('Манго', 'омлет');
// makeDish('Манго', 'чай');

// makeDish('Киви', 'салат');
// makeDish('Киви', 'суп');
// makeDish('Киви', 'какao');

// пример грамоздкого кода
// функция принимает имя шефа
// const makeSheff = function (name) {
// test1 & test2 - тоже доступны во вложенной  функции
//   const test1 = 55555;
//   const test2 = 'Test';
// внутри ее другая функция (makeDish),
// результат который и будет результатом
// родительской функции makeSheff
//   const makeDish = function (dish) {
//     console.log(test1);
//     console.log(test2);
//     console.log(`${name} готовит ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff('Манго');
// console.dir(mango);

// mango('пирожок');
// mango('омлет');
// mango('чай');

// const kivi = makeSheff('Киви');
// console.log(kivi);

// kivi('салат');
// kivi('суп');
// kivi('какao');

// ==================================Задача. ЗАМЫКАНИЕ============================================
// округлить число
// const floatingPoint = 3.456894;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); //3.46

// пример обычной функции
// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(floatingPoint, 1));
// console.log(rounder(floatingPoint, 2));
// console.log(rounder(floatingPoint, 4));
// console.log(rounder(12.574884354, 4));

// замыкание
// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(floatingPoint)); // 3.46
// console.log(rounder3(floatingPoint)); // 3.457

// console.log(rounder2(125.688545)); // 125.69
// console.log(rounder3(123345.6868548)); // 123345.687

// ==================================Задача. ЗАМЫКАНИЕ============================================
//  к имени переменной  value, нет свободного доступа

// const myLibFuctory = function () {
//   let value = 0;

//   const add = function (num) {
//     value += num;
//   };

//   return {
//     add: add,
//     getValue() {
//       return value;
//     },
//   };
// };

// const myLib = myLibFuctory();

// myLib.add(10);
// console.log(myLib.getValue()); //10

// myLib.add(21);
// console.log(myLib.getValue()); //31

// ==================================Задача. ЗАМЫКАНИЕ============================================
//приватные данные и функции - скрытие реализации, интерфейс
// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   //   salary - приватная переменная, недоступна во внешнем коде
//   let salary = baseSalary;

//   return {
//     raise(amount) {
//       salary += amount;
//     },
//     lower(amount) {
//       salary -= amount;
//     },
//     current() {
//       return `Текущая зарплата ${employeeName} - ${salary}`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory('Mango', 10000); //Mango - employee, 10000 - baseSalary

// console.log(salaryManager.current()); // Текущая зарплата Mango - 10000

// salaryManager.raise(1200);
// console.log(salaryManager.current()); // Текущая зарплата Mango - 11200

// salaryManager.lower(800);
// console.log(salaryManager.current()); // Текущая зарплата Mango - 10400

// =================================Стрелоные функции==========================================
// пример обычной функции
// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(1, 5, 10)); // 16

// пример стрелочной функции
// при одном параметре скобки можно не ставить = а =
// если парамертов нет вообще ставим пустые кобки ()
// ниже пример неявного возвтрата
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// пример явного возврата, функции сразу return
// const add = (a, b, c) =>  a + b + c;

// console.log(add(1, 5, 10)); // 16

// =========================Стрелоные функции. Аргументы======================================
// пример обычной функции
// const add = function (a, b, c) {
//   console.log(arguments);
//   return a + b + c;
// };

// console.log(add(1, 5, 10)); // 16

// пример стрелочной функции
// у стрелочной функции нет  arguments
// const add = (a, b, c) => {
//   console.log(arguments); // ошибка
//   return a + b + c;
// };

// console.log(add(1, 5, 10)); // 16

// пример стрелочной функции - работа с arguments - собираем в массив
// const add = (...args) => {
//   console.log(args);
// };

// add(1, 5, 10); // [1, 5, 10]

// =========================Стрелоные функции. Объекты======================================
// пример обычной функции
// const fnA = function () {
//   return {
//     a: 5,
//   };
// };
// console.log(fnA());

// пример стрелочной функции с неявным возвратом для объектов
// все, что в () это считаеться выражением, общим результатом
// const fnA = () => ({ a: 5 });
// console.log(fnA());

// =========================Стрелоные функции. Пример======================================
// пример обычной функции
// const onGetPositionSuccess = function (position) {
//   console.log(`Вызов функии onGetPositionSuccess ${position}`);
// };

// const onGetPositionError = function (error) {
//   console.log(`Вызов функии onGetPositionError ${error}`); //Вызов функии onGetPositionError [object GeolocationPositionError]
// };
// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

// пример стрелочной функции
// const onGetPositionSuccess = position => {
//   console.log(`Вызов функии onGetPositionSuccess ${position}`);
// };

// const onGetPositionError = error => {
//   console.log(`Вызов функии onGetPositionError ${error}`); //Вызов функии onGetPositionError [object GeolocationPositionError]
// };
// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

// ===============Стрелоные функции. Пример inline fuction======================================
// цель вернуть  массив из чисел больше или равно 3
// цель вернуть  массив из чисел меньше или равно 4
// цель вернуть  массив из элементов ,у которых  isFresh: true

const filter = (array, test) => {
  const filteredArray = [];
  for (const number of array) {
    const passed = test(number); // значением будет результат проверки number (turue/false)

    if (passed) {
      filteredArray.push(number);
    }
  }

  return filteredArray;
};

// 1. передать функцию
// 2. функция получает элемент массива
// 3. Если элемент удовлетворяет условие  - функция вернет true
// 3. Если элемент НЕ удовлетворяет условие  - функция вернет false

// callback-функции, можно хранить в переменных, а можно передать аргументом
// const callback = number => number >= 3;

// const callback2 = number => number <= 4;

// const getFruitsWithQuantity = element => element.isFresh === true;

// цель вернуть  массив из чисел больше или равно 3
// const r1 = filter([1, 2, 3, 4, 5], number => number >= 3);
// console.log(r1); //[3, 4, 5]

// цель вернуть  массив из чисел меньше или равно 4
const r2_1 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], number => number <= 4 && number > 2);
console.log(r2_1); // [3, 4]

const r2_2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], number => number <= 4);
console.log(r2_2); // [1, 2, 3, 4]

// вернуть те элементы,у которых  isFresh: true
// const fruits = [
//   { name: 'Apple', quantity: 200, isFresh: true },
//   { name: 'Pear', quantity: 150, isFresh: false },
//   { name: 'Bananas', quantity: 120, isFresh: true },
// ];
// const r3 = filter(fruits, element => element.isFresh === true);
// console.log(r3); // массив из 2-х объектов (яблоки и бананы)
