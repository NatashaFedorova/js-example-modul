// --------------------------IIFE-------------------------
// (function () {
//   const a = 5;
//   console.log('a:', a);
// })();

// (function () {
//   const a = 15;
//   console.log('a:', a);
// })();

// -------------------------arguments------------------------
// function sum() {
//   let result = 0;

//   for (let i = 0; i < arguments.length; i += 1) {
//     result += arguments[i];
//   }
//   return result;
// }

// console.log(sum(2)); // 2
// console.log(sum(2, 2, 3, 1, 2)); // 10

// -------------------------arguments------------------------
// function multiply() {
//   let result = 1;

//   for (const number of arguments) {
//     result *= number;
//   }
//   return result;
// }
// multiply();
// console.log(multiply(2, 2)); // 4
// console.log(multiply(2, 2, 10)); // 40

// -------------------------arguments +(...rest) або "розпилення"------------------------
// function multiply(...rest) {
//   let result = 1;

//   for (const number of rest) {
//     result *= number;
//   }
//   return result;
// }
// multiply();
// console.log(multiply(3, 2)); // 6
// console.log(multiply(2, 2, 10, 10)); // 400
