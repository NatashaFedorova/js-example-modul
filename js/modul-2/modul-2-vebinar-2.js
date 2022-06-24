// --------------------------IIFE-------------------------
// (function () {
//   const a = 5;
//   console.log('a:', a);
// })();

// (function () {
//   const a = 15;
//   console.log('a:', a);
// })();

// -------------------------arguments------------------------
// function sum() {
//   let result = 0;

//   for (let i = 0; i < arguments.length; i += 1) {
//     result += arguments[i];
//   }
//   return result;
// }

// console.log(sum(2)); // 2
// console.log(sum(2, 2, 3, 1, 2)); // 10

// -------------------------arguments------------------------
// function multiply() {
//   let result = 1;

//   for (const number of arguments) {
//     result *= number;
//   }
//   return result;
// }
// multiply();
// console.log(multiply(2, 2)); // 4
// console.log(multiply(2, 2, 10)); // 40

// -------------------------arguments +(...rest) або "розпилення"------------------------
// function multiply(...rest) {
//   let result = 1;

//   for (const number of rest) {
//     result *= number;
//   }
//   return result;
// }
// multiply();
// console.log(multiply(3, 2)); // 6
// console.log(multiply(2, 2, 10, 10)); // 400

//---------------------------Задача 1 - Индекс массы тела---------------------------------------------
// Напиши функцию calcBMI(weight, height),
//  которая рассчитывает и возвращает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки.
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7,
// то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;

// function calcBMI(weight, height) {
//   const weightNum = parseFloat(weight.replace(',', '.'));
//   const heightNum = parseFloat(height.replace(',', '.'));

//   return parseFloat(weightNum / Math.pow(height, 2)).toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
// console.log(calcBMI('99,6', '1.75')); // 32.5

//---------------------------Задача 2 - Меньшее из чисел---------------------------------------------
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// вариант 1
// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// console.log(min(110, 111)); // 110

// вариант 2
// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// console.log(min(110, 111)); // 110

// вариант 3 (arguments и больше чисел для сравнения)
// function min() {
//   let res = arguments[0];
//   for (const num of arguments) {
//     if (num < res) {
//       res = num;
//     }
//   }
//   return res;
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 11)); // 1
// console.log(min(2, 5, -4, 7, 3, 0)); // -4

// вариант 4 (...rest и больше чисел для сравнения)
// function min(...rest) {
//   let res = rest[0];
//   for (const num of rest) {
//     if (num < res) {
//       res = num;
//     }
//   }
//   return res;
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 11)); // 1
// console.log(min(2, 5, -4, 7, 3, 0)); // -4

//---------------------------Задача 3 - Площадь прямоугольника---------------------------------------------
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
// значения которых будут переданы в параметр dimensions в виде строки.
// Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   const [x, y] = dimensions.split(' '); [x, y] - деструктуризация уменьшает количество кода, который написан ниже
//     // const arr = dimensions.split(' ');
//     // const x = arr[0];
//     // const y = arr[1];
//   return parseFloat(x) * parseFloat(y);
// }

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('4 8')); // 32

//---------------------------Задача 4 - Логирование элементов---------------------------------------------
// Напиши функцию logItems(items), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение
// в формате < номер элемента > - <значение элемента >.
// Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango,
//  а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
// console.log('==================');
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1}-${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']); // 1-Mango...
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']); //1-🍎....

//---------------------------Задача 5 - Логирование контактов---------------------------------------------
// Напиши функцию printContactsInfo(names, phones),
// которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.
// function printContactsInfo(names, phones) {}

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]} : ${phonesArr[i]}`);
//   }

//   console.log(namesArr);
//   console.log(phonesArr);
// }
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

//---------------------------Задача 6 - Поиск наибольшего элемента------------------------------------------
// Напиши функцию findLargestNumber(numbers),
// которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//   let maxNumber = numbers[0];

//   for (const number of numbers) {
//     if (number > maxNumber) {
//       maxNumber = number;
//     }
//   }
//   return maxNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//---------------------------Задача 7 - Среднее значение-------------------------------------------
// Напишите функцию calAverage(),
// которая принимает произвольное кол - во аргументов и возвращает их среднее значение
// Все аругменты будут только числами.

// function calAverage() {
//   let sum = 0;
//   for (const number of arguments) {
//     sum += number;
//   }
//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//---------------------------Задача 8 - Форматирование времени-----------------------------------------

// Напиши функцию formatTime(minutes),
// которая переведёт значение minutes(количество минут) в строку в формате часов и минут HH: MM.

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);

//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//---------------------------Задача 9 - Коллекция курсов (includes, indexOf, push и т. д.)-------------------------
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// Добавляем елемент
// function addCourse(name) {
//   if (courses.includes(name)) {
//     return console.log('У вас уже есть такой курс');
//   }
//   courses.push(name);
// }

// Результат 1
// addCourse('Express'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(courses);

// Результат 2 (негативный)
// addCourse('CSS');
// console.log(courses); // 'У вас уже есть такой курс'

// =============================================================
// вариант мой на removeCourse
// function removeCourse(name) {
//   name.indexOf(name);
//   return courses.splice(courses.indexOf(name), 1);
// }

// вариант лектора на removeCourse
// function removeCourse(name) {
//   const idx = courses.indexOf(name);

//   if (idx !== -1) {
//     return courses.splice(idx, 1);
//   } else {
//     console.log('Курс с таким имененем не найден');
//   }
// }

// // Результат;
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// =============================================================
// Замена елемента
// function updateCourse(oldName, newName) {
//   return courses.splice(courses.indexOf(oldName), 1, newName);
// }

// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);

//   if (idx !== -1) {
//     courses.splice(idx, 1, newName);
//   } else {
//     console.log('Курс с таким имененем не найден');
//   }
// }

// Результат
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

//-------------------------------------Приклад з питань----------------------------------
// function findLongestWord(text) {
//   let textArr = text.split(' ');
//   let result = textArr[0];

//   for (const word of textArr) {
//     if (word.length > result.length) {
//       result = word;
//     }

//     // result = word.length > result.length ? word : result;
//   }

//   return result;
// }

// console.log(
//   findLongestWord("I  done it. But I can't understand how it works.")
// );

//-------------------------------------Приклад з питань----------------------------------
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [34, 54, 1, 456, 3, 675, 234, 87, 6];
// const res = [];
// for (const number of arr1) {
//   if (arr2.includes(number)) {
//     res.push(number);
//   }
// }
// console.log(res); //[1, 3, 6]
