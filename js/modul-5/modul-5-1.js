// ========================Функция и this======================
// результат false, потому что ссылочный тип (все 3)
// console.log('[] === []:', [] === []);
// console.log('{} === {}:', {} === {});
// console.log('function (){} === function (){}:', function () {} === function () {});

// ========================Функция и this===============================
// если мы сравнием ссылки на объект будет true
// объект один и тот же самый
// const fnA = function () {
//   console.log('Hello');
// };
// const fnB = fnA;

// console.log('fnA === fnB:', fnA === fnB);

// =======================this в контексте объекта======================
// const user = {
//   tag: 'Mango',
//   showTag() {
// console.log('showTag -> this', this);
//   },
// };
// user.showTag(); // showTag -> this {tag: 'Mango', showTag: ƒ}
// в момент вызова метод ссылается на user(стоит слева),
// поэтому  this - в контексте объекта user

// =======================this без контекста============================
// в строгом -  foo -> this undefined
// не в строгом - foo -> this Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const foo = function () {
//   console.log('foo -> this', this);
// };
// foo();

// =======================this в контексте=============================
// как метод объекта, но объявлена как внешняя функция
// const showTag = function () {
//   console.log('showTag -> this:', this); // showTag -> this: undefined
//   console.log('showTag -> this.tag:', this.tag); // ОШИБКА Uncaught TypeError: Cannot read properties of undefined (reading 'tag')
// };
// showTag();

// =======================this в контексте=============================
// пример работает
// как метод объекта, но объявлена как внешняя функция
// объявляем функцию -> создаем объкт -> добавляем в объект метод showUserTags
// значение showUserTags - это ссылка на showTag
// showTag -> this: {userName: 'Apple', showUserTags: ƒ}
// showTag -> this.tag: Apple
// const showTag = function () {
//   console.log('showTag -> this:', this); // showTag -> this: undefined
//   console.log('showTag -> this.tag:', this.tag); // ОШИБКА Uncaught TypeError: Cannot read properties of undefined (reading 'tag')
// };
// showTag();

// const user = {
//   tag: 'Apple',
// };
// user.showUserTags = showTag;
// console.log('user:', user); // user: {tag: 'Apple', showUserTags: ƒ}

// user.showUserTags(); // в этой строке определилось значение this
// showTag -> this: {tag: 'Apple', showUserTags: ƒ}
// showTag -> this.tag: Apple

// const userSecond = {
//   tag: 'Pear',
// };
// // userSecond.showUserSecondTags = showTag;
// console.log('userSecond:', userSecond); // userSecond: {tag: 'Pear', showUserSecondTags: ƒ}

// userSecond.showUserSecondTags();
// showTag -> this: {tag: 'Pear', showUserSecondTags: ƒ}
// showTag -> this.tag: Pear

// user.showUserTags();
// showTag -> this: {tag: 'Apple', showUserTags: ƒ}
// showTag -> this.tag: Apple

// =======================this без контекста=============================
// Вызов без контекста, но объявлена как метод объекта
// const user = {
//   tag: 'Apple',
//   showTag() {
//     console.log('showTag -> this:', this);
//     console.log('showTag -> this.tag:', this.tag);
//   },
// };

// user.showTag();
// showTag -> this: {tag: 'Apple', showTag: ƒ}
// showTag -> this.tag: Apple

// const outerShowTag = user.showTag; //передаем ссылку на функцию (метод), которая лежит в объекте  user

// outerShowTag(); // на момент вызова нет контекста (this)б слева ничего не указано
// showTag -> this: undefined
//  Uncaught TypeError: Cannot read properties of undefined (reading 'tag')

// ======================================
// эксперимнт
// const user = {
//   tag: 'Apple',
//   showTag() {
//     console.log('showTag -> this:', this);
//     console.log('showTag -> this.tag:', this.tag);
//   },
// };
// const outerShowTag = user.showTag; //передаем ссылку на функцию (метод), которая лежит в объекте  user
// const userSecond = {
//   tag: 'Pear',
//   outerShowTag, // значение outerShowTag будет переменная outerShowTag
// };

// userSecond.outerShowTag();
//  showTag -> this: {tag: 'Pear', outerShowTag: ƒ}
// showTag -> this.tag: Pear

// ==============================контекст в callback-функциях================================
// const user = {
//   tag: 'Apple',
//   showTag() {
//     console.log('showTag -> this:', this);
//     console.log('showTag -> this.tag:', this.tag);
//   },
// };

// вариант 1
// const invokeAction = function (action) {
//   console.log(action);

//   action(); // showTag -> this: undefined // ошибка
// };

// invokeAction(user.showTag);

// вариант 2
// const invokeAction = function (action) {
//   console.log(action);

//   user.action(); //  Uncaught TypeError: user.action is not a function
// };

// invokeAction(user.showTag);

// =============================this пример 1================================
// const fn = function () {
//   console.log('fn -> this:', this);
// };
// fn(); // fn -> this: undefined

// =============================this пример 2================================
// const book = {
//   title: 'Black',
//   showThis() {
//     console.log('showThis -> this:', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this.title:', this.title);
//   },
// };

