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
