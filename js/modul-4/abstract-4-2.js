//====================================== Чисті функції ===========================================
// приклад функції з мутацією
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// приклад приклад чистої функції на основі попередноього прикладу
// const pureMultiply = (array, value) => {
//   const newArray = [];
//   array.forEach(element => {
//     newArray.push(element * value);
//   });
//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = pureMultiply(numbers, 3);

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubleNumbers); // [3, 6, 9, 12, 15]

//=============================================Метод map()===============================================
// const planets = ['Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());

// console.log(planets); // ['Марс', 'Венера', 'Юпітер']
// console.log(planetsInUpperCase); // ['МАРС', 'ВЕНЕРА', 'ЮПІТЕР']
// console.log(planetsInLowerCase); //  ['марс', 'венера', 'юпітер']

//=================================Метод map() для масиву об'єкту========================================
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

//=================================Метод map() для масиву об'єкту========================================
// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const coursesArray1 = students.map(student => student.courses);
// [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// const coursesArray2 = students.flatMap(student => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// console.log(coursesArray1); // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']];
// console.log(coursesArray2); // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']

//=================================Метод filter()========================================
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

//==========================Фільтрація унікальних елементів=================================
const students = [
  { name: 'Манго', courses: ['математика', 'фізика'] },
  { name: 'Полі', courses: ['інформатика', 'математика'] },
  { name: 'Ківі', courses: ['фізика', 'біологія'] },
];

const allCourses = students.flatMap(student => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);

console.log(uniqueCourses); // ['математика', 'фізика', 'інформатика', 'біологія']
