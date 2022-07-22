// ==============================Стрілочна функція та this================================
// стрілочна функція зберігає значення this, на момент створення,
// а не виклику, як звичайна
// стрілочна функція наслідує від батьківського елемента
// const obj = {
//   name: 'Bobby',
//   age: 25,

//   sayHello() {
//     console.log('sayHello -> this:', this);

//     const arrowFn = () => console.log('arrowFn -> this:', this);

//     return arrowFn;
//   },

//   sayGoodbye() {
//     console.log('sayGoodbye -> this:', this);
//   },
// };

// const fn = obj.sayHello();

// fn();
// sayHello -> this: {name: 'Bobby', age: 25, sayHello: ƒ}
// arrowFn -> this: {name: 'Bobby', age: 25, sayHello: ƒ}

// const fnClassiс = obj.sayGoodbye;
// fnClassiс(); // sayGoodbye -> this: undefined

// ================================bind "своїми словами"================================
// ===========bind===========
// const obj = {
//   name: 'Mango',
//   age: 20,
// };

// function sayHello() {
//   console.log('sayHello -> this:', this);
// }

// sayHello(); // sayHello -> this: undefined

// const fnSayHelloCopyWithBind = sayHello.bind(obj);

// fnSayHelloCopyWithBind(); // sayHello -> this: {name: 'Mango', age: 20}

//===bind "своїми словами"=====================
// function myBind(callback, context) {
//   return function () {
//     callback.call(context);
//   };
// }

// const myfnSayHelloCopy = myBind(sayHello, obj);

// myfnSayHelloCopy(); // sayHello -> this: {name: 'Mango', age: 20}

// ==================================Задача 1============================================
// Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// количеством из свойства `stones`.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(({ name }) => name === stoneName);
//     const sum = price * quantity;
//     return sum;
//   },
// };
// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// ==================================Задача 2============================================
// Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(phonebook.contacts);

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.contacts);
// ==================================Задача 3============================================
// Создайте объект `calculator` с тремя методами:

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     const { a = 0, b = 0 } = this;
//     return a + b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator);
// calculator.read(10, 40);
// console.log(calculator.add());
// console.log(calculator.mult());