// book.showThis(); // showThis -> this: {title: 'Black', showThis: ƒ, showTitle: ƒ}
// book.showTitle(); // showTitle -> this.title: Black

// =============================this пример 3================================
// const book = {
//   title: 'Black',
//   showThis() {
//     console.log('showThis -> this:', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this.title:', this.title);
//   },
// };

// const outerShowThis = book.showThis;
// outerShowThis(); //showThis -> this: undefined

// const outerShowTitle = book.showTitle;
// outerShowTitle(); //Uncaught TypeError: Cannot read properties of undefined (reading 'title')

// =============================this пример 4================================
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this:', this);
//     // this.color = color;
//   };

//   //   changeColor(); //changeColor -> this: undefined

//   const sweater = {
//     color: 'teal',
//   };

//   sweater.updateColor = changeColor;

//   //   sweater.updateColor(); // changeColor -> this: {color: 'teal', updateColor: ƒ} // объект - sweater

//   return sweater.updateColor;
// };

// const sweapColor = makeChangeColor();

// sweapColor('blue'); //changeColor -> this: undefined

// =============================this пример 5================================
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this:', this);
//   };
//   return changeColor;
// };

// const updateColor = makeChangeColor();

// updateColor('yellow'); // changeColor -> this: undefined

// const hat = {
//   color: 'blue',
//   updateColor,
// };

// hat.updateColor('orange'); //changeColor -> this: {color: 'blue', updateColor: ƒ}

// console.log(hat.updateColor);
// консоль // ƒ (color) {
//     console.log('changeColor -> this:', this);
//   }

// =============================this пример пример===============================
// при передаче методов объектов, как callback-функций
//  привязка к объекту не сохраняется и this - undefined
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this:', this);
//     this.value += value;
//   },

//   decrement(value) {
//     console.log('decrement -> this:', this);
//     this.value -= value;
//   },
// };
// const updateCounter = function (value, operation) {
//   operation(value);
// };
// updateCounter(10, counter.increment); // increment -> this: undefined
// updateCounter(5, counter.decrement); // decrement -> this: undefined

// =================================this. call пример======================================
// пример без аргументов==================================
// const showThis = function () {
//   console.log('showThis -> this:', this);
// };

// showThis(); // showThis -> this: undefined

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA); // showThis -> this: {a: 5, b: 10}

// пример с  аргументами=================================
// const showThis = function (...args) {
//   console.log(args);
//   console.log('showThis -> this:', this);
// };

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 10, 20, 30, 40);
// [10, 20, 30, 40]
// showThis -> this: {a: 5, b: 10}

// const book = {
//   title: 'Заповіт',
//   author: 'Тарас Шевченко',
// };

// showThis.call(book, 10);
// [10]
// showThis -> this: {title: 'Заповіт', author: 'Тарас Шевченко'}

// =================================this. apply пример======================================
// const showThis = function (a, b, c) {
//   console.log(a, b, c);
//   console.log('showThis -> this:', this);
// };

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.apply(objA, [10, 20, 30]);
// 10 20 30
// showThis -> this: {a: 5, b: 10}

// const book = {
//   title: 'Заповіт',
//   author: 'Тарас Шевченко',
// };

// showThis.apply(book, [10]);
// 10 undefined undefined
// showThis -> this: {title: 'Заповіт', author: 'Тарас Шевченко'}

// =================================this. call пример======================================
// const changeColor = function (color) {
//   this.color = color;
//   console.log('changeColor -> this:', this);
// };

// const hat = {
//   color: 'red',
// };

// changeColor.call(hat, 'orange'); // changeColor -> this: {color: 'orange'}

// const sweater = {
//   color: 'violet',
// };

// changeColor.call(sweater, 'tomato'); // changeColor -> this: {color: 'tomato'}

// =================================this. bind пример======================================
// bind - делает копию функции с привязанным навсегда  объектом
// при этом сам объект не меняется(не получает новых методов)

// const changeColor = function (color) {
//   this.color = color;
//   console.log('changeColor -> this:', this);
// };

// const hat = {
//   color: 'red',
// };

// const changeHatColor = changeColor.bind(hat);

// const sweater = {
//   color: 'violet',
// };

// const changeSweaterColor = changeColor.bind(sweater);

// changeColor(); // changeColor -> this: undefined

// changeHatColor('teal'); // changeColor -> this: {color: 'teal'}

// changeSweaterColor('tomato'); // changeColor -> this: {color: 'tomato'}

// console.log(hat); // {color: 'teal'}

// =================================this. bind пример======================================
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this:', this);
//     this.value += value;
//   },

//   decrement(value) {
//     console.log('decrement -> this:', this);
//     this.value -= value;
//   },
// };
// const updateCounter = function (value, operation) {
//   operation(value);
// };
// updateCounter(10, counter.increment.bind(counter)); // increment -> this: {value: 0, increment: ƒ, decrement: ƒ}
// updateCounter(5, counter.decrement.bind(counter)); //decrement -> this: {value: 10, increment: ƒ, decrement: ƒ}

// console.log(counter); // {value: 5, increment: ƒ, decrement: ƒ}
