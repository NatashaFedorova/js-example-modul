//------------------------------------------Масив---------------------------------------------
// const fruits = ['Mango', 'Apple', 'Pear'];
// console.log(fruits); // ['Mango', 'Apple', 'Pear']
// console.log(fruits.length); // 3
// console.table(fruits); // виводиться таблиця (індекс, значення) та  посилання на масив (Array (3))

// const lastElementFruits = fruits.length - 1;
// console.log(lastElementFruits);

// console.log(fruits[0]); //Mango
// console.log(fruits[fruits.length - 1]); // Pear
// console.log(['Mango', 'Apple', 'Pear'][1]); //Apple

// const fruits = ['Mango', 'Apple', 'Pear'];
// fruits[1] = 'Cherry';
// fruits[0] = 'Apricot';
// console.log(fruits); //['Apricot', 'Cherry', 'Pear']

// ----------------------------------Примітивні та складні типи--------------------------------
// примітивні
// let a = 100;
// let b = a;

// console.log(a); // 100
// console.log(b); // 100

// a = 200;

// console.log(a); // 200
// console.log(b); // 100

// складні (масиви, об'єкти, фкнкції)
// const a = [100];
// const b = a;

// console.log(a); // 200
// console.log(b); // 100

// a[0] = 200;

// console.log(a); // 200
// console.log(b); // 200

// console.log(a === b); //true (порівняня посилань)
// console.log([100] === [100]); //false (порівняня масивів)

// -----------------------------------Перебирання (ітерація, цикл for) масива -------------------
// const colors = ['Black', 'Violet', 'Teal', 'Tomato'];
// console.table(colors); // перебираємо по індексам
// const lastElementColors = colors.length - 1;

// for (let i = 0; i <= lastElementColors; i += 1) {
//   // приклад 1
//   // console.log(i); //повертае індекс (0,1,2,3)
//   // console.log(colors[i]); // зверення до кожного елемента масива на ітерації //Black  Violet Teal Tomato - кожен з нової строчки

//   // приклад 2
//   colors[i] += '-color';
//   // console.log(colors[i]); //Black-color - так повертаеться кожен елемент масиву
// }
// приклад 2 (проровження)
// console.table(colors); //для каждого, н., індекс - 0, значення - 'Black-color' (у вигляді таблиці)

// альтернативний запис
// const colors = ['Black', 'Violet', 'Teal', 'Tomato'];
// console.table(colors); // перебираємо по індексам
// for (let i = 0; i < colors.length; i += 1) {
//   console.log(colors[i]);
// }

// ---------------------------------Перебирання (for...of) масива-----------------------------
// const colors = ['Black', 'Violet', 'Teal', 'Tomato'];
// for (const color of colors) {
//   console.log(color); //Black Violet Teal Tomato - каждый елемент с новой строчки
// }

// ---------------------------------------Задача 1--------------------------------------------
// підрахувати загальну сумму в корзині

// 1. Перебати масив
// 2. Створити змінну total (загальна сумма) до цикла
// 3. Кожний елемент додати до total

// const salaries = [22, 54, 74, 200, 133, 54, 83];
// let total = 0;

// варіант 1-------------------------------------------------
// for (let i = 0; i < salaries.length; i += 1) {
//   console.log(salaries[i]);
//   total += salaries[i];
// }
// console.log('total', total);

// варіант 2-------------------------------------------------
// for (const salary of salaries) {
//   total += salary;
// }
// console.log('Total:', total);

// --------------------------------------Задача 2----------------------------------------------
// до кожного елемента масива додати 10%
// const salaries = [22, 54, 74, 200, 133, 54, 83];
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   salaries[i] = salaries[i] * 0.1 + salaries[i];
//   console.log(salaries[i]);
//   total = Math.round((total += salaries[i]));
// }

// console.log('Total:', total);

// -------------------------------------Задача 3----------------------------------------------
// написати скрипт, який підраховує сумму всіх парних чисел

// 1. Змінна total
// 2. Перебрати числа масив
// 3. На кожній ітерации визначити парні числа
// 4. Сумма парних чисел  = total

// const numbers = [1, 33, 22, 54, 15, 74, 200, 133, 54, 83];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   // console.log(number);

//   if (number % 2 === 0) {
//     console.log('Парне число:', number);
//     total += number;
//   }
// }
// console.log('Total:', total); //Total: 404

