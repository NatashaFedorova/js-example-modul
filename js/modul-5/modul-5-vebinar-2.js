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

// ===============================prototype===============================
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// class Doctor extends Human {
//   heal() {
//     console.log('I can heal');
//   }
// }

// const ted = new Human('Ted', 18);
// console.log(ted); // Human {name: 'Ted', age: 18}

// const logan = new Doctor('Logan', 30);
// console.log(logan); // Doctor {name: 'Logan', age: 30}

// ======================closure - замикання=========================
// function Counter(x) {
//   return function () {
//     console.log(x++);
//   };
// }
// const counter1 = new Counter(10);

// counter1();
// counter1();
// counter1();
// counter1();

// counter1.x = 50;

// counter1();
// counter1();
// counter1();

// console.log(counter1);
// // console.log(counter1.x);

// ======================closure - замикання=========================

// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   say() {
//     return `Hello, my name is ${this.name}, I like travelling`;
//   }
// }

// class Men extends Human {
//   constructor(name) {
//     super(name)
//   }
//   // Берем метод say у родителя.
// }

// class Coder extends Human {
//   constructor(name) {
//     super(name)
//   }

//   say() {
//     // Переопределяем метод родителя say для отображения нового значения.
//     return `Hello, my name is ${this.name}, I like coding`;
//   }
// }

// const alex = new Men('Alex');
// const leo = new Coder('Leo');

// alex.say() // "Hello, my name is Alex, I like travelling"
// leo.say() // "Hello, my name is Leo, I like coding"

// =============================================Задача 1==============================================
// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// email - почта, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// topics - массив тем на которых специализируется блоггер
// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку:
//  User ${ почта } is ${ возраст } years old and has ${ кол - во постов } posts.

// Добавь метод updatePostCount(value), который в параметре value принимает количество постов
//  которые нужно добавить пользователю.

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics } = {}) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     return (this.numberOfPosts += value);
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts.
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts.

// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts.
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts.

// =============================================Задача 2=============================================
// Напиши класс Storage который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

// мой вариант
//   removeItem(item) {
//     const idx = this.items.findIndex(el => el === item);
//     return this.items.splice(idx, 1);
//   }

// рішення - популярний підхід для видалення елемента
//   removeItem(name) {
//     this.items = this.items.filter(item => item !== name);
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// =============================================Задача 3=============================================
// Напиши класс User который создаёт объект со свойствами login и email.
// Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class User {
//   #login;
//   #email;
//   constructor({ login, email } = {}) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// console.log(mango.email); // mango@dog.woof
// mango.email = 'mango@supermail.com';
// console.log(mango.email); // mango@supermail.com

// console.log(poly.email); // poly@mail.com
// poly.email = 'poly@supermail.com';
// console.log(poly.email); // poly@supermail.com

// =============================================Задача 4=============================================
// Напиши класс Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority.
// Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   constructor(items = []) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items = this.items.filter(item => item.text !== text);
//   }

//   updatePriority(text, newPriority) {
//     this.items = this.items.map(item =>
//       item.text === text ? { ...item, priority: newPriority } : item
//     );
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// =============================================Задача 5=============================================
// Напишите класс Toggle который принимает объект настроек { isOpen: boolean }
// и объявляет одно свойство on - состояние вкл / выкл(true / false).
// По умолчанию значение свойства on должно быть false.

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
