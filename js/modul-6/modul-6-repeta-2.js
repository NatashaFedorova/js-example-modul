// ========================для прикладу 1 (repeta-2)=============================
/*
 * Правила іменування колбек-функцій для слухача
 *   - handle*: handleEvent або handleSubjectEvent (н., handleTargetBtnClick);
 *   - *Handler: eventHandler або subjectEventHandler (н., targetBtnClickHandler);
 *   - on*: onEvent або onSubjectEvent (н., onTargetBtnClick).
 */

// приклад іменування колбек-функцій===========================
// targetBtn.addEventListener('click', handleTargetBtnClick);
// function handleTargetBtnClick() {
//   console.log('КЛІК');
// }

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// приклад 1=====================================
// targetBtn.addEventListener('click', () => {
//   console.log('КЛІК');
// });

// приклад 2=====================================
// addListenerBtn.addEventListener('click', () => {
//   console.log('Вішаємо слухача події на цільову кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', () => {
//   console.log('Знімаємо слухача події з цільової кнопк');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// функція нижче буде виконана при кліці на цільову кнопку
// function onTargetBtnClick() {
//   console.log('КЛІК по цільовій кнопці');
// }

// ========================для прикладу 2 (repeta-2) подія-submit форми=============================
// const formEl = document.querySelector('.js-register-form');

// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault(); // це  відміна дій по замовчуванню

// console.dir(event.currentTarget.elements.subscription.value); // basic - те, що було вибрано

// варіант запису 2=============================
// const formElements = event.currentTarget.elements;
// console.log(formElements);

// const mail = formElements.email.value;
// const password = formElements.password.value;
// const subscription = formElements.subscription.value;

// const formData = {
//   mail,
//   password,
//   subscription,
// };
// console.log(formData);

// варіант запису 3 (FormData - клас)=============================
// використовується для роботи з великими формами
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     console.log('onFormSubmit -> name: ', name);
//     console.log('onFormSubmit -> value: ', value);
//   });
// }

// ========================для прикладу 3 (repeta-2) подія inputs=============================
