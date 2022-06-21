//-------------------------Abstract (конспект)---------------------------------

//-----------------Створення масиву та доспуп до його елементу, зміна елементів, length-----------------------
// const hotels = ['Black', 'Red', 'Violet'];
// console.log(hotels[0]); //Black
// console.log(hotels[1]); //Red
// console.log(hotels[2]); //Violet

// hotels[1] = 'Teal';
// hotels[2] = 'Sunny';
// console.log(hotels); //(3) - (длина) ['Black', 'Teal', 'Sunny']
// console.log(hotels[0]); //Black
// console.log(hotels[1]); //Teal
// console.log(hotels[2]); //Sunny

// console.log(hotels.length); //3

// const lastElementIndex = hotels.length - 1;
// console.log(lastElementIndex); //2
// console.log(hotels.length - 1); //2
// console.log(hotels[lastElementIndex]); //Sunny

//-----------------------------------------Ітерація по масиву-----------------------------------
// const colors = ['Black', 'Red', 'Violet', 'Teal', 'Blue', 'Tomato'];
// for (let i = 1; i < colors.length - 1; i += 2) {
//   console.log(colors[i]); //Red Teal
// }

//-----------------------------------------Цикл for...of-----------------------------------
// for (const variable of iterable) {
//   // тіло циклу
// }
// variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
// iterable — колекція, яка містить ітерабельні (що можна порахувати) елементи, наприклад масив.

// const colors = ['Black', 'Red', 'Violet', 'Teal', 'Blue', 'Tomato'];
// for (const color of colors) {
//   console.log(color); //каждый елемент отдельно
// }

// const exampleString = 'JavaScript';
// for (const elementString of exampleString) {
//   console.log(elementString); //каждая буква отдельно с новой строчки
// }

//-----------------------------------------Цикл for...of (задача 1)-----------------------------------
// const colors = ['Black', 'Red', 'Volet', 'Teal', 'Blue', 'Tomato'];
// const colorToFind = 'violet';
// let message;

//option 1
// for (const color of colors) {
//   if (colorToFind === color.toLowerCase()) {
//     message = 'Find';
//     break;
//   }
//   message = 'Not find';
// }
// console.log(message);

//option 2
// for (const color of colors) {
//   if (colorToFind === color.toLowerCase()) {
//     message = 'Find';
//     break;
//   }
// }
// console.log(message);
// мы не пишем, что будет в негативном сценарии
//undefined - значение негативного результата

//-----------------------------------------Цикл for...of (задача 2)-----------------------------------
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

//-----------------------Присвоєння за посиланням(by reference) і за значенням(by value)------------------------
// Приклад зміних за посиланням-----------------------------------------------------------
// let a = 5;
// Присвоєння за значенням, в пам'яті буде створена ще
// одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// Змінимо значення a
// a = 10;
// console.log(a); // 10
// Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// Приклад зміних за посиланням------------------------------------------------------
// const a = ['Mango'];
// Оскільки a - це масив, в b записується посилання на вже існуючий
// масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push('Poly');
// console.log(a); // ["Mango", "Poly"]

// b також змінилось, тому що b, як і a,
// просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// Результат повторюється
// b.push('Ajax');
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// мій приклад-------------------------------------------------------------------
// const fruits = ['Apple'];
// const fruits1 = fruits;

// console.log(fruits); // ['Apple']
// console.log(fruits1); // ['Apple']

// fruits.push('Pear');
// console.log(fruits); //  (2) ['Apple', 'Pear']
// console.log(fruits1); //  (2) ['Apple', 'Pear']

// fruits.push('Banana');
// console.log(fruits); //(3) ['Apple', 'Pear', 'banana']

//-----------------------------------Метод split(delimiter)----------------------------------
// const fruit = 'Mango';
// console.log(fruit.split('')); //(5) ['M', 'a', 'n', 'g', 'o']

// const sentence = 'Аn apple is a fruit';
// console.log(sentence.split('')); //['А', 'n', ' ', 'a', 'p', 'p', 'l', 'e', ' ', 'i', 's', ' ', 'a', ' ', 'f', 'r', 'u', 'i', 't']
// console.log(sentence.split(' ')); //(5) ['Аn', 'apple', 'is', 'a', 'fruit']

//------------------Метод join(delimiter) - протилежний методу split--------------------------
// const sentence = ['Аn', 'apple', 'is', 'a', 'fruit'];
// console.log(sentence.join('')); //Аnappleisafruit
// console.log(sentence.join(' ')); //Аn apple is a fruit

