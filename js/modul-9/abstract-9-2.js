// ===============================Throttle і Debounce. Приклад 5 ==================================
// const output = document.querySelector('.output');
// let scrollEventCounter = 0;

// document.addEventListener('scroll', () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });

// ================Throttle і Debounce. Режими методу debounce Приклад 6 ===========================
// const vanillaOutput = document.querySelector('.output.vanilla');
// const throttledOutput = document.querySelector('.output.throttled');
// const trailingOutput = document.querySelector('.output.trailing');
// const leadingOutput = document.querySelector('.output.leading');
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   trailing: 0,
//   leading: 0,
// };

// // Trailing debounce
// document.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );

// // Leading debounce
// document.addEventListener(
//   'scroll',
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true }
//   )
// );

// document.addEventListener('scroll', () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );
