// =====================JSON.stringify()======================
// const user = {
//   name: 'Mango',
//   age: 2,
// };

// console.log(JSON.stringify(user)); // перетворюємо в строку в формат JSON

// =====================JSON.parce()======================
// const saveUserData = '{"name":"Mango","age":2}';

// console.log(JSON.parse(saveUserData)); // {name: 'Mango', age: 2} - це об'єкт

// =====================localStorage======================
// setItem - внести зміни
// getItem(key) - показати значення по ключу

// console.log(localStorage); // Storage {my-data: '{"name":"Mango","age":2}', length: 1}

// localStorage.setItem(
//   'my-data',
//   JSON.stringify({
//     name: 'Mango',
//     age: 2,
//   })
// );

// console.log(localStorage.getItem('my-data')); //{"name":"Mango","age":2}

// const saveData = localStorage.getItem('my-data');
// const parcedData = JSON.parse(saveData);

// console.log('saveData:', saveData);
// console.log('parcedData:', parcedData);

// ================== Задача 1============================
const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();

  console.log('Відправляємо форму');

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(e) {
  const message = e.currentTarget.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);

  if (savedMsg) {
    refs.textarea.value = savedMsg;
  }
}