//-------------------------------idexOf-----------------------------------------------------
// const fruits = ['Mango', 'Banana', 'Pear', 'Apple', 'Pear'];
// console.log(fruits.indexOf('Pear')); // 2
// console.log(fruits.indexOf('Cherry')); //-1

//-------------------------------includes()--------------------------------------------------
// const fruits = ['Mango', 'Banana', 'Pear', 'Apple'];
// console.log(fruits.includes('Banana')); // true
// console.log(fruits.includes('Cherry')); // false

//-------------------------Перевірка багатьох умов з includes()------------------------------
// const fruits = ['Mango', 'Banana', 'Pear', 'Apple'];
// const fruit = 'Mango';
// const specialFruits = fruits.includes('Mango');

// console.log(specialFruits); //true  if 'Mango'
// console.log(specialFruits); //true if 'Cherry'

// if (specialFruits) {
//   console.log(`${fruit} - спеціальний фрукт`);
// }

//----------------------------Push() and pop()-------------------------------------
// const numbers = [];
// console.log(numbers); //[];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2, 3);
// console.log(numbers); // (3) [1, 2, 3]

// numbers.push(5);
// console.log(numbers); // (4) [1, 2, 3, 5]

// -----------------------------------------
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers); // (5) [1, 2, 3, 4, 5]

// numbers.pop();
// console.log(numbers); // (4) [1, 2, 3, 4]

// numbers.pop();
// console.log(numbers); // (3) [1, 2, 3]

// numbers.pop();
// console.log(numbers); // (2) [1, 2]

// numbers.pop();
// console.log(numbers); // [1]

// numbers.pop();
// console.log(numbers); // []

//-----------------------------------------
// const numbers = [1, 3, 4, 7];
// console.log(numbers); //(4) [1, 3, 4, 7]

// numbers.shift();
// console.log(numbers); //(3) [3, 4, 7]

// numbers.unshift(3, 4);
// console.log(numbers); //(5) [3, 4, 3, 4, 7]

//----------------------------Slice()-------------------------------------
// const fruits = ['Mango1', 'Banana1', 'Pear1', 'Apple1', 'Mango2', 'Banana2', 'Pear3', 'Apple4'];
// console.log(fruits); //(8) ['Mango1', 'Banana1', 'Pear1', 'Apple1', 'Mango2', 'Banana2', 'Pear3', 'Apple4']

// console.log(fruits.slice(0, 3)); // (3) ['Mango1', 'Banana1', 'Pear1']

// console.log(fruits.slice(3, fruits.length - 1)); //(4) ['Apple1', 'Mango2', 'Banana2', 'Pear3']

// console.log(fruits.slice(5)); // (3) ['Banana2', 'Pear3', 'Apple4']

// console.log(fruits.slice(-3)); // (3) ['Banana2', 'Pear3', 'Apple4']

// console.log(fruits.slice(-2)); // (2) ['Pear3', 'Apple4']

// console.log(fruits.slice(-1)); // ['Apple4']

//---------------------------Метод splice (видалення)------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers); // (6) [1, 2, 3, 4, 5, 6]

// const deletedNumbers = numbers.splice(1, 3);

// console.log(numbers); // (3) [1, 5, 6] - те, що залишилось
// console.log(deletedNumbers); // (3) [2, 3, 4] - те, що видалили

//---------------------------Метод splice (додати)------------------------------------
// const fruits = ['Mango', 'Pear', 'Cherry'];
// console.log(fruits); // (3) ['Mango', 'Pear', 'Cherry']
// // 'Banana', 'Pear', 'Apple'- необхідно додати після Mango

// fruits.splice(1, 0, 'Banana', 'Pear', 'Apple');
// console.log(fruits); //(6) ['Mango', 'Banana', 'Pear', 'Apple', 'Pear', 'Cherry']

//---------------------------Метод splice (заміна)------------------------------------
// const numbers = [1, 2, 6, 7, 9, 4, 5];
// console.log(numbers); //(7) [1, 2, 6, 7, 9, 4, 5]

// numbers.splice(2, 3, 3);
// console.log(numbers); //(5) [1, 2, 3, 4, 5] - можна видалити більше, а вставити менше

//---------------------------Метод concat(об'єднання)------------------------------------
// приклад з конспеку------------------------------------------
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// мій приклад--------------------------------------------------
// const firstBlock = ['First-1', 'First-2', 'First-3'];
// const secondBlock = ['Second-1', 'Second-2', 'Second-3'];
// console.log(firstBlock); // (3) ['First-1', 'First-2', 'First-3']
// console.log(secondBlock); // (3) ['Second-1', 'Second-2', 'Second-3']

