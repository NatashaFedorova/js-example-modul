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
// в файлі parcel-test

// ===============================Unix час=======================================
// const date = new Date();
// console.dir(date.getTime());

// ===================
// const date = new Date(3000);
// console.dir(date); // Thu Jan 01 1970 03:00:03 GMT+0300 (за східноєвропейським стандартним часом)

// ===================Різниця в часі=================
// new Date() - створює об'єкт для роботи з часом, з методами та властивостями
// const date1 = new Date();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date();
//   console.log('date1', date1); // минулий час
//   console.log('date2', date2); // поточна година

//   console.log('date2 -date1', date2 - date1); // різниця у часі - число в мілісекундах // date2 -date1 3008
// }, 3000);

// ===================
// const date1 = new Date().getTime();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date().getTime();
//   console.log('date1', date1); // минулий час
//   console.log('date2', date2); // поточна година

//   console.log('date2 - date1', date2 - date1); // різниця у часі - число в мілісекундах // date2 -date1 3008
// }, 3000);

// ===================
// Записуємо попередній приклад без зайвого коду, якщо потрібно просто час
// date1 та date2 це просто число, а не об'єкти, з методами та властивостями
// const date1 = Date.now();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = Date.now();
//   console.log('date1', date1); // минулий час
//   console.log('date2', date2); // поточна година

//   console.log('date2 - date1', date2 - date1); // різниця у часі - число в мілісекундах // date2 -date1 3008
// }, 3000);

// ===============================Задача 3. Таймер=======================================
// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTarget = Date.now();
//       const deltaTime = currentTarget - startTime;
//       const time = this.getTimeComponents(deltaTime);
//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     this.init();
//   }

//   getTimeComponents(time) {
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }
// const timer = new Timer({
//   onTick: updateClockface,
// });

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// // function getTimeComponents:
// //    - Принимает время в миллисекундах
// //    - Высчитывает сколько в них вмещается часов/минут/секунд
// //    - Возвращает обьект со свойствами hours, mins, secs
// //    - Адская копипаста со стека 💩

// //  function pad - Принимает число, приводит к строке и
// //  добавляет в начало 0 если число меньше 2 - х знаков

// // function updateClockface:
// //    - Принимает время в миллисекундах
// //    - Высчитывает сколько в них вмещается часов/минут/секунд
// //    - Рисует интерфейс
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }
