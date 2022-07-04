// файл примеров с живых встреч (вторник)
//-------------------------------Example 1---------------------------------------------
// Тема. Базовые математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

//-------------------------------Example 2---------------------------------------------
// Тема. Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

//-------------------------------Example 3---------------------------------------------
// Тема. Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.
// просто проверить правильно ли я  посчитала

// const result = 108 + 223 - 2 * 5;
// console.log(result);

//-------------------------------Example 4---------------------------------------------
// Тема. Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// --------------------toFixed-----------
// const x = 3.1728395;
// console.log(x.toFixed(1));
// 3.2
// console.log(x.toFixed(2));
// 3.17
// console.log(x.toFixed(3));
// 3.173

//-------------------------------Example 5---------------------------------------------
// Тема. Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const totalBots = repairBots + defenceBots;
// const message = `${companyName} has ${totalBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

//-------------------------------Example 6---------------------------------------------
// Тема. Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';

// weight = weight.replace(',', '.');
// height = height.replace(',', '.');

// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);

// let bmi = weight / Math.pow(height, 2);
// bmi = bmi.toFixed(1);
// bmi = Number(bmi);

// console.log(bmi.toFixed(1)); // 28.8

// // короткая запись кода
// const weight = Number.parseFloat('88,3'.replace(',', '.'));
// const height = Number.parseFloat('1.75'.replace(',', '.'));

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi);

//-------------------------------Example 7---------------------------------------------
// Тема. Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4); // true
// console.log(10 >= '7'); // true
//console.log('2' > '12'); // false
// console.log('2' < '12'); // false
// console.log('4' == 4); // true
// console.log('6' === 6); // false
// console.log('false' === false); // false
// console.log(1 == true); //true
// console.log(1 === true); //false
// console.log('0' == false); //true
// console.log('0' === false); //false
// console.log('Papaya' < 'papaya'); //true
// console.log('Papaya' === 'papaya'); //false
// console.log(undefined == null); // true
// console.log(undefined === null); //false

//-------------------------------Example 8---------------------------------------------
// Тема. Логические операторы
// Каким будет результат выражений?

//console.log(true && 3); // 3
//console.log(false && 3); //false
// console.log(true && 4 && 'kiwi'); // 'kiwi'
// console.log(true && 0 && 'kiwi'); //0
// console.log(true || 3); //true
// console.log(true || 3 || 4); //true
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); //2
// console.log((1 && null && 2) > 0); //false
// console.log(null || (2 && 3) || 4); // 3

//-------------------------------Example 9---------------------------------------------
// Тема. Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 0; // 10
// const incomingValue = false; // 10
// const incomingValue = null; // 10
// const incomingValue = undefined; //10
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

//const incomingValue = 0; // 0
// const incomingValue = false; // false
// const incomingValue = null; // 10
// const incomingValue = undefined; // 10
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// ?? - nullish coalescing operator - возвращает значение  defaultValue,
// только в том случае, если incomingValue НЕ 0 или false (0 - как число, false как значение)

//-------------------------------Example 10---------------------------------------------
// Тема. Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

//  - 70 покажет 01:10
//  - 450 покажет 07:30
//  - 1441 покажет 24:01

// const totalMinutes = 1441;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// --------------------------------------(&& ||)----------------------------
// console.log(1 && 'Mango');
// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true
