//------------------------------------дебаг у хромі---------------------------------------
// Як потім можна подивитись цілий об'єкт
// після кількаразового додавання властивостей в оголошений об'єкт,
//  не застосовуючи console.log
// C:\project\js-example-modul\images\дебаг у хромі.png - фото
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];

//--------------------------------hasOwnProperty------------------------------------
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';
// dog.legs = 3;

// console.log(dog.hasOwnProperty); // ƒ hasOwnProperty() { [native code] }

//-----------------------------for...in---------------------------------
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(animal); // legs: 4
// console.log(dog); // {name: 'Mango'}
// =====================================
// for (const key in dog) {
//   console.log(key); // name // legs
// }

// for (const key of Object.keys(dog)) {
//   console.log(key); // name
// }
// ===========================================
// for (const key in animal) {
//   console.log(key); // legs
// }

// for (const key in dog) {
//   console.log(key); // name // legs
// }

// for (const key of Object.keys(dog)) {
//   console.log(key); // name
// }

//-----------------------------Задача 1 (Основы обьектов) ---------------------------------
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// вариант 1 записи  обращения к ключу
// user['mood'] = 'happy';
// вариант 2 запси обращения к ключу
// user.hobby = 'skydiving';
// user.premium = false;

// вариант 1 записи
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// вариант 2 записи
// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`); // name: Mango...
// }

// вариант 3 записи
// for (const item of Object.entries(user)) {
//   //   console.log(item); // ['name', 'Mango']...
//   console.log(`${item[0]}: ${item[1]}`); // name: Mango
// }

// вариант 4 записи
// for (const key in user) {
//   console.log(`${key}: ${user[key]}`); // name: Mango...
// }

//-----------------------------Задача 2 (метод Object.values()) ---------------------------------
// У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// вариант 1 (мой)--------------------------------------
// let sum = 0;
// for (const salary of Object.values(salaries)) {
//   sum += salary;
//   console.log('sum', sum);
// }

// вариант 2----------------------------------------------
// function getSalariesSum(salaries ={}) {
//   let sum = 0;
//   for (const salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// };

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(getSalariesSum(salaries)); //390

// console.log(
//   getSalariesSum({
//     John: 200,
//     Ann: 400,
//     Pete: 130,
//   })
// ); // 730

// вариант 3------------------------------------------
// function getSalariesSum(salaries = {}) {
//   let sum = 0;
//   for (const salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }
// console.log(getSalariesSum());

//-----------------------------Задача 3 (массив объектов) ---------------------------------
// Напишите ф-цию calcTotalPrice(stones, stoneName),
// которая принимает массив обьектов и строку с названием камня.
// Ф - ция считает и возвращает общую стоимость камней с таким именем,
// ценой и количеством из обьекта

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];
// вариант 1
// function calcTotalPrice(stones, stoneName) {
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       return item.price * item.quantity;
//     }
//   }
//   return 0;
// }
// вариант 2 - мой
// function calcTotalPrice(stones, stoneName) {
//   let totalPrice = 0;
//   for (const item of stones) {
//     const { name, price, quantity } = item;

//     if (name === stoneName) {
//       totalPrice += price * quantity;
//     }
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(stones, 'Изумруд')); // 5200
// console.log(calcTotalPrice(stones, 'Бриллиант')); // 8100
// console.log(calcTotalPrice(stones, 'Сапфир')); // 2800
// console.log(calcTotalPrice(stones, 'Щебень')); // 400
// console.log(calcTotalPrice(stones, 'Щебооооень')); // 0

//-----------------------------Задача 4 (массив объектов) ---------------------------------
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать
// методы для работы с балансом и историей транзакций.

//=====================================
// Типов транзацкий всего два.
// Можно положить либо снять деньги со счета.

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// ====================================
// Каждая транзакция это объект со свойствами: id, type и amount

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

// ====================================
// Метод создает и возвращает объект транзакции.
// Принимает сумму и тип транзакции.

//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       amount, // под капотом  amount: amount (если ключ и значение совпадают)
//       type, // под капотом  type: type (если ключ и значение совпадают)
//   date: new Date(), //date: Sun Jul 03 2022 00:23:08 GMT+0300 (Восточная Европа, летнее время)
//   date: Date.now(), // можно и так отобразить дату // date: 1656797291778
// };
// },

// ====================================
// Метод отвечающий за добавление суммы к балансу.
// Принимает сумму танзакции.
// Вызывает createTransaction для создания объекта транзакции
// после чего добавляет его в историю транзакций

//   deposit(amount) {
//     this.balance += amount;
//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(newTransaction);
//   },

// ====================================
// Метод отвечающий за снятие суммы с баланса.
// Принимает сумму тpанзакции.
// Вызывает createTransaction для создания объекта транзакции
// после чего добавляет его в историю транзакций.

// Если amount больше чем текущий баланс, выводи сообщение
// о том, что снятие такой суммы не возможно, недостаточно средст

//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(newTransaction);
//     } else {
//       console.log('no money :(');
//     }
//   },

// ====================================
// Метод возвращает текущий баланс

//   getBalance() {
//     return this.balance;
//   },

// ====================================
// Метод ищет и возвращает объект транзации по id

//   getTransactionDetails(id) {
//     for (const item of this.transactions) {
//       if (id === item.id) {
//         return item;
//       }
//     }
//   },

// ====================================
// Метод возвращает количество средств
// определенного типа транзакции из всей истории транзакций

//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const item of this.transactions) {
//       if (type === item.type) {
//         sum += item.amount;
//       }
//     }
//     return sum;
//   },
// };

// console.log(account); // {balance: 0, transactions: Array(0), createTransaction: ƒ, deposit: ƒ, withdraw: ƒ, …}
// console.log(account.balance); //0
// account.deposit(100);
// account.deposit(50);
// console.log(account.transactions); // (2) [{…}, {…}] // 0: {amount: 100, type: 'deposit'} // 1: {amount: 50, type: 'deposit'}
// console.log(account.balance); //150

// account.withdraw(105);
// console.log(account.balance); //45
// account.withdraw(25);
// console.log(account.balance); //20
// account.withdraw(40);
// console.log(account.balance); //20

// console.log(account.getTransactionDetails(2)); // {id: 2, amount: 105, type: 'withdraw'}
// console.log(account.getTransactionDetails(5)); // undefined

// console.log(account.getTransactionTotal(Transaction.DEPOSIT)); // 150
// console.log(account.getTransactionTotal(Transaction.WITHDRAW)); // 130

//-----------------------------Задача 5 (игра - угадай число) ---------------------------------
// const x = Math.floor(Math.random() * 100) + 1;
// console.log(x);

// let userInput;
// do {
//   userInput = Number(prompt('Ввести число'));

//   if (userInput < x) {
//     console.log(`${userInput} < x`);
//   }
//   if (userInput > x) {
//     console.log(`${userInput} > x`);
//   }
// } while (x !== userInput);

// console.log(`Урра - ${userInput}`);
