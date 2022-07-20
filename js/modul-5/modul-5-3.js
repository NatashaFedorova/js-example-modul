// ===================================Классы=================================
// ниже приведен пример обычного синтаксиса
// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
//   console.log(this);
// };

// Car.description = 'Класс описывающий автомобиль';

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// const myCar2 = new Car({
//   brand: 'Ford',
//   model: 'Fiesta',
//   price: 25000,
// });

// ниже приведен пример записи через класс
// class Car {
//   static description = 'Класс описывающий автомобиль';

//   static logInfo(carObj) {
//     console.log('carObj:', carObj);
//   }

//   #test = 'test';

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }
// }

// console.dir(Car);

// const carFirst = new Car({
//   brand: 'Aston Martin',
//   model: 'Vantage',
//   price: 100000,
// });

// console.log(Object.getPrototypeOf(carFirst)); // {constructor: ƒ, changePrice: ƒ, updateModel: ƒ}
// console.log(carFirst); // Car {brand: 'Aston Martin', model: 'Vantage', price: 100000, #test: 'test'}
// console.log(carFirst.test); // undefined

// const carSecond = new Car({
//   brand: 'Ford Mustang',
//   model: 'Shelby GT500',
//   price: 120000,
// });

// console.log(carSecond);

// Car.logInfo(carFirst); // carObj: Car {brand: 'Aston Martin', model: 'Vantage', price: 100000}

// ===================================Геттеры и сеттеры=================================
// class Car {
//   static description = 'Класс описывающий автомобиль';

//   static logInfo(carObj) {
//     console.log('carObj:', carObj);
//   }

//   constructor({ brand, model, price } = {}) {
//     this._brand = brand;
//     this._model = model;
//     this._price = price;
//   }

//   get brand() {
//     return this._brand;
//   }

//   set brand(newBrand) {
//     this._brand = newBrand;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }
// }

// const carFirst = new Car({
//   brand: 'Aston Martin',
//   model: 'Vantage',
//   price: 100000,
// });

//  меняем значение свойства  price
// carFirst.price = 105000;
// консолим значение свойства  price
// console.log(carFirst.price); // 105000

// const carSecond = new Car({
//   brand: 'Ford Mustang',
//   model: 'Shelby GT500',
//   price: 120000,
// });

// carSecond.model = 'GT500';
// console.log(carSecond.model); // GT500

// ===================================Наследование=================================
// есть 2 персонажа (2 вида классов) Warrior(Воин) и Mage (Маг), у которых есть общие свойства

// class Hero {
//   constructor({ name = 'Hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }
//   gainXp(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon = 'weapon', ...rest } = {}) {
//     super(rest); // вызывается конструктор родителя
//     this.weapon = weapon;
//   }
// }

// class Berserk extends Warrior {
//   constructor({ warcry, ...rest } = {}) {
//     super(rest); // вызывается конструктор родителя
//     this.warcry = warcry;
//   }

//   babyRage() {
//     console.log(this.warcry);
//   }
// }

// const mango = new Berserk({ name: 'Mango', xp: 100, weapon: 'sword', warcry: 'waaaaaah' });

// mango.gainXp(1000);
// console.log(mango); // Hero {name: 'Mango', xp: 1100}

// console.log('mango.__proto__:', mango.__proto__); //  mango.__proto__: Hero {constructor: ƒ}
// console.log(mango.__proto__ === Warrior.prototype); // true
// console.log('Warrior.prototype:', Warrior.prototype); // Warrior.prototype: Hero {constructor: ƒ}
// console.log(Warrior.prototype.__proto__ === Hero.prototype); //true

// class Mage extends Hero {
//   constructor({ spells = 'spells', ...rest } = {}) {
//     super(rest);
//     this.spells = spells;
//   }
// }

// class Healer extends Mage {
//   constructor({ spellBook, ...rest }) {
//     super(rest);
//     this.spellBook = spellBook;
//   }
// }

// const pear = new Healer({ name: 'Pear', xp: 200, spells: 'magic', spellBook: 'Light magic' });

// console.log(pear);