// варіант рішення 2------------------------------------------------------
// const numbers = [1, 33, 22, 54, 15, 74, 200, 133, 54, 83];
// let total = 0;
// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) {
//     console.log('Парне число: ', number);
//     total += number;
//   }
// }
// console.log('Total:', total); // Total: 404

// варіант рішення 3------------------------------------------------------
// const numbers = [1, 33, 22, 54, 15, 74, 200, 133, 54, 83];
// let total = 0;

// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 !== 0) {
//     console.log('Число не парне: ', number);
//     continue;
//   }
//   console.log('Парне число: ', number);
//   total += number;
// }
// console.log('Total:', total); // Total: 404

// ----------------------------------------------Задача 4------------------------------------------
// написати скрипт пошуку логіна
// Логін є - "Користувач (логін) знайдено"
// Логін відсутній - "Користувач (логін) не знайдено"

// варіант рішення 1 (for, if)------------------------------------------------------
// const logins = ['mango12344', 'pear567899', 'apple4758595', 'cherry586868'];
// const loginToFind = 'pear567899';
// // console.log(loginToFind);

// for (let i = 0; i < logins.length; i += 1) {
//   console.log(logins[i]);

//   if (loginToFind !== logins[i]) {
//     console.log(`Користувач ${loginToFind} не знайдено`);
//     continue;
//   }
//   console.log(`Користувач ${loginToFind} знайдено`);
// }

// варіант рішення 1-1(for, if). Репета----------------------------------------------
// const logins = ['mango12344', 'pear567899', 'apple4758595', 'cherry586868'];
// const loginToFind = 'pear567899';
// let message = `Користувач ${loginToFind} не знайдено`; // значення по default

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log(login);

//   if (loginToFind === login) {
//     message = `Користувач ${loginToFind} знайдено`;
//     break;
//   }
// }
// console.log(message); //Користувач pear567899 знайдено

// варіант рішення 2(for...of)-----------------------------------------------------
// const logins = ['mango12344', 'pear567899', 'apple4758595', 'cherry586868'];
// const loginToFind = 'pear567899';
// let message = `Користувач ${loginToFind} не знайдено`;

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдено`;
//     break;
//   }
// }
// console.log(message);

// варіант рішення 3(includes - абстрактний метод та тернарний оператор)-------------------------------------------------------------
// використовуємо коли необхідно просто перевірити, достатньо true/false
// const logins = ['mango12344', 'pear567899', 'apple4758595', 'cherry586868'];
// const loginToFind = 'pear567899';

// для перевірки, як це працює
// console.log(logins.includes(loginToFind)); //true
// console.log(logins.includes('pear567899')); //true
// console.log(logins.includes('pear')); //false

// вариант основний
// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдено`
//   : `Користувач ${loginToFind} не знайдено`;

// console.log(message);

// ----------------------------------------------Задача 5------------------------------------------
//напиши скрипт пошуку самого маленького числа в масиві
// за умови, що числа унікальні не повторюються

// const numbers = [33, 22, 54, 15, 74, 200, 133, 54, 83];
// let smallestNumber = numbers[0];

// console.log(smallestNumber); // 33

// for (const num of numbers) {
//   // console.log(num);

//   if (num < smallestNumber) {
//     smallesNumber = num;
//   }
// }
// console.log(smallestNumber); // 15

// ----------------------------------------------Задача 5------------------------------------------
//напиши скрипт пошуку самого великого числа в масиві
// за умови, що числа унікальні не повторюються

// const numbers = [33, 22, 54, 15, 74, 200, 133, 54, 83];
// let biggestNumbers = numbers[0]; //33
// console.log(biggestNumbers);

// for (const num of numbers) {
//   console.log(num);

//   if (num > biggestNumbers) {
//     biggestNumbers = num;
//   }
// }
// console.log('biggestNumbers:', biggestNumbers);

// ----------------------------------------------Задача 6------------------------------------------
// написати скрипт, який об'єднує елементи масиву в одну строку
// довільна кількість елементів
// елементи мають бути розділені комою
// ['Black', 'Red', 'Volet', 'Teal', 'Blue', 'Tomato']

