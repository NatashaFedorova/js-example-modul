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
