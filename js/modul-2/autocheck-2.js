// ------------------------------Задача 1------------------------------------
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }
// console.log(checkAge(15));

// ------------------------------Задача 2------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }

// console.log(checkPassword('jqueryismyjam'));

// ------------------------------Задача 3------------------------------------
// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }

// console.log(checkStorage(2000, 100));

// ------------------------------Задача 4------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// ------------------------------Задача 5------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(lastElement); //orange

// ------------------------------Задача 6------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.log(fruits); // ['apple', 'peach', 'pear', 'banana']

// ------------------------------Задача 7------------------------------------
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength); // 4

// ------------------------------Задача 8------------------------------------
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex); //3
// console.log(lastElement); //banana

// ------------------------------Задача 9------------------------------------
// function getExtremeElements(array) {
//   const arrayLength = array.length;

//   const arrayPartDel = arrayLength - 2;

//   array.splice(1, arrayPartDel);
//   return array;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// ------------------------------Задача 10------------------------------------
// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(delimeter);

//   return words;
// }

// console.log(splitMessage('Mango hurries to the train', ' ')); // ["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage('Mango', '')); // ["M", "a", "n", "g", "o"]
// console.log(splitMessage('best_for_week', '_')); // ["best", "for", "week"]

// ------------------------------Задача 11------------------------------------
// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); // 50
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); // 100
// console.log(calculateEngravingPrice('Web-development is creative work', 40)); // 160
// console.log(calculateEngravingPrice('Web-development is creative work', 20)); // 80

// ------------------------------Задача 12------------------------------------
// function makeStringFromArray(array, delimeter) {
//   let string;

//   string = array.join(delimeter);

//   return string;
// }
// console.log(makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')); // "Mango hurries to the train"
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '')); // "Mango"
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_')); // "top_picks_for_you"

// ------------------------------Задача 13------------------------------------
// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Arrays for begginers'));
// ------------------------------Задача 14------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, [fruits.length - 1]);
// const lastThreeEls = fruits.slice(-3);

// console.log(nonExtremeEls); // ['plum', 'pear', 'orange']

// ------------------------------Задача 15------------------------------------
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ['Mango', 'Poly', 'Ajax']
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ['Mango', 'Poly', 'Houston', 'Ajax']
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ['Mango', 'Ajax', 'Chelsea']
// ------------------------------Задача 16------------------------------------

// ------------------------------Задача 17------------------------------------

// ------------------------------Задача 18------------------------------------

// ------------------------------Задача 19------------------------------------

// ------------------------------Задача 20------------------------------------

// ------------------------------Задача 21------------------------------------

// ------------------------------Задача 22------------------------------------

// ------------------------------Задача 23------------------------------------

// ------------------------------Задача 24------------------------------------

// ------------------------------Задача 25------------------------------------

// ------------------------------Задача 26------------------------------------

// ------------------------------Задача 27------------------------------------

// ------------------------------Задача 28------------------------------------

// ------------------------------Задача 29------------------------------------

// ------------------------------Задача 30------------------------------------

// ------------------------------Задача 31------------------------------------

// ------------------------------Задача 32------------------------------------