// варіант 1(for)-------------------------------------------------------------
// const colors = ['Black', 'Red', 'Volet', 'Teal', 'Blue', 'Tomato'];
// let string = '';
// for (const color of colors) {
//   string += color + ',' + ' ';
//   // console.log(string);
// }
// string = string.slice(0, string.length - 2);
// console.log(string);
// если не будет пробела - (-1), а с пробелом - (-2)

// варіант 2(join)-------------------------------------------------------------
// const colors = ['Black', 'Red', 'Volet', 'Teal', 'Blue', 'Tomato'];
// let string = colors.join(', ');
// console.log(string); // Black, Red, Volet, Teal, Blue, Tomato

// -------------------------------------Задача 7(зміна регістра)--------------------------------------
// напиши скрипт, який змінює регістр кожного елемента в строчці на протилежний
// приклад "JavaScript" => "jAVAsCRIPT"

// const languageName = 'JavaScript';
// const letters = languageName.split('');
// let invertedStringLanguageName = '';

// варіант 1(for...of + if ...else)-------------------------------------------------------
// for (const letter of letters) {
//   console.log(letter);

//   if (letter === letter.toLowerCase()) {
//     invertedStringLanguageName += letter.toUpperCase();
//     // console.log('Нижній регістр - ', letter);
//   } else {
//     invertedStringLanguageName += letter.toLowerCase();
//   }
// }
// console.log(invertedStringLanguageName); //jAVAsCRIPT

// варіант 2((for...of + тернарний оператор)-------------------------------------------------
// for (const letter of letters) {
//   invertedStringLanguageName +=
//     letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedStringLanguageName); //jAVAsCRIPT

// варіант 3((for...of + тернарний оператор + змінна(isEqual - рівні?))----------------------
// for (const letter of letters) {
//   const isEqual = letter === letter.toLowerCase();
//   invertedStringLanguageName += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedStringLanguageName); //jAVAsCRIPT

// ------------------------------------------Задача 8-------------------------------------------
// робимо slug в URL із назви статті (н., dev.to)
// заголовок статті складається тільки з літер и пробілів

// 1. Нормалізуємо строку
// 2. Розбиваємо на слова
// 3. Зшиваємо строку з розподілювачем

// має бути -

// const title = 'Welcome to the Treehouse Community';
// console.log(title); // Welcome to the Treehouse Community

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle); // welcome to the treehouse community

// const partTitle = normalizedTitle.split(' ');
// console.log(partTitle); // ['welcome', 'to', 'the', 'treehouse', 'community']

// const slug1 = partTitle.join('-');
// console.log('slug1:', slug1); // slug1: welcome-to-the-treehouse-community

// декларативний код - абстракція
// const slug2 = title.toLowerCase().split(' ').join('-');
// console.log('slug2:', slug2); // slug2: welcome-to-the-treehouse-community

// ------------------------------------------Задача 9(concat)-------------------------------------------
//напиши код, який рахує сумму елементів 2-х масивів

// const array1 = [10, 20, 40];
// const array2 = [30, 60, 80, 6];
// let total = 0;

// const numbers = array1.concat(array2);
// console.log(numbers); // [10, 20, 40, 30, 60, 80, 6]

// for (const num of numbers) {
//   total += num;
// }
// console.log(total); // 246

// ------------------------------Задача 10(метод splice(додати, видалити, обновити))--------------------------------------
// працюємо з колекцією карток в trello

// const cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
// console.table(cards);

// видалення по індексу (метод - indexOf())
// const cardToRemove = 'Картка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);
// console.log(cards); // ['Картка-1', 'Картка-2', 'Картка-4', 'Картка-5']

// додавання (по індексу)
// const cardToInsert = 'Картка-6';
// cards.splice(3, 0, cardToInsert);
// console.log(cards); //['Картка-1', 'Картка-2', 'Картка-3', 'Картка-6', 'Картка-4', 'Картка-5']

// cards.splice(cards.length, 0, cardToInsert);
// console.log(cards); // ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-6', 'Картка-4', 'Картка-5', 'Картка-6']

// оновлення (по індексу)
// const cardToRemove = 'Картка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index); // 2
// const newCard = 'Картка-2-2';
// cards.splice(2, 1, newCard);
// console.log(cards); // ['Картка-1', 'Картка-2', 'Картка-2-2', 'Картка-4', 'Картка-5']
