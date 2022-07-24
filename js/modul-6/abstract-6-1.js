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

// text.classList.toggle("is-hidden"); // will add is-hidden class
// text.classList.toggle("is-hidden"); // will remove is-hidden class

// ============================Приклад - 6. Властивість style==========================
// const text = document.querySelector('.section__text');
// text.style.color = 'teal';
// text.style.fontSize = '30px';
// text.style.backgroundColor = 'yellow';

// console.log(text.style); // CSSStyleDeclaration {0: 'color', 1: 'font-size', 2: 'background-color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

// ===============================Приклад - 7. Атрибути================================
// const image = document.querySelector('.image');

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, class: class, src: src, alt: alt, length: 3}

// console.log(image.hasAttribute('src')); // true

// console.log(image.getAttribute('src')); // https://placeimg.com/400/200/nature
// console.log(image.getAttribute('class')); // image

// image.setAttribute('width', '240');
// console.log(image.hasAttribute('width')); // true
// console.log(image.getAttribute('width')); // 240

// image.removeAttribute('width');
// console.log(image.hasAttribute('width')); // false

// ===============================Приклад - 8. data - атрибути================================
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // save

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // close

// ===============================Приклад - 9. data - атрибути================================
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // save

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // close

// const dishes = document.querySelectorAll('.dishes > li');

// console.log(dishes); // NodeList(4) [li, li, li, li]

// dishes.forEach(dish => {
//   console.log(dish.dataset.id); // консолит значение data-id
// });

// ==============================Приклад - 10. Створення елемента=============================
// const heading = document.createElement('h1');
// console.log(heading); // <h1></h1>

// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement('img');
// console.log(image); // <img>

// image.src = 'https://placeimg.com/640/480/nature';
// image.alt = 'photo';
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="photo">

// const text = document.createElement('p');
// text.textContent =
//   'This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.';
// text.setAttribute('class', 'text');
// console.log(text); // <p class="text">This is a paragraph...</p>

// ==============================Приклад - 11. Додавання елемента=============================
// const list = document.querySelector('.username');

// const lastItem = document.createElement('li');
// lastItem.textContent = 'Pear';
// list.append(lastItem);

// const firstItem = document.createElement('li');
// firstItem.textContent = 'Apple';
// list.append(firstItem);

// const title = document.createElement('h2');
// title.textContent = 'Example of adding an element';
// list.before(title);

// const text = document.createElement('p');
// text.textContent = 'This is a paragraph. This is a paragraph.';
// list.after(text);
// text.setAttribute('class', 'text');

// const image = document.createElement('img');
// image.src = 'https://placeimg.com/640/480/animals';
// image.alt = 'photo';
// image.width = '240';
// text.after(image);

// ==============================Приклад - 12. Видалення елемента=============================
// const articleText = document.querySelector('.article__text');
// articleText.remove();

// const articleLink = document.querySelector('.article__link');
// articleLink.remove();

// ======================Приклад - 13. Властивість innerHTML. Читання=========================
// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article__title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

// ======================Приклад - 14. Властивість innerHTML. Зміна=========================
// const title = document.querySelector('article .title');
// title.innerHTML = 'Beautiful <span class="part-title">Ukraine</span>';

// const partTitle = document.querySelector('.part-title');
// partTitle.style.color = 'red';

// const text = document.querySelector('article .text');
// text.innerHTML = ''; // параграф видалено

// ======================Приклад - 15. Властивість innerHTML. Зміна=========================
// const tehnologies = ['HTML', 'JS', 'Node', 'CSS', 'React'];
// const list = document.querySelector('.list');

// const markup = tehnologies.map(tehnology => `<li class="item">${tehnology}</li>`).join('');
// console.log(markup);

// list.innerHTML = markup;

// ======================Приклад - 16. Властивість innerHTML. Зміна=========================
// const article = document.querySelector('.article');
// const htmlString = `<p class="text">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ullam excepturi, quaerat nam
//         vitae iure officia. Voluptates impedit distinctio placeat dolore in quidem porro cupiditate,
//         esse rerum a sint ipsa?
//       </p>
//       <a class="link" href="#">Read more...</a>`;

// помилка article.innerHTML = htmlString; - article перезапишеться та буде втрапчений

// article.innerHTML += htmlString;
// при такому записі  <p> та <a> будут додані після h2
// жодний тег не загубився

// ======================Приклад - 17. Метод insertAdjacentHTML()=========================
// const list = document.querySelector('.list');
// const newTehnologies = ['React', 'TypeScript', 'Node.js'];
// const markup = newTehnologies
//   .map(newTehnology => `<li class="list-item">${newTehnology}</li>`)
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');
