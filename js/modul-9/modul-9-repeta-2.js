// ============================Promise==========================
// const promise = new Promise((resolve, reject) => {
//   const canFullFill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullFill) {
//       resolve('Проміс виконався успішно, з результатом (виконаний, fulfilled)');
//     }

//     reject('Проміс виконався з помилкою (відхилено, rejected)');
//   }, 1000);
// });

// console.log(promise);

// варіант запису 1=======================
// promise.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );

// варіант запису 2=======================
// result, error - є лише всередині onFulfilled, onRejected
// достукатися д оних у зовн  коді не можливо
// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`${error}`);
// }

// =====================Chaining - ланцюги промісів=======================
// const promise = new Promise((resolve, reject) => {
//   const canFullFill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullFill) {
//       resolve('Проміс виконався успішно, з результатом (виконаний, fulfilled)');
//     }

//     reject('Проміс виконався з помилкою (відхилено, rejected)');
//   }, 1000);
// });

// ======================
// promise
//   .then(result => {
//     console.log(result);
//     return 5;
//   })
//   .then(x => {
//     console.log(x);

//     return x * 10;
//   })
//   .then(y => {
//     console.log(y);

//     return y + 100;
//   });

//  варіант з помилкою================
// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);
//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//     return y * 10;
//   })
//   .then(a => console.log(a))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду виконаний в будь-якому разі'));

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`${error}`);
// }

// ===========================Промісифікація========================
// проблема доступу до результатів с колбеком
// функція, яка повертає проміс
// приклад із затримкою
// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`Ось ваш ${dish}`);
//       } else {
//         reject('Вибачте, товар закінчився');
//       }
//     }, DELAY);
//   });
// };

// makeOrder('тортик').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// приклад без затримки==========
// const makeOrder = dish => {
//   return Promise.resolve(`Ось ваш ${dish}`);
// };

// makeOrder('тортик').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// ===========================Робота за сервером та промісами=================
// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pomemon) {
//   console.log(pomemon);
// }
// function onFetchError(error) {
//   console.log('Це в блоці catch');
//   console.log(error);
// }

// ============================Задача 1(іподром)==============================
// const horses = ['Secretariat', 'Eclipse', 'West Australian', 'Flying Fox', 'Seabiscuit'];

// let raceCounter = 0;

// const refs = {
//   startBtn: document.querySelector('.js-start-race'),
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };

// refs.startBtn.addEventListener('click', onStart);

// function onStart() {
//   raceCounter += 1;
//   const promises = horses.map(run);

//   updateWinnerField('');
//   updateProgressField('Заїзд розпочався, ставки не приймаються!');
//   determineWinner(promises);
//   waitForAll(promises);
// }

// function run(horse) {
//   return new Promise(resolte => {
//     const time = getrandomTime(2000, 3500);
//     setTimeout(() => {
//       resolte({ horse, time });
//     }, time);
//   });
// }

// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// }

// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// }

// function determineWinner(horseP) {
//   Promise.race(horseP).then(({ horse, time }) => {
//     updateWinnerField(`Победил ${horse}, финишировав за ${time}
//       времени`);
//     updateResultsTable(raceCounter, horse, time);
//   });
// }

// function waitForAll(horsesP) {
//   Promise.all(horsesP).then(() => {
//     updateProgressField('Заїзд завершено! Ставки приймаються');
//   });
// }

// function updateResultsTable(raceCounter, horse, time) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }

// function getrandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// для мене==========================
// Promise.all(promises).then(x => console.log(x));
// Promise.all(promises).then(x => x.forEach(el => console.log(el)));
