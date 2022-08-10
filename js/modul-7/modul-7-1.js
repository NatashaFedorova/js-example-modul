// ======================================приклад 1=====================================================
// event.target - цільовий вихідний елемент
// event.currentTarget - поточний елемент, на слухачі якого впіймали подію
// const refs = {
//   parent: document.querySelector('#parent'),
//   child: document.querySelector('#child'),
//   descendant: document.querySelector('#descendant'),
// };

// function onParentClick(e) {
//   console.log('onParentClick');
//   console.log('onParentClick -> e.target', e.target);
//   console.log('onParentClick -> e.currentTarget', e.currentTarget);
// }

// function onChildClick(e) {
//   console.log('onChildClick');
//   console.log('onChildClick -> e.target', e.target);
//   console.log('onChildClick -> e.currentTarget', e.currentTarget);
// }

// function onDescendantClick(e) {
//   console.log('onDescendantClick');
//   console.log('onDescendantClick -> e.target', e.target);
//   console.log('onDescendantClick -> e.currentTarget', e.currentTarget);
// }

// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.descendant.addEventListener('click', onDescendantClick);

// ==============================приклад 2 патерн "делегування подій", фільтр цілі кліка=======================================
// const refs = {
//   container: document.querySelector('.js-container'),
//   addBtn: document.querySelector('.js-add-btn'),
// };
// let labelCounter = 6;

// function onClick(e) {
// console.log('onClick -> e.target.textContent:', e.target.textContent); // виводиться текст кнопок - Кнопка 1 // Кнопка 2..

// // фультр цілі кліка (нижче) - логіка від протилежного(якщо умова не виконана, далі код не виконується  - виходимо із функції)
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   console.log('onClick');
//   console.log('onClick -> e.target', e.target);
//   console.log('onClick -> e.currentTarget', e.currentTarget);
//   console.log('onClick -> e.target.textContent:', e.target.textContent);
// }

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   refs.container.appendChild(btn);
//   labelCounter += 1;
// }

// refs.container.addEventListener('click', onClick);
// refs.addBtn.addEventListener('click', onAddBtnClick);

// ==============================приклад 3 Делегування. Майстерня: теги======================================
// Делегуання:
//     - один із багатьох;
//     - Set.

// const tagsList = document.querySelector('.js-tags');
// let selectedTag = null;

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__button--active');

//   if (currentActiveBtn) {
//     currentActiveBtn?.classList.remove('tags__button--active');
//   }

// // аналог if(currentActiveBtn)... з однією умовою
// // currentActiveBtn?.classList.remove('tags__button--active');

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add('tags__button--active');

//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

// tagsList.addEventListener('click', onTagsContainerClick);

// ==============================приклад 4 Делегування. Майстерня: теги======================================
// Делегуання:
//     - декілька із багатьох;
//     - Set.

// const tagsList = document.querySelector('.js-tags');

// // для варіанта 1
// // let selectedTag = [];

// для варіанта 2
// let selectedTag = new Set();

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

// // як варіант - 1, але є краще
// // e.target.classList.toggle('tags__button--active');
// // selectedTag.push(e.target.dataset.value);

// варіант 2 - кращій
// const btn = e.target;
// console.log('btn', btn);

// const tag = btn.dataset.value;
// console.log('tag', tag);

// const isActive = btn.classList.contains('tags__button--active');
// console.log('isActive', isActive);

// тернарним оператором замінити не можна, буде працювати, але буде погана якість коду
//   if (isActive) {
//     selectedTag.delete(tag);
//   } else {
//     selectedTag.add(tag);
//   }

//   btn.classList.toggle('tags__button--active');

//   console.log(selectedTag);
// }

// tagsList.addEventListener('click', onTagsContainerClick);

// ==============================приклад 5 Делегування. Мастерская: колорпикер======================================
// <div class="color-card">
//   <div
//     class="color-swatch"
//     data-hex="${hex}"
//     data-rgb="${rgb}"
//     style="background-color: ${hex}"
//   ></div>
//   <div class="color-meta">
//     <p>HEX: ${hex}</p>
//     <p>RGB: ${rgb}</p>
//   </div>
// </div>

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#00bcd4', rgb: '0,188,212' },
//   { hex: '#009688', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   { hex: '#ff9800', rgb: '255,152,0' },
//   { hex: '#795548', rgb: '121,85,72' },
//   { hex: '#607d8b', rgb: '96,125,139' },
// ];

// const paletteContainer = document.querySelector('.js-palette');
// const cardMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardMarkup);
// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `<div class="color-card">
//       <div
//         class="color-swatch"
//         data-hex="${hex}"
//         data-rgb="${rgb}"
//         style="background-color: ${hex}"
//       ></div>
//       <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//       </div>
//     </div>`;
//     })
//     .join('');
// }

// нижче функція не читабельна
// function onPaletteContainerClick(e) {
//   const isColorSwatchEl = e.target.classList.contains('color-swatch');
//   if (!isColorSwatchEl) {
//     return;
//   }

//   const currentActiveCard = document.querySelector('.color-card.is-active');
//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }

//   const swatchEl = e.target;
//   const parentColorCardEl = swatchEl.closest('.color-card');
//   parentColorCardEl.classList.add('is-active');

//   document.body.style.backgroundColor = swatchEl.dataset.hex;
// }

// робимо функцію більш читабельною
// function onPaletteContainerClick(e) {
//   const isColorSwatchEl = e.target.classList.contains('color-swatch');
//   if (!isColorSwatchEl) {
//     return;
//   }

//   const swatchEl = e.target;
//   const parentColorCardEl = swatchEl.closest('.color-card');

//   removeActiveCardClass();
//   addActiveCardClass(parentColorCardEl);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');
//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }
