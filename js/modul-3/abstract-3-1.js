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
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.39,
// };

// const bookTitle = book['title'];
// console.log(bookTitle); // The Last Kingdom

// const bookGenres = book['genres'];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = 'author';
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// ------------------------Зміна значення властивостей----------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.39,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push('драма');

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventure', 'драма']

// ------------------------Додавання властивостей----------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.39,
// };

// book.pageCount = 836;
// book.originalLanguage = ['en'];
// book.translations = ['uk', 'ru'];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // ['en']
// console.log(book.translations); // ['uk', 'ru']

// ------------------------Короткі властивості----------------------
// const nameUser = 'Генрі Сибола';
// const age = 25;

// const user = {
//   nameUser,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// -----------------------Обчислювальні властивості----------------------
// const nameUser = 'Генрі Сибола';
// const propName = 'nameUser';
// const user = {
//   age: 25,
//   [propName]: 'Генрі Сибола',
// };
// console.log(user.nameUser); // Генрі Сибола
// console.log(user.age); // 25

// -----------------------Обчислювальні властивості----------------------
// const booksShelf = {
//   books: ['The Last Kingdom', 'Dream'],

//   getBooks() {
//     console.log('Цей метод буде повертати всі книги - властивість books');
//   },
//   addBooks() {
//     console.log('Цей метод буде додавати нову книгу у властивість books');
//   },
// };

// booksShelf.getBooks();
// booksShelf.getBooks('Нова книга');

// -------------------Доступ до властивостей об'єкта в методах (THIS)-------------------
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     console.log(this);
//   },
// };

// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks();
// {books: Array(1), getBooks: ƒ}
// books: ['The Last Kingdom']
// getBooks: ƒ getBooks()

// -------------------Доступ до властивостей об'єкта в методах (THIS)-------------------

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks());

// --------------------Цикл for...in (перебирання об'єкта) - схема-------------------------
// for (key in object) {
//   // інструкції
// }

// --------------------------Цикл for...in (перебирання об'єкта)---------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
// Ключ
//   console.log(key);

// Значення властивості з таким ключем
//   console.log(book[key]);

//   console.log(`${key}: ${book[key]}`); // title: The Last Kingdom
// }

//---------------------------------Метод hasOwnProperty()-----------------------------------
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4
// // ===========================================
// // ❌ Повертає true для всіх властивостей
// console.log('name' in dog); // true
// console.log('legs' in dog); // true

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.hasOwnProperty('legs')); // false

//-------------------------------------Метод Object.keys()-----------------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// ===============================================================

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// for (const key of keys) {
//   // Ключ
//   console.log(key); // title
//   // Значення властивості
//   console.log(book[key]); // The Last Kingdom
// }

//-------------------------------------Object.values()-----------------------------------
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//-------------------------------------Object.values() - приклад 2-----------------------------------
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

//-------------------------------------Object.entries()-----------------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

//-------------------------------------Масив об'єктів-----------------------------------
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смішної людини',
//     author: 'Федір Достоєвський',
//     rating: 7.75,
//   },
// ];
// =====================================
// for (const book of books) {
//   // Об'єкт книги (кожної книги)
//   console.log(book); // {title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38}
//   // Назва (кожної книги)
//   console.log(book.title); // The Last Kingdom
//   // Автор (кожної книги)
//   console.log(book.author); // Bernard Cornwell // Роберт Шеклі // Федір Достоєвський
//   // Рейтинг (кожної книги)
//   console.log(book.rating); // 8.38 // 8.51 // 7.75
// }
// ======================================
// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }
// console.log(bookNames);

//--------------------------------spread: передача аргументів-----------------------------
// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps); // 14 -4 25 8 11
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

//--------------------------------spread: створення нового масиву---------------------------
// const temps = [14, -4, 25, 8, 11];
// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// =================================================
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

//--------------------------------spread: створення нового об'єкта---------------------------
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // {propA: 5, propB: 10, propC: 15}

//-----------------------------spread: створення нового об'єкта (приклад 2)------------------
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // {propC: 50, propD: 20, propA: 5, propB: 10}

//-----------------------------spread: створення нового об'єкта (приклад 3)------------------
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // {propB: 10, propA: 5, propC: 15}

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 30, ...second };
// console.log(fifth); // {propA: 5, propB: 30, propC: 15}

//-----------------------------rest: збирання всіх аргументів функції------------------------
// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?
// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

//--------------------------rest: збирання частини аргументів функції--------------------------
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// // 1
// // 2
// // []
// multiply(1, 2, 3);
// // 1
// // 2
// // [3]
// multiply(1, 2, 3, 4);
// // 1
// // 2
// // [3, 4]

//----------------------------------Деструктуризація об'єктів---------------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

//----------------------------------Значення за замовчуванням---------------------------------
