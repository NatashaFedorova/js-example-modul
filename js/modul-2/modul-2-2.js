//-----------------------------ФУНКЦІЇ (що робить?)----------------------------

//Функціональний вираз (об'явлення функції)-----------------------
// const add = function (a, b) {
// тіло функції
//   console.log(a);
//   console.log(b);
// result(повернення) - те, що повертає функція (строку, число, масив, функцію, об'єкт, буль)
// const result = a + b;
// console.log('a + b', result);
// return result; // так писати не обов'язково
// return a < b;
// return a + b;
// };
// Виклик функції--------------------------------------------------
// const num1 = add(10, 14); // Виконується функція addNumbers
// console.log('num1:', num1);
// const num2 = add(200, 145); // Виконується функція addNumbers
// console.log('num2:', num2);
// const num3 = add(101, 148); // Виконується функція addNumbers
// console.log('num3:', num3);

//-----------------------------------Return(поверення)--------------------------------
// варіант 1------------------------------------
// const fn = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);
// };
// console.log(fn()); // undefined - повертається, якщо не вказано return (як результат функції)

// варіант 2-------------------------------------
// const fn = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   return 111;
// };
// console.log(fn()); // 111

// варіант 2-------------------------------------
// const fn = function () {
//   return 111; //все, що після  return не виконується, return - перериває виконання функції
//   console.log(1);
//   console.log(2);
// };
// console.log('Результат функції:', fn()); //Результат функції: 111

// варіант 3-------------------------------------
// const fn = function (value) {
//   if (value < 50) {
//     return 'меньше 50';
//   } else {
//     return 'більше 50';
//   }
// };
// console.log('Результат функції:', fn(25)); // Результат функції: меньше 50
// console.log('Результат функції:', fn(65)); // Результат функції: більше 50

//-----------------------------------Стек - викликів функцій (приклад 1)--------------------------------
// const fnA = function () {
//   console.log('Виконується функція А');
// };
// const fnВ = function () {
//   console.log('Виконується функція В');
// };
// const fnС = function () {
//   console.log('Виконується функція С');
// };

// варіант 1------------------------------------
// fnA();
// fnВ();
// fnС();
// Виконується функція А
// Виконується функція В
// Виконується функція С

// варіант 2------------------------------------
// console.log('Лог перед викликом функції А');
// fnA();
// console.log('Лог після викликом функції А');

// console.log('Лог перед викликом функції В');
// fnВ();
// console.log('Лог після викликом функції В');

// console.log('Лог перед викликом функції С');
// fnС();
// console.log('Лог після викликом функції С');

// Лог перед викликом функції А
// Виконується функція А
// Лог після викликом функції А

// Лог перед викликом функції В
// Виконується функція В
// Лог після викликом функції В

// Лог перед викликом функції С
// Виконується функція С
// Лог після викликом функції С

//-----------------------------------Стек - викликів функцій (приклад 2)--------------------------------
// const fnA = function () {
//   console.log('Виконується функція А');
//   fnВ();
// };
// const fnВ = function () {
//   console.log('Виконується функція В');
//   fnС();
// };
// const fnС = function () {
//   console.log('Виконується функція С');
// };

// fnA();

// Порядок викликів:
//  main
//  main - fnA
//  main - fnA - console.log(в функції А)
//  main - fnA
//  main - fnA - fnВ
//  main - fnA - fnВ - console.log(в функції В)
//  main - fnA - fnВ
//  main - fnA - fnВ - fnС
//  main - fnA - fnВ - fnС - console.log(в функції С)
//  main - fnA - fnВ - fnС
//  main - fnA - fnВ
//  main - fnA
//  main

//-----------------------------------Stack trace, пошук помилок (приклад 1)--------------------------------
// const fnA = function () {
//   console.log('Виконується функція А');
// };
// const fnВ = function () {
//   console.log('Виконується функція В');

//   console.log(value);
// Нижче вказана помилка з консолю, в якій зазанчено стек(at... at...) повний шлях виклику функцій до помилки
//Uncaught ReferenceError: value is not defined
//at fnВ (modul-2-2.js:141:15)
// at modul-2-2.js:152:1
// };
// const fnС = function () {
//   console.log('Виконується функція С');
// };

// console.log('Лог перед викликом функції А');
// fnA();
// console.log('Лог після викликом функції А');

// console.log('Лог перед викликом функції В');
// fnВ();
// console.log('Лог після викликом функції В');

// console.log('Лог перед викликом функції С');
// fnС();
// console.log('Лог після викликом функції С');

//-----------------------------------Задача 1(функції)--------------------------------
// напиши функцію calculateTotalPrice(items)
//яка прймає масив цін (чисел) та повертає їх суму

// звичайний спосіб
// const numbers = [1, 33, 22, 54, 15, 74, 200, 133, 54, 83];
// let total = 0;

// for (const number of numbers) {
//   total += number;
// }
// console.log("Total", total);

// Спосіб з використанням функції
// const calculateTotalPrice = function (items) {
//   console.log('items всередині функції:', items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
// console.log(calculateTotalPrice([1, 5, 10])); // 16

// const r1 = calculateTotalPrice([23, 67, 95, 40]);
// console.log('Загальна сума покупока:', r1); // Загальна сума покупока: 225

// console.log(calculateTotalPrice([100, 47, 56, 98])); // 301

//-----------------------------------Задача 2(функції)--------------------------------
// напиши функцію logItems(items) для перебирання и логування(console.log()) масива
// ця функція нічого не повертає
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems(['Black', 'Violet', 'Teal', 'Tomato']);
// logItems([1, 5, 8, 7, 6]);
// logItems(['Mango', 'Apple', 'Pear']);

//-----------------------------------Задача 3(функції)--------------------------------
// написати функцію findLogin(logins, loginToFind) для пошука логіна
// Логін є - "Користувач (логін) знайдено"
// Логін відсутній - "Користувач (логін) не знайдено"

// const logins = ['mango12344', 'pear567899', 'apple4758595', 'cherry586868'];

// варіант рішення 1
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Користувач ${loginToFind} знайдено`;
//     }
//   }
//   return `Користувач ${loginToFind} не знайдено`;
// };

// варіант рішення 2
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Користувач ${loginToFind} знайдено`
//     : `Користувач ${loginToFind} не знайдено`;
// };

// console.log(findLogin(logins, 'mango')); // Користувач mango не знайдено
// console.log(findLogin(logins, 'pear567899')); // Користувач pear567899 знайдено
// console.log(findLogin(logins, 'apple4758595')); // Користувач apple4758595 знайдено
// console.log(findLogin(logins, 'cherry')); // Користувач cherry не знайдено

//-----------------------------------Задача 4(функції)--------------------------------
//напиши функцію findSmallestNumber(numbers) для пошуку самого маленького числа в масиві
// за умови, що числа унікальні (не повторюються)

const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const num of numbers) {
    if (num < smallestNumber) {
      smallestNumber = num;
    }
  }
  return smallestNumber;
};

console.log(findSmallestNumber([33, 22, 54, 15, 74])); // 15
console.log(findSmallestNumber([200, 133, 54, 83])); // 54
console.log(findSmallestNumber([22, 54, 15, -74, 200])); //-74
