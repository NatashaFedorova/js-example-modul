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

// ===================для прикладу 3 (repeta-2) подія inputs та патерн 'об'єкт посилань'========================
// можна записати так(нижче)
// const inputEl = document.querySelector('.js-input');
// const nameLabelEl = document.querySelector('.js-button > span');
// const licenseEl = document.querySelector('.js-license');
// const btnEl = document.querySelector('.js-button');

// а можна за допомогою патерну 'об'єкт посилань'(нижче)
// const refs = {
//   inputEl: document.querySelector('.js-input'),
//   nameLabelEl: document.querySelector('.js-button > span'),
//   licenseEl: document.querySelector('.js-license'),
//   btnEl: document.querySelector('.js-button'),
// };

// refs.inputEl.addEventListener('focus', onInputFocus);
// refs.inputEl.addEventListener('blur', onInputBlur);
// refs.inputEl.addEventListener('change', onInputChange);
// refs.inputEl.addEventListener('input', onLicenseChange);

// function onInputFocus() {
//   console.log('Інпут отримав фокус - подія focus');
// }

// function onInputBlur() {
//   console.log('Інпут втратив фокус - подія blur');
// }

// function onInputChange(event) {
//   console.log(event.currentTarget.value); // те, що введено в input
// }

// function onLicenseChange(event) {
//   console.log(event.currentTarget.value);
// }

// ===================для прикладу 4 (repeta-2) подія inputs та патерн 'об'єкт посилань'========================
// задача - текст введенний в input мє відображатися в  span
// const refs = {
//   inputEl: document.querySelector('.js-input'),
//   nameLabelEl: document.querySelector('.js-button > span'),
//   licenseCheckboxEl: document.querySelector('.js-license'),
//   btnEl: document.querySelector('.js-button'),
// };

// refs.inputEl.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   console.log(event.currentTarget.value); // те, що введено в input
//   refs.nameLabelEl.textContent = event.currentTarget.value;
// }

// refs.licenseCheckboxEl.addEventListener('change', onLicenseCheckboxChange);

// function onLicenseCheckboxChange(event) {
//   console.log(event.currentTarget.checked); // містить буль (підтвердженій чи ні сheckbox)
//   console.log('refs.btnEl.disabled: ', refs.btnEl.disabled); // refs.btnEl.disabled:  true // це буль - вимкнена чи ні кнопка

//   refs.btnEl.disabled = !event.currentTarget.checked; //кнопка вимкнена, коли  сheckbox не вибрано
// }

// ===================для прикладу 5 (repeta-2) подія клавіатури========================
// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keydown', onKeyprees); // для прикладу
// window.addEventListener('keypress', onKeyprees);
// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeyprees(event) {
//   console.log('event: ', event);
//   console.log('event key: ', event.key);
//   console.log('event code: ', event.code);

//   refs.output.textContent += event.key;
// }

// function onClearOutput() {
//   refs.output.textContent = '';
// }

// ===================для прикладу 5 (repeta-2) події миші========================
// mouseenter та mouseleave - аналог ховера
// mouseover та mouseout - схоже с поперередніми, але не розповсюджується на дітей
// mousemove(chatty event - балакуча подія)

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add('box--active');
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove('box--active');
// }

// function onMouseMove(event) {
//   console.log(event);
// }
