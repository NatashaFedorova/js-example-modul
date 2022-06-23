//----------------------------Задача 1----------------------------------------
// input = ['Black', 'Pear', 'Violet', 'Red', 'Teal' ];
// output = ['Teal', 'Pear'];
// мета - знайти елементи з length - 4

// const users = ['Black', 'Pear', 'Violet', 'Red', 'Teal'];
// const output = [];
// for (const name of users) {
//   console.log(name.length);

//   if (name.length === 4) {
//     output.push(name);
//     console.log(output);

//   }
// }
// console.log(output); // ['Pear', 'Teal']

//----------------------------Задача 2----------------------------------------
// numbers = [23, 9595858,6895, 95858,4484,93038];
// створити масив  з 4-х значних чисел

// const numbers = [23, 9595858, 6895, 95858, 4484, 93038];
// const selectedNumbers = [];

// for (const number of numbers) {
//   if (String(number).length === 4) {
//     selectedNumbers.push(number);
//   }
// }
// console.log(selectedNumbers); //[6895, 4484]

//----------------------------Задача 3(indexOf)----------------------------------------
// const example = [1, 2, 3, 4, 5, 6, 7];
// // indexOf(searchElement);
// console.log(example.indexOf(3)); // 2

// const example = [1, 2, 3, 4, 5, 6, 7];
// // indexOf(searchElement);
// console.log(example.indexOf(12)); // -1 (такого елемента не існує)

//----------------------------Задача 3(indexOf)----------------------------------------
// знаходимо всі входження елемента
// const indices = [];
// const array = ['a', 'b', 'a', 'c', 'a', 'd'];
// const element = 'a';
// let idx = array.indexOf(element);
// console.log(idx); //0
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// [0, 2, 4]

//-------------------------------------Задача 4(slice)---------------------------------------------
// const example = [8, 5, 3, 9, 3];
// console.log(example.slice(3)); // [ 9, 3]

//-----------------------------Задача 5(порівняння масивів)----------------------------------------
// console.log([1, 2, 3] === [1, 2, 3]); // false

//---------------------------------Задача 5(concat)-------------------------------------------------
// const example1 = [2, 3, 4];
// const example2 = example1.concat([1, 3], [5]);
// console.log(example1); // [2, 3, 4]
// console.log(example2); // [2, 3, 4, 1, 3, 5]

//--------------------------------Задача 6- базові операції з масивом---------------------------------
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');
// console.log(genres); // ['Jazz', 'Blues', 'Рок-н-ролл']
// console.log(genres[0]); // Jazz
// console.log(genres[genres.length - 1]); // Рок-н-ролл
// console.log(genres.shift()); //Jazz - видалений елемент
// genres.unshift('Country', 'Reggy');
// console.log(genres); // ['Country', 'Reggy', 'Blues', 'Рок-н-ролл']

//---------------------------------------Задача 7 - Массивы и строки---------------------------------
// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = '8 11';
// const arr = values.split(' ');
// const x = Number(arr[0]);
// const y = Number(arr[1]);
// const result = x * y;

// console.log(x);
// console.log(y);
// console.log(result); // 88

// вирішення за допомогою функції------------------------
// function gerSquare(string) {
//   const [x, y] = string.split(' '); // аналог 2-х строк нижче
//   //   const x = arr[0];
//   //   const y = arr[1];
//   return Number(x) * Number(y);
// }
// console.log(gerSquare('8 11')); // 88
// console.log(gerSquare('12 20')); // 240

//---------------------------------------Задача 8 - Перебор массива---------------------------------
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку
// в формате номер_элемента: значение_элемента.
// Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }
// // 1 : 🍎
// // 2 : 🍇
// // 3 : 🍑
// // 4 : 🍌
// // 5 : 🍋

//---------------------------------------Задача 9 -  Массивы и циклы---------------------------------
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log(namesArr); // ['Jacob', 'William', 'Solomon', 'Artemis']
// console.log(phonesArr); // ['89001234567', '89001112233', '890055566377', '890055566300']

