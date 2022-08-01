// ===========================приклад 1===========================
// створюємо динамічний список(варіант 1)
// const names = ['Bobby', 'Mark', 'Ted'];
// const ulEl = document.createElement('ul');

// names.forEach(name => {
//   const liEl = document.createElement('li');

//   liEl.textContent = name;

//   ulEl.appendChild(liEl);
// });

// console.log(ulEl);

// document.querySelector('body').appendChild(ulEl);

// створюємо динамічний список(варіант 2)====================
// const names = ['Bobby', 'Mark', 'Ted'];
// const ulEl = document.createElement('ul');
// const list = names.map(name => `<li class="item">${name}</li>`).join('');

// ulEl.insertAdjacentHTML('afterbegin', list);
// document.querySelector('body').appendChild(ulEl);

// створюємо динамічний список(варіант 3)====================
// const names = ['Bobby', 'Mark', 'Ted'];
// const ulEl = document.createElement('ul');
// const list = names.map(name => `<li class="item">${name}</li>`);

// ulEl.insertAdjacentHTML('afterbegin', list.join(''));
// document.querySelector('body').appendChild(ulEl);

// ===========================приклад 2===========================
//пояснення до функції
// g - означає глобал(всі елементи !), без нього видалено буде лише перший співпавшийю Фактично це replaceAll
// function removeExclamationMarks(s) {
//   return s.replace(/!/g, '');
// }

// console.log(removeExclamationMarks('!!!hello!!!!!')); // hello

//пояснення до функції============================================
// мета - замінити всі l(будь-якого регістру на t)
// HEttO wortd - має бути
// gi  - g(глобал), i(ignore - ігнорувати регістри)
// function removeExclamationMarks(s) {
//   return s.replace(/l/gi, 't');
// }

// console.log(removeExclamationMarks('HELLO world')); // HEttO wortd
