// const CounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);

//   this._bindEvents();
//   this.updateValueUI();
// };

// метод _getRefs создает объект ссылок
// на все элементы интерфейса текущего экземпляра плагина
// и возвращает этот объект
// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   // ниже поиск по id
//   refs.container = document.querySelector(rootSelector);
//   refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//   refs.incrementBtn = refs.container.querySelector('[data-increment]');
//   refs.value = refs.container.querySelector('[data-value]');

//   return refs;
// };

// метод  - привяжет событие
// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.increment();
//     this.updateValueUI();
//   });

//   this._refs.decrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };
// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter1 = new CounterPlugin({ rootSelector: '#counter-1', step: 10, initialValue: 100 });
// console.log(counter1);

// const counter2 = new CounterPlugin({ rootSelector: '#counter-2', step: 1 });
// console.log(counter2);

// const counter3 = new CounterPlugin({ rootSelector: '#counter-3', step: 5 });
// console.log(counter3);
