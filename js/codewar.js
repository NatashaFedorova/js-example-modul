// =============================Task-1======================================
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   const result = Number(weight / Math.pow(height, 2)).toFixed(1);
//   console.log(result);

//   if (result <= 18.5) {
//     return 'Underweight';
//   } else if (result <= 25.0) {
//     return 'Normal';
//   } else if (result <= 30.0) {
//     return 'Overweight';
//   } else {
//     return 'Obese';
//   }
// }

// bmi(45, 1.8);
// console.log(bmi());

// =============================Task-2======================================
// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел.
// Числа могут быть отрицательными или нецелыми.
// Если массив не содержит чисел, вы должны вернуть 0.

// вариант 1
// function sum(numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }

//   return total;
// }

// вариант 2
// const sum = numbers => numbers.reduce((acc, num) => acc + num, 0);

// =============================Task-3======================================
// Вам будет предоставлено значение arrayи limit.
// Вы должны убедиться, что все значения в массиве
// ниже или равны предельному значению.
// Если они есть, верните true.Иначе возвращайся false.

// const smallEnough = (a, limit) => {
//   return a.every(el => el <= limit);
// };

// =============================Task-4======================================
// функція претворює число в строку
// const numberToString = num => `${num}`;

// =============================Task-5======================================
// Area of an arrow
// const arrowArea = (a, b) => 0.5 * a * (b / 2);

// =============================Task-6======================================
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// варіант 1
// const XO = str => {
//   const x = 'x';
//   const o = 'o';

//   let sumX = 0;
//   let sumY = 0;

//   str
//     .toLowerCase()
//     .split('')
//     .forEach(el => {
//       if (el === x) {
//         sumX += 1;
//       }

//       if (el === o) {
//         sumY += 1;
//       }
//     });

//   return sumX === sumY;
// };

// варіант 2
// const XO = str => {
//   const x = str
//     .toLowerCase()
//     .split('')
//     .filter(el => el === 'x').length;
//   const o = str
//     .toLowerCase()
//     .split('')
//     .filter(el => el === 'o').length;
//   return x === o;
// };

// варіант 3
// const XO = str => {
//   const arr = str.toLowerCase().split('');
//   console.log(arr);
//   return arr.filter(el => el === 'x').length === arr.filter(el => el === 'o').length;
// };

// console.log(XO('ooxx'));
// console.log(XO('xo'), true);
// console.log(XO('xxOo'), true);
// console.log(XO('xxxm'), false);
// console.log(XO('Oo'), false);
// console.log(XO('ooom'), false);

// =============================Task-6======================================
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
// It is composed of four nucleic acid bases Guanine('G'), Cytosine('C'), Adenine('A'), and Thymine('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells.
// RNA differs slightly from DNA its chemical structure and contains no Thymine.
// In RNA Thymine is replaced by another nucleic acid Uracil('U').
// Create a function which translates a given DNA string into RNA.

// const DNAtoRNA = dna => {};
