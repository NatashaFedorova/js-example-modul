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
// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);

// console.log(uniqueCourses); // ['математика', 'фізика', 'інформатика', 'біологія']

//===============================Метод find(callback)=======================================
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined

//=============================Метод findIndex(callback)===================================
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// colorPickerOptions.findIndex(option => option.label === 'blue'); // 2
// colorPickerOptions.findIndex(option => option.label === 'pink'); // 3
// colorPickerOptions.findIndex(option => option.label === 'white'); // -1

//=============================Метод every()===================================
// Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

//=================================Метод some()=========================================
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

//===================Метод every(). Метод some(). Масив об'єктів=========================
// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// console.log(allAvailable);
// console.log(anyAvailable);

//==============================Метод reduce()=========================================
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

//==============================Метод reduce(). Масив об'єктів=========================================
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore); // 64.7

//=====================================Просунутий reduce=============================================
// Умова нижче
// const tweets = [
// { id: '000', likes: 5, tags: ['js', 'nodejs'] },
// { id: '001', likes: 2, tags: ['html', 'css'] },
// { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
// { id: '003', likes: 8, tags: ['css', 'react'] },
// { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// Завдання: порахувати сумму усіх лайків============================================================
// Пройдемо по всіх елементах колекції і додамо значення властивості likes
// до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// для підрахунку лайків з колекції
// const countLikes = tweets => {
// return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// Завдання: зберемо усі теги з постів==============================================================

// Пройдемо по всіх елементах колекції і додамо значення властивості tags
// до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
// allTags.push(...tweet.tags);

// return allTags;
// }, []);

// console.log(tags);

// Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// для збирання тегів з колекції
// const getTags = tweets =>
// tweets.reduce((allTags, tweet) => {
// allTags.push(...tweet.tags);

// return allTags;
// }, []);

// console.log(getTags(tweets));

// Завдання: порахувати кількість унікальних тегів в масиві===========================================
// const getTags = tweets =>
// tweets.reduce((allTags, tweet) => {
// allTags.push(...tweet.tags);

// return allTags;
// }, []);

// const tags = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
// if (!acc.hasOwnProperty(tag)) {
// acc[tag] = 0;
// }

// acc[tag] += 1;

// return acc;
// };

// Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

//====================================Метод sort()============================================
// стандартне сортування
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// ===================
// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// ====================
// const students = ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя'];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// ========================
// const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

//====================================Метод sort(compareFunction)================================
// compareFunction(a, b) повертає будь-яке від'ємне значення
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// compareFunction(a, b) повертає будь-яке додатне значення більше нуля
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

//=======================================localeCompare()=======================================
// 'a'.localeCompare('b'); // -1
// 'b'.localeCompare('a'); // 1
// 'a'.localeCompare('a'); // 0
// 'b'.localeCompare('b'); // 0

//=======================================
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

//=====================================Сортування об'єктів=====================================
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAlphabeticalOrder);

//==================================Ланцюжки методів==================================
// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'фізика'] },
//   { name: 'Полі', score: 59, courses: ['інформатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['фізика', 'біологія'] },
//   { name: 'Ківі', score: 94, courses: ['література', 'інформатика'] },
// ];

// ============================================
// Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
// З цією метою ми відсортуємо копію масиву методом sort(),
// після чого методом map() створимо масив значень властивості name
//  з відсортованого масиву.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// ============================================
// Позбутися таких «мертвих» змінних
// Кожний наступний метод буде виконуватися
// на основі результату роботи попереднього.
// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// ============================================
// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']
