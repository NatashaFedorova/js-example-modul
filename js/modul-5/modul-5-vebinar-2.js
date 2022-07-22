// ==================================constructor=================================
// function Human(name, age) {
//   this.name = name;
//   this.age = age;

//   return this;
// }
// нище приклад без конструктора
// const bobby = Human.call({}, 'Bobby', 25);

// console.log(bobby); // {name: 'Bobby', age: 25}

// нище приклад без конструктора
// const bobby = new Human('Bobby', 25);
// const david = new Human('David', 18);
// const alex = new Human('Alex', 20);

// console.log(bobby); // Human {name: 'Bobby', age: 25}
// console.log(david); // Human {name: 'David', age: 18}
// console.log(alex); // Human {name: 'Alex', age: 20}

// ==================================prototype=================================
// class Human {
//   constructor({ name = 'Name', age = 0 } = {}) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Doctor extends Human {
//   constructor({ specialty = 'doctor', ...rest } = {}) {
//     super(rest);
//     this.specialty = specialty;
//   }
// }

// const bobby = new Human({ name: 'Bobby', age: 25 });
// const david = new Human({ name: 'David', age: 18 });
// const alex = new Human({ name: 'Alex', age: 20 });

// const house = new Doctor({ name: 'dr. House', age: 50, specialty: 'neurosurgeon' });

// console.log(bobby); // Human {name: 'Bobby', age: 25}
// console.log(david); // Human {name: 'David', age: 18}
// console.log(alex); // Human {name: 'Alex', age: 20}

// console.log(house); // Doctor {name: 'dr. House', age: 50, specialty: 'neurosurgeon'}

// ===============================інкапсуляція===============================
// class Human {
//   #age = 0;
//   constructor({ name = 'Name', age = 0 } = {}) {
//     this.name = name;
//     this.#age = age;
//   }

//   get age() {
//     return this.#age;
//   }

//   set age(newAge) {
//     this.#age = newAge;
//   }
// }

// const ted = new Human({ name: 'Ted', age: 24 });
// console.log(ted); // Human {name: 'Ted', #age: 24}

// console.log(ted.#age); // Uncaught SyntaxError: Private field '#age' must be declared in an enclosing class

// ted.age = 30;
// console.log(ted); // Human {name: 'Ted', #age: 30}

// ===============================геттери та сеттери===============================
// class Account {
//   #balance = 0;

//   constructor(balance) {
//     this.#balance = balance;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   set balance(newBalance) {
//     if (newBalance < 0) return;
//     this.#balance = newBalance;
//   }
// }
// const deposit = new Account(1000);
// console.log(deposit.balance);

// deposit.balance = 2000;
// console.log(deposit.balance);

// deposit.balance = -3000;
// console.log(deposit.balance);
