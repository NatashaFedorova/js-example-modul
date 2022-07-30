import products from '../../data/product.js';
import transaction from '../../data/transaction.js';
import transactionHistory from '../../data/transaction.js';

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

// ========================для прикладу 8 (repeta-1) створення колекції елементів==============================
// для кожного об'екта масива має бути сворена кнопка

// const colorPickerOptions = [
//   { label: 'red', color: '#ff0000' },
//   { label: 'green', color: '#008000' },
//   { label: 'blue', color: '#0000ff' },
//   { label: 'grey', color: '#808080' },
//   { label: 'pink', color: '#ffc0cb' },
//   { label: 'indigo', color: '#4b0082' },
// ];

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// застарілий спосіб====================================
// const elements = [];
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];

//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   elements.push(buttonEl);
// }
// console.log(elements);

// colorPickerContainerEl.append(...elements);

// застарілий спосіб====================================
// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   return buttonEl;
// });

// console.log(elements);

// colorPickerContainerEl.append(...elements);

// функція для створення розмітки colorPicker============

// const makeColorPickerContainerEl = options => {
//   return options.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     return buttonEl;
//   });
// };

// const elements = makeColorPickerContainerEl(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

// ========================для прикладу 9 (repeta-1) створення картки продукта==============================
// в картці має бути product__on-sale, product__not-available

// const product = {
//   name: 'Lorem',
//   description:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum earum blanditiis, ratione quod accusantium eligendi neque non dolores perferendis officiis? Deserunt officiis minus eligendi laborum consectetur, quia esse doloremque!',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

/*
<article class="product">
* <h2 class="product__name">Назва</h2>
* <p class="product__descr">Опис</p>
* <p class="product__price">Ціна:</p>
</article>
*/

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const productNameEl = document.createElement('h2');
// productNameEl.classList.add('product__name');
// productNameEl.textContent = product.name;

// const productDescriptionEl = document.createElement('p');
// productDescriptionEl.classList.add('product__descr');
// productDescriptionEl.textContent = product.description;

// const productPriceEl = document.createElement('p');
// productPriceEl.classList.add('product__price');
// productPriceEl.textContent = `Ціна: ${product.price} кредитов`;

// productEl.append(productNameEl, productDescriptionEl, productPriceEl);

// console.log(productEl);

// ========================для прикладу 10 (repeta-1) створення картки продукта==============================
//розкоментувари 1 строку в цьому файлі (імпорт массиву об'єктів products)
// console.log(products);

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const productNameEl = document.createElement('h2');
//   productNameEl.classList.add('product__name');
//   productNameEl.textContent = name;

//   const productDescriptionEl = document.createElement('p');
//   productDescriptionEl.classList.add('product__descr');
//   productDescriptionEl.textContent = description;

//   const productPriceEl = document.createElement('p');
//   productPriceEl.classList.add('product__price');
//   productPriceEl.textContent = `Ціна: ${price} кредитов`;

//   productEl.append(productNameEl, productDescriptionEl, productPriceEl);

//   return productEl;
// };

// const productCards = products.map(makeProductCard); // makeProductCard - це колбек-функція для кожного елемента, який перебирається
// console.log(productCards);

// const productsContainer = document.querySelector('.js-products');
// productsContainer.append(...productCards);

// ========================для прикладу 11 (repeta-1) парс строк=============================
// const titleEl = document.querySelector('.title');
// console.log(titleEl); // <h1 class="title">Заголовок <span>;)</span></h1>
// console.log(titleEl.textContent); // Заголовок ;)
// console.log(titleEl.innerHTML); // Заголовок <span>;)</span>

// презаписуємо варіант 1
// titleEl.innerHTML = 'qwertyuiio';
// console.log(titleEl); // <h1 class="title">qwertyuiio</h1>

// презаписуємо варіант 2
// titleEl.innerHTML = '<a href="#">Заголовок-посилання</a>';
// console.log(titleEl); // <h1 class="title"><a href="#">Заголовок-посилання</a></h1>

// очищуємо тег - кращий вариант очищенння
// titleEl.innerHTML = ''; // <h1 class="title"></h1>
// console.log(titleEl);

// додаємо  - ТАК НЕ РОБИТИ

// titleEl.innerHTML += 'Додана частина'; // <h1 class="title"></h1>
// console.log(titleEl);

// insertAdjacentHTML==========================================
// titleEl.insertAdjacentHTML('afterbegin', 'Доданий тект! ');
// console.log(titleEl); // <h1 class="title">Доданий тект! Заголовок <span>;)</span></h1>

// titleEl.insertAdjacentHTML('beforeend', ' Доданий тект!');
// console.log(titleEl); // <h1 class="title">Заголовок <span>;)</span> Доданий тект!</h1>

// const smileEl = document.querySelector('.title__smile');
// smileEl.insertAdjacentHTML('afterbegin', '<a href="#" class="title__link">посилання</a>');
// console.log(smileEl); // <h1 class="title">Доданий тект! Заголовок <span>;)</span></h1>

// ========================для прикладу 11 (repeta-1) таблиця транзакцій строк=============================
//розкоментувари 2 строку в цьому файлі (імпорт массиву об'єктів transactionsHistory)
console.log(transactionHistory);

// makeTransactionTableRowMarkup(переклад) - зробити розмітку рядка таблиці транзакцій
/*
 * <tbody>
 *   <tr>
 *     <td>ID транзакции</td>
 *     <td>Сумма</td>
 *     <td>Дата</td>
 *     <td>Кто</td>
 *     <td>Тип транзации</td>
 *     <td>Имя счёта</td>
 *     <td>Номер счёта</td>
 *   </tr>
 * </tbody>
 */

const makeTransactionTableRowMarkup = transaction => {
  const { id, amount, date, business, type, name, account } = transaction;
  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
   </tr>
 `;
};

const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join('');
console.log(makeTransactionTableRows);

const tableBodyEl = document.querySelector('.table__body');
tableBodyEl.insertAdjacentHTML('afterbegin', makeTransactionTableRows);
