// ==============================Приклад - 1. Навігація по DOM============================
// console.log(document);

// const body = document.body;
// console.log(body);

// const section = body.firstElementChild;
// console.log(section);

// const paragraph = section.firstElementChild;
// console.log(paragraph);

// const link = paragraph.firstElementChild;
// console.log(link);

// const list = paragraph.nextElementSibling;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems); //HTMLCollection(5) [li, li, li, li, li]

// ============================Приклад - 2. Пошук елементів==============================
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.example-2__list');
// console.log(listWithClass);

// const menuItemsByTegName = document.querySelectorAll('li');
// console.log(menuItemsByTegName); // NodeList(4) [li.example-2__item, li.example-2__item, li.example-2__item, li]

// const menuItemsByClass = document.querySelectorAll('.example-2__item');
// console.log(menuItemsByClass); // NodeList(3) [li.example-2__item, li.example-2__item, li.example-2__item]

// const firstListItem = document.querySelector('.example-2__item');
// firstListItem.style.color = 'red';
// console.log(firstListItem);

// const navigationLink = document.querySelector('.link-nav');
// navigationLink.style.textDecoration = 'none';
// console.log(navigationLink); // посилення без підкреслення

//Cannot set properties of undefined (setting 'color') // при querySelectorAll - помилка
// const allItems = document.querySelectorAll('.example-2__item');
// allItems.style.color = 'teal';
// console.log(allItems);

// ============================Приклад - 3. Властивості та атрибути==========================
// const message = document.querySelector('#message');
// console.log(message.value); // Ввести коментар

// const activeLink = document.querySelector('.link-btn.active');
// console.log(activeLink.href); // http://127.0.0.1:5500/modul-6.html#

// const image = document.querySelector('.image');
// console.log(image.src); // https://placeimg.com/640/480/animals

// image.src = 'https://placeimg.com/640/480/tech'; // змінюємо посилання на картину

// ============================Приклад - 4. Властивість textContent==========================
// const titleText = document.querySelector('.article__title');
// console.log(titleText.textContent); // Welcome to Hawaii!

// const paragraphText = document.querySelector('.article__text');
// console.log(paragraphText.textContent); // текст "Lorem ipsum dolor..."

// ============================Приклад - 5. Властивість classList==========================
// const text = document.querySelector('#paragraph');

// console.log(text.classList); // DOMTokenList(3) ['section__text', 'text', 'orange', value: 'section__text text orange']

// console.log(text.classList.contains('text')); //true
// console.log(text.classList.contains('red')); // false

// text.classList.add('special');
// console.log(text.classList); // DOMTokenList(4) ['section__text', 'text', 'orange', 'special', value: 'section__text text orange special']

// text.classList.add('first', 'second', 'third');
// console.log(text.classList); //DOMTokenList(7) ['section__text', 'text', 'orange', 'special', 'first', 'second', 'third', value: 'section__text text orange special first second third']

// text.classList.remove('special');
// console.log(text.classList); //DOMTokenList(6) ['section__text', 'text', 'orange', 'first', 'second', 'third', value: 'section__text text orange first second third']

// text.classList.remove('second', 'first');
// console.log(text.classList); // DOMTokenList(4) ['section__text', 'text', 'orange', 'third', value: 'section__text text orange third']

// text.classList.toggle('third');
// console.log(text.classList); // DOMTokenList(3) ['section__text', 'text', 'orange', value: 'section__text text orange']
// // third - видалено, оскыльки був

// text.classList.toggle('example');
// console.log(text.classList); // DOMTokenList(4) ['section__text', 'text', 'orange', 'example', value: 'section__text text orange example']
// // example - додано клас, оскыльки не було

// text.classList.replace('orange', 'color');
// console.log(text.classList); //DOMTokenList(4) ['section__text', 'text', 'color', 'example', value: 'section__text text color example']
// // клас orange  змінили на клас color

// text.classList.forEach(cls => {
//   console.log(cls); // перебирає усі класи
// });
// section__text
// text
// color
// example

// ============================Приклад - 6. Властивість style==========================
// const text = document.querySelector('.section__text');
// text.style.color = 'teal';
// text.style.fontSize = '30px';
// text.style.backgroundColor = 'yellow';

// console.log(text.style); // CSSStyleDeclaration {0: 'color', 1: 'font-size', 2: 'background-color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

// ===============================Приклад - 7. Атрибути================================
