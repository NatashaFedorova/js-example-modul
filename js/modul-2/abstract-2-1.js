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
// for (let i = 1; i < 4; i += 2) {
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

//-----------------------------------------Цикл for...of-----------------------------------
const colors = ['Black', 'Red', 'Violet', 'Teal', 'Blue', 'Tomato'];
const colorToFind = 'Violet';
let message;

for (const color of colors) {
  if (colorToFind === color) {
    message = 'Find';
    break;
  }
  message = 'Not find';
}
console.log(message);
