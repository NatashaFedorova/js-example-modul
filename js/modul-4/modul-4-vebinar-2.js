// ======================callback()=========================
// function fn1() {
//   console.log('hello');
// }

// function fn2() {
//   console.log('world');
// }

// function sayHello(callback1, callback2) {
//   callback1();
//   callback2();
// }

// sayHello(fn1, fn2); // hello  world (на отдельных строках)
// sayHello(fn1, fn1); // hello  hello (на отдельных строках)
// sayHello(fn1, () => console.log('Bobby')); // hello  Bobby (на отдельных строках)

// ======================unique items()=========================
// вивести унікальні елементи 3 способами
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];

// function getUniqueItems1(arr) {
//   const result = [];

//   arr.forEach(item => {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   });
//   return result;
// }

// function getUniqueItems2(arr) {
//   const result = [];

//   arr.forEach((item, idx) => {
//     console.log(item[idx]);
//     if (arr.indexOf(item) === idx) {
//       result.push(item);
//     }
//   });
//   return arr.filter((item, idx) => arr.indexOf(item) === idx);
// }

// const getUniqueItems3 = arr => Array.from(new Set(arr));

// console.log(getUniqueItems1(numbers)); // [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(getUniqueItems2(numbers)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(getUniqueItems3(numbers)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// =================================Set - аналог массива===============
// Set - аналог массива,  только с уникальными значениями
// const mySet = new Set();
// mySet.add(1);
// console.log(mySet); // Set(1) {1}

// const arr = Array.from(mySet);
// console.log(arr); // [1]

// =================================Kahoot - 3===============================
// const values = ['a', 'b', 'c'];
// values.forEach(value => console.log(value));
// a
// b
// c

// =================================reduse() sum=============================
// const numbers = [3, 6, 1, 4, 8];

// const sum = numbers.reduce((acc, item) => (acc += item), 0); // 22
// console.log(numbers);
// console.log(sum);

// ниже развернутый вариант написания  const sum
// let acc = 0;
// for (const value of numbers) {
//   acc += value;
// }

// console.log(acc);

// =================================reduse() min===============================
// const numbers = [3, 6, 1, 4, 8];

// const min = numbers.reduce((acc, item) => (acc > item ? item : acc));
// console.log(min);

// ниже развернутый вариант написания  const sum
// let acc = numbers[0];
// for (const value of numbers) {
//   if (acc > value) {
//     acc = value;
//   }
// }

// console.log(acc);

// ======================================reduse() max===================================
// const numbers = [3, 6, 1, 4, 8];
// const max = numbers.reduce((acc, item) => (acc < item ? item : acc));
// console.log(max);

// ====================================sort()===========================================
// принцип работы
// numbers.sort((a, b) => {
//     if (a < b) return -1; <0
//     if (a > b) return 1; >0

//     return 0;
// });

// ================================
// const numbers = [3, 6, 1, 4, 8,];
// numbers.sort((a, b) => a - b);

// ================================
// const numbers = [3, 6, 1, 4, 8, -79, -92];
// numbers.sort((a, b) => a - b);

// console.log(numbers); // [-92, -79, 1, 3, 4, 6, 8]

// ==========================================every()====================================
// const numbers = [3, 6, 1, 4, 8];

// const res1 = numbers.every(num => num > 2);
// console.log(res1); // false

// const res2 = numbers.every(num => num > 0);
// console.log(res2); // true

// const res3 = numbers.every(num => num % 2 === 0);
// console.log(res3); // false

// ==========================================some()====================================
// const numbers = [3, 5, 1, 9, 7];

// const res1 = numbers.some(num => num > 2);
// console.log(res1); // true

// const res2 = numbers.some(num => num > 0);
// console.log(res2); // true

// const res3 = numbers.some(num => num % 2 === 0);
// console.log(res3); // false

// ===============================Условие последующих задач с 1-12======================
// Коллекция объектов для всех примеров с автомобилями
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// ====================================Задача 1. Метод map=================================
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.
// условие на строке 104
// const getModels = cars => cars.map(({ model }) => model);

// console.table(getModels(cars));

// ====================================Задача 2. Метод map=================================
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов
// с изменным значением свойства price в зависимости от переданной скидки.

// мое решение
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map(car => (car.onSale ? car.price - car.price * discount : car.price));

// решение
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map(car => {
//     return {
//       model: car.model,
//       oldPrice: car.price,
//       newPrice: car.price - car.price * discount,
//     };
//   });

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// ====================================Задача 3. Метод filter=================================
// Пусть функция filterByPrice возвращает массив автомобилей цена
// которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// ====================================Задача 4. Метод filter=================================
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale); // со скидкой
// const getCarsWithoutDiscounts = cars => cars.filter(({ onSale }) => !onSale); // без скидки

// console.table(getCarsWithDiscount(cars));

// ====================================Задача 5. Метод filter=================================
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, carType) => cars.filter(({ type }) => type === carType);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// ====================================Задача 6. Метод find=================================
// const getCarByModel = (cars, carModel) => cars.find(({ model }) => model === carModel);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// ====================================Задача 7. Метод sort=================================
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства amount.

// вариант 1
// const sortByAscendingAmount = cars => {
//   const newArray = [...cars];

//   newArray.sort((currentElement, nextElement) => currentElement.amount - nextElement.amount);

//   return newArray;
// };

// вариант 2
// const sortByAscendingAmount = cars =>
//   [...cars].sort((currentElement, nextElement) => currentElement.amount - nextElement.amount);

// console.table(sortByAscendingAmount(cars));
// console.log(cars);

// ====================================Задача 8. Метод sort=================================
// Пусть функция sortByDescendingPrice возвращает новый массив
// автомобилей отсортированный по убыванию значения свойства price.

// вариант 1
// const sortByDescendingPrice = cars => {price
//   const newArray = [...cars];

//   newArray.sort((currentElement, nextElement) => nextElement.price - currentElement.price);

//   return newArray;
// };

// вариант 2
// const sortByDescendingPrice = cars =>
//   [...cars].sort((currentElement, nextElement) => nextElement.price - currentElement.price);

// console.table(sortByDescendingPrice(cars));

// console.log(cars);

// ====================================Задача 9. Метод sort=================================
// Пусть функция sortByModel возвращает новый массив автомобилей
// отсортированный по названию модели в алфавитном и обратном алфавитном порядке,
// в засисимости от значения параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) =>
//     order === 'asc' ? a.model.localeCompare(b.model) : b.model.localeCompare(a.model)
//   );

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// ====================================Задача 10. Метод reduce=================================
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

// ====================================Задача 11. Цепочки методов=================================
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей,
// но только тех, которые сейчас на распродаже.

// const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car.model);

// console.table(getModelsOnSale(cars));

// ====================================Задача 12. Цепочки методов=================================
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale),
// отсортированных по возрастанию цены.

// const getSortedCarsOnSale = cars =>
//   cars.filter(car => car.onSale).sort((currentCar, nextCar) => currentCar.price - nextCar.price);

// console.table(getSortedCarsOnSale(cars));
