//----------------------------Приклад складних об'єктів ---------------------------------
// const obj = {
//   name: 'Boddy',
//   age: 25,
//   car: {
//     model: 'Ford',
//     color: 'white',
//   },
// };

// в копії нижче ми копіюємо  об'єкт obj, об'єкт car при цьому буде як посилання, а не копія(як результат розпилення)
// const objCopy = {
//   ...obj,
// };
// змінюючи  objCopy.car.color, значення буде змінено і в obj
// objCopy.car.color = 'red';
// console.log(objCopy); // ... car: {model: 'Ford', color: 'red'}...
// console.log(obj); // ... car: {model: 'Ford', color: 'red'}...

// const obj = {
//   name: 'Boddy',
//   age: 25,
//   car: {
//     model: 'Ford',
//     color: 'white',
//   },
// };
// const objCopy = {
//   ...obj,
//   car: {
//     ...obj.car,
//   },
// };
// objCopy.car.color = 'red';

// console.log(obj); // ...car: {model: 'Ford', color: 'white'}
// console.log(objCopy); // ...car: {model: 'Ford', color: 'red'}

//----------------------------class & constructor ---------------------------------
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const bobby = new Human('Boddy', 15);
// const peter = new Human('Peter', 18);
// console.log(bobby); // Human {name: 'Boddy', age: 15}
// console.log(peter); // Human {name: 'Peter', age: 18}

//----------------------- разбір питання 3 Kahoot!--------------------------
// const user = {
//   email: 'mango@gmail.com',
//   age: 20,
// };
// const { email: userEmail } = user;
// console.log(email); // Uncaught ReferenceError: email is not defined

//------------------------------- разбір питання 5 Kahoot!-------------------------------
// function foo({ username } = {}) {
//   console.log(username); // undefined
// }
// foo();

//------------------------------- Задача 1. Деструктуризация------------------------------
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Было
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

//------------------------------- Задача 2. Деструктуризация------------------------------
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// Было
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

//------------------------------- Задача 3. Глубокая деструктуризация------------------------------
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// Было
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

//------------------------------- Задача 4. Деструктуризация------------------------------
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName и stock
// и выводила репорт о количестве товаров на складе любой компании.

// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

//------------------------------- Задача 5. Операция spread------------------------------
// Дополни функцию createContact(partialContact) так,
// чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt,
// а также list со значением "default" если в partialContact нет такого свойства.

// решение 1
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// решение 2
// function createContact({ list = 'default', ...partialContact }) {
//   return {
//     list,
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

//------------------------------- Задача 6. Операция rest------------------------------
// Напиши функцию transformUsername(user) так,
// чтобы она возвращала новый обьект со свойством fullName,
// вместо firstName и lastName.

// function transformUsername({ firstName, lastName, ...user }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...user,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// ); // {fullName: 'Jacob Mercer', id: 1, email: 'j.mercer@mail.com', friendCount: 40}

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// ); // {fullName: 'Adrian Cross', id: 2, email: 'a.cross@hotmail.com', friendCount: 20}

//-------------------------------Массив объектов------------------------------
// function transformUsername(users) {
//   const newUsers = [];

//   for (const user of users) {
//     const { firstName, lastName, ...rest } = user;

//     newUsers.push({
//       createdAt: Date.now(),
//       fullName: `${firstName} ${lastName}`,
//       ...rest,
//     });
//   }
//   return newUsers;
// }
// console.log(
//   transformUsername([
//     {
//       id: 1,
//       firstName: 'Jacob',
//       lastName: 'Mercer',
//       email: 'j.mercer@mail.com',
//       friendCount: 40,
//     },
//     {
//       id: 2,
//       firstName: 'Adrian',
//       lastName: 'Cross',
//       email: 'a.cross@hotmail.com',
//       friendCount: 20,
//     },
//   ])
// );