// for (let i = 0; i < namesArr.length; i += 1) {
//   //   console.log(namesArr[i]);
//   //   console.log(phonesArr[i]);
//   const nameWithEnding = `${namesArr[i]}`;
//   console.log(`${nameWithEnding.padEnd(8, ' ')}: ${phonesArr[i]}`);
// }
// Jacob   : 89001234567
// William : 89001112233
// Solomon : 890055566377
// Artemis : 890055566300

//---------------------------------------Задача 10 - Массивы и строки---------------------------------
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const stringArr = string.split(' ');

// stringArr.shift(); // видалення 1 елемента
// stringArr.pop(); // видалення останнього елемента

// console.log(stringArr.join(' ')); // to the

//---------------------------------------Задача 11 - Массивы и строки---------------------------------
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// варіант 1
// const string = 'Welcome to the future';
// const letters = string.split('');
// const reversedString = [];
// for (let i = letters.length - 1; i >= 0; i -= 1) {
//   reversedString.push(letters[i]);
// }
// console.log(letters);
// console.log(reversedString.join('')); // erutuf eht ot emocleW

// варіант 2
// const string = 'Welcome to the future';
// console.log(string.split('').reverse().join('')); // erutuf eht ot emocleW

//---------------------------------------Задача 12 - Сортировка массива с циклом---------------------------------
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// варіант 1
// langs.sort();
// console.log(langs); //['c++', 'haskel', 'javascript', 'php', 'python', 'ruby'] - звернцути увагу на 'php', 'python'

// варіант 2
// for (let x = 0; x < langs.length; x += 1) {
//   //   console.log('X:', langs[x]);

//   for (let y = x + 1; y < langs.length; y += 1) {
//     // console.log(`${langs[x]} : ${langs[y]}`);

//     const lang1 = langs[x];
//     const lang2 = langs[y];

//     if (lang1[0] > lang2[0]) {
//       langs[y] = lang1;
//       langs[x] = lang2;
//     }
//   }
// }
// console.log(langs); //['c++', 'haskel', 'javascript', 'python', 'php', 'ruby'] - звернцути увагу на 'python', 'php'

//---------------------------------------Задача 13 - Поиск элемента---------------------------------
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// // варіант 1
// console.log(Math.min(2, 17, 94, 1, 23, 37)); // 1

// // варіант 2
// console.log(Math.min(...numbers)); // 1

// варіант 3
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// let max = numbers[0];

// for (const num of numbers) {
//   if (num < min) {
//     min = num;
//   }

//   if (num > max) {
//     max = num;
//   }
// }

// console.log(min);
// console.log(max);

//---------------------------------------Задача 13 - (spread)---------------------------------
// const numbers = [2, 17, 94, 1, 23, 37];
// console.log(...numbers); // можливысть перевести масив у числа
// console.log(Math.min(...numbers)); // 1
// console.log(Math.max(...numbers)); // 94

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4];
// console.log(arr2); // [1, 2, 3];

//---------------------------------------Задача 13 - (rest)---------------------------------
// function sum(a, b, ...rest) {
//   console.log(rest); // [6, 4, 3, 5, 4]
//   return a + b;
// }
// console.log(sum(2, 5, 6, 4, 3, 5, 4)); // 7

//---------------------------------------Задача 13 - (псевдомасив)---------------------------------
// function sum() {
//   console.log(arguments); // Arguments(7) [2, 5, 6, 4, 3, 5, 4, callee: (...), Symbol(Symbol.iterator): ƒ]
//   return;
// }
// console.log(sum(2, 5, 6, 4, 3, 5, 4)); // 7

//---------------------------------------Задача 13 - (сума чисел в функції)---------------------------------
// функція число 7
// потрібно сумувати 1+2+3+4+5+6+7=сума

// function sumRange(num) {
//   let sum = 0;
//   // 1...num
//   for (let i = 1; i <= num; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumRange(7)); // 28
// console.log(sumRange(12)); // 78
