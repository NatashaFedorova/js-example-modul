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

//----------------------------Задача 4(slice)----------------------------------------
// const example = [8, 5, 3, 9, 3];
// console.log(example.slice(3)); // [ 9, 3]

//----------------------------Задача 5(порівняння масивів)----------------------------------------
// console.log([1, 2, 3] === [1, 2, 3]); // false

//----------------------------Задача 5(concat)----------------------------------------
// const example1 = [2, 3, 4];
// const example2 = example1.concat([1, 3], [5]);
// console.log(example1); // [2, 3, 4]
// console.log(example2); // [2, 3, 4, 1, 3, 5]
