// ========================для прикладу 1 (repeta-1) пошук елемента==============================
// const navLiEl = document.querySelector('li');
// console.log(navLiEl); // перший li
// const navItemEl = document.querySelector('.nav__item');
// console.log(navItemEl); // перший item
// const exampleNullEl = document.querySelector('.qwerty');
// console.log(exampleNullEl); // null

// const navListEl = document.querySelector('.nav__list');
// console.log(navListEl); // ul

// const navItemsEl = navListEl.querySelectorAll('.nav__item');
// console.log(navItemsEl); // NodeList(3) [li.nav__item, li.nav__item, li.nav__item]

// const navLinksEl = document.querySelectorAll('.nav__link');
// console.log(navLinksEl); // NodeList(3) [a.nav__link, a.nav__link, a.nav__link]

// const exempleEl = document.querySelectorAll('.nav__lllllllll');
// console.log(exempleEl); // NodeList [] - не знайдено жодного елемента з таким селектором

// ========================для прикладу 2 (repeta-1) пошук елемента==============================
// прикладтого, коли виконується код (після побудови DOM-дерева), за умови натискання  на кнопку
// const magicBtn = document.querySelector('.btn-magic');

// magicBtn.addEventListener('click', () => {
//   const navListEl = document.querySelector('.nav__list');
//   console.log(navListEl);

//   const navItemsEl = navListEl.querySelectorAll('.nav__item');
//   console.log(navItemsEl);

//   const navLinksEl = document.querySelectorAll('.nav__link');
//   console.log(navLinksEl);
// });

// ========================для прикладу 3 (repeta-1) пошук елемента та зміна==============================
// const imgEl = document.querySelector('.hero__img');
// console.log(imgEl);

// imgEl.src = 'https://placeimg.com/320/480/animals';
// console.log(imgEl.src);

// зміни по кліку========================================
// const magicBtn = document.querySelector('.btn-magic');

// magicBtn.addEventListener('click', () => {
//   const imgEl = document.querySelector('.hero__img');

//   imgEl.src = 'https://placeimg.com/320/480/animals';

//   imgEl.alt = 'Нова картинка';

//   console.log(imgEl);
// });

// зміна hero__title====================================
// const heroTitleEl = document.querySelector('.hero__title');
// console.log(heroTitleEl); // <h1 class="hero__title">Все про місце сили</h1>
// console.log(heroTitleEl.textContent); //  Все про місце сили

// heroTitleEl.textContent = 'Цей заголовоя зміненно за допомогою js';
// console.log(heroTitleEl.textContent); // Цей заголовоя зміненно за допомогою js

// ========================для прикладу 4 (repeta-1) data-атрибути==============================
// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions); // всі кнопки  в  actions
// console.log(actions[0].dataset.action); // значення data-action у першої кнопки - add
// console.log(actions[1].dataset.action); // значення data-action у другої кнопки - remove
// console.log(actions[2].dataset.action); // значення data-action у третьої кнопки - edit

// // або
// console.log(actions[0].getAttribute('data-action')); // add

// const magicBtn = document.querySelector('.btn-magic');
// magicBtn.addEventListener('click', () => {
//   const inputEl = document.querySelector('.js-input');
//   console.log(inputEl.value); //те, що введено
//   inputEl.value = 'те, що змінено за допомогою JS';
//   console.log(inputEl.value);
// });

// ========================для прикладу 5 (repeta-1) робота зі стилями==============================
// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// navEl.classList.add('added-class', 'qwerty'); // додали класи
// navEl.classList.remove('added-class'); // клас added-class видалено
// navEl.classList.toggle('is-hidden'); //  додано класс is-hidden, оскільки він відсутній
// console.log(navEl.classList);

// const magicBtn = document.querySelector('.btn-magic');

// magicBtn.addEventListener('click', () => {
//   navEl.classList.toggle('is-hidden'); // видалено клас is-hidden, оскільки він є, оп кліку на кнопку magicBtn
// });

// navEl.classList.replace('qwerty', 'change-class'); // змінюємо ім'я класу
// console.log(navEl.classList.contains('change-class')); // чи є клас, з такою назвою, повертає буль

// пошук елемента за href===============================
// const currentPageUrl = '/portfolio';
// const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
// console.log(linkEl);

// const currentPageUrl = '/contacts';
// const link2El = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
// console.log(link2El);

// link2El.classList.add('site-nav__link--current');

// ========================для прикладу 6 (repeta-1) навігація по DOM==============================
// const navEl = document.querySelector('.site-nav');
// console.log(navEl);

// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);

// const lastNavItemEl = navEl.lastElementChild;
// console.log(lastNavItemEl);

// console.log(navEl.children); // HTMLCollection(3) [li.site-nav__item, li.site-nav__item, li.site-nav__item]

// console.log(navEl.children[1]); // другий елемент в списку дітей

// ========================для прикладу 7 (repeta-1) створення елемента==============================
// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Створили заголовок через JS';
// console.log(titleEl);
// document.body.appendChild(titleEl); // додаємо елемент до body - буде після всіх дітей body (останньою дитиною)

// ============================================
// const imgEl = document.createElement('img');
// imgEl.src = 'https://placeimg.com/320/480/animals';
// imgEl.alt = 'picture';
// imgEl.width = '120';

// =============================================
// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Ціни';
// navLinkEl.href = '/price';

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');
// navItemEl.appendChild(navLinkEl);

// const siteNavEl = document.querySelector('.site-nav');

// додає після усіх дітей==================================
// siteNavEl.appendChild(navItemEl);

// додає перед усіма дітьми================================
// siteNavEl.insertBefore(navItemEl, siteNavEl.firstElementChild);

// додає перед останньою дитиною============================
// siteNavEl.insertBefore(navItemEl, siteNavEl.lastElementChild);

// додає на друге місце(пред другим єлементом)==============
// siteNavEl.insertBefore(navItemEl, siteNavEl.children[1]);

// додаємо 2 елементи в hero
// const heroEl = document.querySelector('.hero');
// heroEl.append(titleEl, imgEl);

// ========================для прикладу 8 (repeta-1) створення колекції==============================
