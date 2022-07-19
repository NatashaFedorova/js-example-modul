// =================================Прототипное наследование=====================================
// const obj = {
//   a: 10,
//   b: 20,
// };
// console.log(obj); // {a: 10, b: 20}
// console.log(obj.hasOwnProperty('a')); // true
// console.log(obj.hasOwnProperty('z')); // false

// ==========================================
// const objC = {
//   z: 3,
// };
// console.log(objC); // {z: 3}

// const objB = Object.create(objC);
// objB.y = 2;
// console.log(objB); // {y: 2}

// // console.log(objB.y); // 2
// // console.log(objB.z); // 3

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA); // {x: 1}

// console.log(objA.x); // 1
// console.log(objA.y); // 2
// console.log(objA.z); // 3

// objA.y = 1000;
// console.log(objA); // {x: 1, y: 1000} //  у objA появилось новое свойство

// =================================Прототипное наследование=====================================
// const dummyObj = Object.create({ message: 'Это свойсво объекта прототипа' });
// console.log(dummyObj.message); // Это свойсво объекта прототипа

// dummyObj.message = 'Это собственное свойсво объекта ';
// console.log(dummyObj.message); // Это собственное свойсво объекта

// =============================Объе́ктно-ориенти́рованное программи́рование=============================
// const Car = function (value) {
//   console.log(this); //Car {}

//   this.a = value;
// }; //  создаем класс

// const myCar = new Car(5);
// console.log(myCar); // Car {a: 5}

// const myCar2 = new Car(10);
// console.log(myCar2); // Car {a: 10}

// =============================Объе́ктно-ориенти́рованное программи́рование=============================
// вариант 1====================================
// const Car = function (brand, model, price) {
//   console.log(this);

//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const myCar = new Car('Audi', 'Q3', 35000);
// console.log(myCar); // {brand: 'Audi', model: 'Q3', price: 35000}

// const myCar2 = new Car('Ford', 'Fiesta', 25000);
// console.log(myCar2); // {brand: 'Ford', model: 'Fiesta', price: 25000}

// вариант 2====================================
// если 2 и больше аргумента используем объект настроек
// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// console.log(Car.prototype); //{constructor: ƒ} - это прототип  будущего объекта (экземпляра)

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this:', this);
//   console.log('Hello!!!');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
//   console.log(this);
// };

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar); // Car {brand: 'Audi', model: 'Q3', price: 35000}
// myCar.sayHi();
// Car.prototype.sayHi -> this: Car {brand: 'Audi', model: 'Q3', price: 35000}
// Hello!!!

// myCar.changePrice(40000); // Car {brand: 'Audi', model: 'Q3', price: 40000}

// const myCar2 = new Car({
//   brand: 'Ford',
//   model: 'Fiesta',
//   price: 25000,
// });
// console.log(myCar2); // Car {brand: 'Ford', model: 'Fiesta', price: 25000}
// myCar2.sayHi();
// Car.prototype.sayHi -> this: Car {brand: 'Ford', model: 'Fiesta', price: 25000}
// Hello!!!

// ниже без аргументов, подтянутся параметры по умолчанию
// const myCar3 = new Car();
// console.log(myCar3); // Car {brand: undefined, model: undefined, price: undefined}

// ================================ООП - пример=================================
// const Book = function ({ title, author, rating } = {}) {
//   this.title = title;
//   this.author = author;
//   this.rating = rating;
// };

// Book.prototype.changeRating = function (newRating) {
//   this.rating = newRating;
//   console.log(this);
// };

// Book.prototype.changeTitle = function (newTitle) {
//   this.title = newTitle;
//   console.log(this);
// };

// const myBook1 = new Book({
//   title: 'Заповіт',
//   author: 'Тарас Шевченко',
//   rating: 9.5,
// });
// console.log(myBook1); // Book {title: 'Заповіт', author: 'Тарас Шевченко', rating: 9.5}
// myBook1.changeRating(10); // Book {title: 'Заповіт', author: 'Тарас Шевченко', rating: 10}

// const myBook2 = new Book({
//   title: 'Бояриня',
//   author: 'Леся УкраЇнка',
//   rating: 9.3,
// });
// console.log(myBook2); // Book {title: 'Бояриня', author: 'Леся УкраЇнка', rating: 9.3}
// myBook2.changeRating(9.5); // Book {title: 'Бояриня', author: 'Леся УкраЇнка', rating: 9.5}

// const myBook3 = new Book({
//   title: 'Мертві душі',
//   author: ' Микола Гоголь',
//   rating: 9.4,
// });
// console.log(myBook3); // Book {title: 'Мертві душі', author: ' Микола Гоголь', rating: 9.4}
// myBook3.changeTitle('Ревизор'); // Book {title: 'Ревизор', author: ' Микола Гоголь', rating: 9.4}

// ================================ООП - пример=================================
// const User = function ({ password, email } = {}) {
//   this.password = password;
//   this.email = email;
// };
// User.prototype.changePassword = function (newPassword) {
//   this.password = newPassword;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const userFirst = new User({
//   password: 'mango12349575',
//   email: 'mango@mail.com',
// });
// console.log(userFirst); // User {password: 'mango12349575', email: 'mango@mail.com'}
// userFirst.changePassword('1qw2e3r4');
// userFirst.changeEmail('mango@supermail.com');
// console.log(userFirst); // User {password: '1qw2e3r4', email: 'mango@supermail.com'}

// const userSecond = new User({
//   password: 'pear08978675',
//   email: 'pear@mail.com',
// });
// console.log(userSecond); // User {password: 'pear08978675', email: 'pear@mail.com'}
