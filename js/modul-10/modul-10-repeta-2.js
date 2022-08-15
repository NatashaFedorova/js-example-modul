// ============================Приклад 1. Chatty events. Throttle. Балакучі події===============================
// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// // функція onMouseMove викликається 1 раз 500 ms
// const throttledOnMouseMove = _.throttle(onMouseMove, 500);

// window.addEventListener('mousemove', throttledOnMouseMove);

// function onMouseMove(e) {
//   mouseMoveCbInvocationCounter += 1;

//   coordsOutputRef.textContent = `
//     Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//     x: ${e.clientX},
//     Y: ${e.clientY}
//     `;
// }

// ============================Приклад 2. Chatty events. Debounce. Балакучі події===============================
// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');

// let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 2000));
// function onInputChange(e) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `
//     Кількість викликів OnInputChange: ${inputCbInvocationCounter},
//     Значення: ${e.target.value}
//     `;
// }

// ==================================Приклад 3. Майстерня: фільтр (пошук)=====================================
// const tech = [
//   { label: 'HTML' },
//   { label: 'CSS' },
//   { label: 'JavaScript' },
//   { label: 'Node.js' },
//   { label: 'React' },
//   { label: 'Vue' },
//   { label: 'Next.js' },
//   { label: 'Mobx' },
//   { label: 'Redux' },
//   { label: 'React Router' },
//   { label: 'GraphQl' },
//   { label: 'PostgreSQL' },
//   { label: 'MongoDB' },
// ];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// };

// const listItemsMarkup = createListItemsMarkup(tech);
// populateList(listItemsMarkup);

// refs.input.addEventListener('input', _.debounce(onInputChange, 300));

// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onInputChange(e) {
//   const filter = e.target.value.toLowerCase();

//   const filteredItems = tech.filter(el => el.label.toLowerCase().includes(filter));

//   console.log(filteredItems);

//   const listItemsMarkup = createListItemsMarkup(filteredItems);

//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }

// ==================================Приклад 4. Майстерня: ледаче завантаження зображення=====================================
// const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// lazyImages.forEach(image => {
//   image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(e) {
//   console.log('Картинка загрузилась');
//   e.target.classList.add('appear');
// }

// ==================================Приклад 5. Бібліотека lazysizes=====================================
// const lazyImages = document.querySelectorAll('img[data-src]');

// lazyImages.forEach(image => {
//   image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(e) {
//   console.log('Картинка загрузилась');
//   e.target.classList.add('appear');
// }
