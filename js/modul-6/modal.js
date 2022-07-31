// ==============================МОДАЛКА======================

// 1. Відкрити та закрити по кнопці: onOpenModal, onCloseModal
// 2. Закрити по кліку в бекдроп: onBackdropClick
// 3. Закрити по ESC: onEscapeKeypress

// В CSS є клас show-modal, який необхідно додавати на body при відкритті модалки

// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// };

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

// function onOpenModal() {
//   window.addEventListener('keydown', onEscapeKeypress); //  створення слухача на закриття модалки по ESC
//   document.body.classList.add('show-modal');
// }

// function onCloseModal() {
//   window.removeEventListener('keydown', onEscapeKeypress); // зняття слухача на закриття модалки по ESC
//   document.body.classList.remove('show-modal');
// }

// Закрити по кліку в бекдроп==============
// function onBackdropClick(event) {
//   console.log(event);
//   console.log(event.currentTarget); // об'єкт, який зловив поточну подію, оскільки він слухач події
//   console.log(event.target); // цільовий елемент, на якому безпосередньо здійснилася подія (на що клацнули, при закритті модалки)
//   if (event.currentTarget === event.target) {
//     onCloseModal();
//   }
// }

// закриваємо модалку по ESC===============
// function onEscapeKeypress(event) {
//   console.log(event.code);

//   const ESC_KEY_CODE = 'Escape';
//   if (event.code === ESC_KEY_CODE) {
//     onCloseModal();
//   }
// }
