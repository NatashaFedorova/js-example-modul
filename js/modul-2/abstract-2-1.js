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
