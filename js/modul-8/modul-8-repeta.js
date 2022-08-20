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
// const STORAGE_KEY = 'feedback-msg';

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
// };

// refs.form.addEventListener('input', onFormInput);
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);

// populateTextarea();

// function onFormSubmit(e) {
//   e.preventDefault();

//   console.log('Відправляємо форму');

//   e.currentTarget.reset();

//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(e) {
//   const message = e.currentTarget.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMsg = localStorage.getItem(STORAGE_KEY);

//   if (savedMsg) {
//     refs.textarea.value = savedMsg;
//   }
// }

// ========================== Задача 1 з доповненням==============================
// у випадках коли треба відслідковувати значення більше ніж  в 1 полі форми
const STORAGE_KEY = 'feedback-msg';

const formData = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

populateForm();

function populateForm() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

  console.log(savedForm);

  // if (savedForm) {
  //   refs.form.value = savedForm;
  // }
}

function onFormInput(e) {
  console.log(e.target.name);

  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log('Відправляємо форму');

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}
