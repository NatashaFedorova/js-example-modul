// ---------------------------------------------------------------------------
// ---------------------------------ОБ'ЄКТИ-----------------------------------
// ---------------------------------------------------------------------------

// ----------------------------Створення об`єкта------------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.39,
// };

// ---------------------Об`єкт як значення властивості------------------------
// const user = {
//   name: 'Nataliya Fedorova',
//   tag: 'NataF',
//   location: {
//     country: 'Ukraine',
//     city: 'Kiev',
//   },
//   stats: {
//       followers: 100,
//       views: 4000,
//       likes: 4398,
//   },
// };

// -------------------Звернення до властивості через крапку-----------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.39,
// };
// const bookTitle = book.title;
// console.log(bookTitle); //The Last Kingdom
// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']
// const bookStats = book.likes;
// console.log(bookStats); // undefined

// console.log(book.author); // Bernard Cornwell

// -------------------Звернення до вкладених властивостей -----------------------
// const user = {
//   name: 'Nataliya Fedorova',
//   tag: 'NataF',
//   location: {
//     country: 'Ukraine',
//     city: 'Kiev',
//   },
//   stats: {
//     followers: 100,
//     views: 4000,
//     likes: 4398,
//   },
//   hobbies: ['swiming', 'music', 'sci-fi'],
// };
// // об'єкта в об'єкті
// const location = user.location;
// console.log(location); // {country: 'Ukraine', city: 'Kiev'}

// // значення в об'єкті об'єкта
// const country = user.location.country;
// console.log(country); // Ukraine

// // значення властивості - масив
// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']
// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // swiming
// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// ------------Звернення до властивостей через [квадратні дужки]---------------
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.39,
};

const bookTitle = book['title'];
console.log(bookTitle); // The Last Kingdom

const bookGenres = book['genres'];
console.log(bookGenres); // ['historical prose', 'adventurs']

const propKey = 'author';
const bookAuthor = book[propKey];
console.log(bookAuthor); // 'Bernard Cornwell'