// const firstPlusSecondResult = firstBlock.concat(secondBlock);
// console.log(firstPlusSecondResult); //(6) ['First-1', 'First-2', 'First-3', 'Second-1', 'Second-2', 'Second-3']

// const secondPlusFirstResult = secondBlock.concat(firstBlock);
// console.log(secondPlusFirstResult); // (6) ['Second-1', 'Second-2', 'Second-3', 'First-1', 'First-2', 'First-3']

//--------------------------- Оголошення function, параметри та аргументи------------------------------------
// function multiply(x, y, z) {
// тіло функції
//   console.log(`Результат додавання  дорівнює ${x + y + z}`); //Це лог на момент виклику функції multiply
// }
// multiply(2, 4, 7); // Результат додавання  дорівнює 13 //'Це лог на момент виклику функції multiply'
// multiply(5, 8, 10); // Результат додавання  дорівнює 23 //'Це лог на момент виклику функції multiply'
// multiply(1, 1, 1); // Результат додавання  дорівнює 3 //'Це лог на момент виклику функції multiply'

//------------------------------------ Повернення значення--------------------------------------
// function multiply(x, y, z) {
//   console.log('Код до return виконується звичайним чином');

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log('Цей лог ніколи не виконається, він стоїть після return');
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// мій приклад--------------------------------
// function plus(a, b, c, d, i) {
//   console.log('Код виконується', a, b, c, d, i);

//   return a + b + c + d + i; // повертаємо результат виразу додавання

//   console.log('Код  не виконується', a, b, c, d, i);
// }

// let result = plus(1, 3, 4, 6, 8); //Код виконується 1 3 4 6 8
// console.log(result); // 22

// result = plus(11, 13, 64); //Код виконується 11 13 64 undefined undefined
// console.log(result); // NaN

// result = plus(11, 13, 64, 11, 13, 64); //Код виконується 11 13 64 11 13
// console.log(result); // 112

//------------------------------------Порядок виконання коду--------------------------------------
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// console.log('Лог до виклику функції multiply');
// multiply(2, 3, 5); // Результат множення дорівнює 30
// console.log('Лог після виклику функції multiply');

//------------------------------------Значення за замовчуванням--------------------------------------
// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }
// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// -----------------------------Псевдомасив arguments------------------------------------
// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }
//   return total;
// }
// console.log(multiply(1, 2, 3)); //6
// console.log(multiply(1, 2, 3, 4)); //24
// console.log(multiply(1, 2, 3, 4, 5)); //120

// -----------------------------Перетворення псевдомасиву в масив------------------------------------
// Варіант 1 (старий)
// function fn() {
//   // змінна args буде містити перетворенній повноцінний массив
//   const args = Array.from(arguments);
// }
// Варіант 2 (кращий) використовуючи операцію ...(rest)
// function fn(...args) {
//   //  Змінна args буде містити повноцінний масив
// }

// ---------------------------Патерн «Раннє повернення»----------------------------------
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведення, введіть значення більше за нуль');
//     return;
//   }

//   if (amount > balance) {
//     console.log('Недостатньо коштів');
//     return;
//   }

//   console.log('Операція зняття коштів проведена');
// }

// withdraw(0, 200); // Для проведення, введіть значення більше за нуль
// withdraw(300, 200); // Недостатньо коштів
// withdraw(150, 200); // Операція зняття коштів проведена

// --------------------------Функціональний вираз---------------------------------
// звичайне оголошення функції
// multiply(1, 3, 5); //Результат множення дорівнює 15
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// multiply(4, 7, 8); // Результат множення дорівнює 224

// альтернативне оголошення функції
// multiply(1, 3, 5); // Не працює до об'явнення функції, видає помилку

// const multiply = function (x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// };
// multiply(4, 5, 6); // Результат множення дорівнює 120

//--------------------------Глобальна область видимості-----------------------------
// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

//---------------------------Блокова область видимості-----------------------------
// function foo() {
//   const a = 20;
//   console.log(a); // 20

//   for (let i = 0; i < 5; i++) {
//     console.log(a); // 20

//     if (i === 2) {
//       console.log(a); // 20
//     }
//   }
// }
// // ❌ Помилка! Змінна a - недоступна у глобальній області видимості
// console.log(a);

// for (let i = 0; i < 3; i++) {
//   // ❌ Помилка! Змінна a - недоступна в цій області видимості
//   console.log(a);
// }

//---------------------------Стек викликів-----------------------------
// function bar() {
//   console.log('bar');
// }

// function baz() {
//   console.log('baz');
// }

// function foo() {
//   console.log('foo');
//   bar();
//   baz();
// }

// foo();
