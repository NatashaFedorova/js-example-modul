// ===============================Спливання подій. Приклад 1==================================
// const refs = {
//   parent: document.querySelector('#parent'),
//   child: document.querySelector('#child'),
//   descendant: document.querySelector('#descendant'),
// };

// refs.parent.addEventListener('click', () => {
//   alert('Parent click handler');
// });

// refs.child.addEventListener('click', () => {
//   alert('Child click handler');
// });

// refs.descendant.addEventListener('click', () => {
//   alert('Descendant click handler');
// });

// ===============================Спливання подій. Приклад 2==================================
// const refs = {
//   parent: document.querySelector('#parent'),
// };

// refs.parent.addEventListener('click', () => {
//   console.log('event.target: ', event.target);

//   console.log('event.currentTarget: ', event.currentTarget);
// });

// ===============================Спливання подій. Приклад 3==================================
// stopImmediatePropagation() та event.stopPropagation()
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
//   alert(
//     'Батьківський обробник кліків. Це сповіщення не з’явиться при натисканні на Нащадок, подія сюди не потрапить!'
//   );
// });

// child.addEventListener('click', () => {
//   //   stopImmediatePropagation(); // запобігає спливанню, але й зупиняє обробку подій на поточному елементі.
//   //   event.stopPropagation(); // вставиля для кращого розуміння
//   alert(
//     'Дочірній обробник кліків. Це сповіщення не з’явиться при натисканні на Нащадок, подія сюди не потрапить!'
//   );
// });

// descendant.addEventListener('click', event => {
//   //   event.stopPropagation();
//   //   stopImmediatePropagation();
//   alert('Descendant click handler');
// });

// ===============================Палітра кольорів. Приклад 4==================================
// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   console.log(event.target.nodeName);

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRangomColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }
