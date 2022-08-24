// ============Метод window.setTimeout()=============================
// const logMessage = () => {
//   console.log('Лог при виклику callback-функції через 3 секунди');
// };

// console.log('до виклику setTimeout()');

// setTimeout(
//   x => {
//     console.log('x:', x);
//     console.log('1 - В середині callback-функція для setTimeout()');
//   },
//   2000,
//   5
// );

// setTimeout(
//   y => {
//     console.log('y:', y);
//     console.log('2- В середині callback-функція для setTimeout()');
//   },
//   1000,
//   40
// );

// console.log('після виклику setTimeout()');

// ============Очищення таймаута з clearTimeout(timeoutId)=============================
// const logger = time => {
//   console.log(`Лог через ${time} ms, тому що не відмінили таймаут`);
// };

// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId); // дізнаємося ID setTimeout

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

// =======================Метод setInterval()===============================
// const logger = time => console.log(`Лог кожні ${time} ms - ${Date.now()}`);

// console.log('до виклику setInterval()');

// setInterval(logger, 2000, 2000);

// console.log('після виклику setInterval()');

// =======================Метод clearInterval(timeoutId)===============================
// const logger = time => console.log(`Лог кожні ${time} ms - ${Date.now()}`);
// const intervalId = setInterval(logger, 2000, 2000);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearInterval(intervalId);
// }

// ===============================Задача 1=======================================
// const NOTIFICATION_DELAY = 3000;
// let timoutId = null;

// const refs = {
//   notification: document.querySelector('.js-alert'),
// };

// refs.notification.addEventListener('click', onNotificationClick);

// showNotification();

// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timoutId);
// }

// function showNotification() {
//   refs.notification.classList.add('is-visible');

//   timoutId = setTimeout(() => {
//     console.log('Закриваємо алерт автоматично');
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   refs.notification.classList.remove('is-visible');
// }

// ===============================Задача 2=======================================
