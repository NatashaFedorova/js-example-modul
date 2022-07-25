// ======================Приклад - 1. Метод addEventListener()=========================
// const btn = document.querySelector('.btn');

// const handleClick = () => {
//   console.log('Button was clicked');
// };

// btn.addEventListener('click', handleClick);

// ======================Приклад - 2. Метод addEventListener()=========================
// const singleBtn = document.querySelector('#single');
// const handleClick = () => {
//   console.log('click event listener callback');
// };
// singleBtn.addEventListener('click', handleClick);

// const multiBtn = document.querySelector('#multiple');
// const firstCallback = () => {
//   console.log('First callback');
// };

// const secondCallback = () => {
//   console.log('Second callback');
// };

// const thirdCallback = () => {
//   console.log('Third callback');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

// ======================Приклад - 3. Метод removeEventListener()=========================
// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

// ======================Приклад - 4. Ключове слово this=========================
// const mango = {
//   username: 'Mango',
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector('.js-btn');

// // ✅ Працює
// mango.showUsername();

// // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// // btn.addEventListener('click', mango.showUsername); // не працює

// // ✅ Не забувайте прив'язувати контекст методів об'єкта
// btn.addEventListener('click', mango.showUsername.bind(mango));

// =========================Приклад - 5. Об'єкт події==============================
// const button = document.querySelector('.button');
// const handleClick = event => {
//   console.log(event);
// };

// button.addEventListener('click', handleClick);

// =========================Приклад - 6. Об'єкт події==============================
// const button = document.querySelector('.btn');
// const handleClick = event => {
//   console.log('event:', event); // event: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
//   console.log('event type:', event.type); // event type: click
//   console.log('currentTarget:', event.currentTarget); // currentTarget:  <button type="button" class="btn">Click me</button>
// };

// button.addEventListener('click', handleClick);

// =========================Приклад - 7. Об'єкт події==============================
// const form = document.querySelector('.register-form');
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// =========================Приклад - 8. Об'єкт події==============================
// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

// ====================Приклад - 8. Властивості key і code=========================
// document.addEventListener('keydown', event => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });

// ====================Приклад - 9. Властивості key і code=========================
// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector('.log-list');
// let keypressCounter = 1;

// document.addEventListener('keydown', logMessage);
// document.addEventListener('keyup', logMessage);
// document.addEventListener('click', reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//     </div>`;

//   logList.insertAdjacentHTML('afterbegin', markup);

//   if (type === 'keyup') {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = '';
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// ====================Приклад - 10. Властивості key і code=========================
// document.addEventListener('keydown', event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
//     console.log('«Ctrl + s» or «Command + s» combo');
//   }
// });

// =========================Приклад - 11. Подія submit===============================
// const form = document.querySelector('.form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// =========================Приклад - 12. Подія change===============================
// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// setOutput();

// select.addEventListener('change', setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// =========================Приклад - 13. Подія change===============================
