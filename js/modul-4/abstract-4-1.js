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
//   return `Лскаво просимо${name}`;
// }
// // higher order function, нижче
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}`);
//   callback(name);
// }

// registerGuest('Nata', greet);

//==========================Callback-function & higher order function===========================================
// приклад 2( мій)
// function age(number) {
//   console.log(`Ваш вік ${number}`);
// }
// function adult(number, callback) {
//   callback(number);
//   if (number >= 18) {
//     return `Ви повнолтній! Ваш вік  ${number}`;
//   }
//   return `Ви не повнолтній!  Ваш вік  ${number}`;
// }

// console.log(adult(23, age));
// console.log(adult(17, age));

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
