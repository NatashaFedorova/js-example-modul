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
// function makeArray(firstArray, secondArray, maxLength) {

//   const allArray = firstArray.concat(secondArray);

//   if (allArray.length > maxLength) {
//     return allArray.slice(0, maxLength);
//   }
//   return allArray;
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ['Mango', 'Poly', 'Ajax']
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ['Mango', 'Poly', 'Houston', 'Ajax']
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ['Mango', 'Ajax', 'Chelsea']
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// ------------------------------Задача 16------------------------------------
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// ------------------------------Задача 17------------------------------------
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(1)); //1
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(7)); // 28

// ------------------------------Задача 18------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// ------------------------------Задача 19------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503

// ------------------------------Задача 20------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// ------------------------------Задача 21------------------------------------
// function findLongestWord(string) {
//
//   const arr = string.split(' ');
//   // console.log(arr); // ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']
//   let wordMaxLength = arr[0];
//   // console.log(wordMaxLength);
//   for (const word of arr) {
//     // console.log(word);
//     if (word.length > wordMaxLength.length) {
//       wordMaxLength = word;
//       // console.log(word);
//     }
//     wordMaxLength = wordMaxLength;
//   }
//   return wordMaxLength;
//   // Change code above this line
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// console.log(findLongestWord('Google do a roll')); // Google
// console.log(findLongestWord('May the force be with you')); // force

// ------------------------------Задача 22------------------------------------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   // numbers.push(min);
//   // console.log(numbers);
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     // console.log(numbers);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

// ------------------------------Задача 23------------------------------------
// function filterArray(numbers, value) {

//   const newArray = [];

//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]

// ------------------------------Задача 24------------------------------------
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   return fruits.includes(fruit);
// }

// ------------------------------Задача 25------------------------------------
function getCommonElements(array1, array2) {
  // Change code below this line
  // Change code above this line
}
console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// ------------------------------Задача 26------------------------------------

// ------------------------------Задача 27------------------------------------

// ------------------------------Задача 28------------------------------------

// ------------------------------Задача 29------------------------------------

// ------------------------------Задача 30------------------------------------

// ------------------------------Задача 31------------------------------------

// ------------------------------Задача 32------------------------------------
