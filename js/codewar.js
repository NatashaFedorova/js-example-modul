// =============================Task-1======================================
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   const result = Number(weight / Math.pow(height, 2)).toFixed(1);
//   console.log(result);

//   if (result <= 18.5) {
//     return 'Underweight';
//   } else if (result <= 25.0) {
//     return 'Normal';
//   } else if (result <= 30.0) {
//     return 'Overweight';
//   } else {
//     return 'Obese';
//   }
// }

// bmi(45, 1.8);
// console.log(bmi());

// =============================Task-2======================================
// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел.
// Числа могут быть отрицательными или нецелыми.
// Если массив не содержит чисел, вы должны вернуть 0.

// вариант 1
// function sum(numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }

//   return total;
// }

// вариант 2
// const sum = numbers => numbers.reduce((acc, num) => acc + num, 0);

// =============================Task-3======================================
// Вам будет предоставлено значение arrayи limit.
// Вы должны убедиться, что все значения в массиве
// ниже или равны предельному значению.
// Если они есть, верните true.Иначе возвращайся false.

// const smallEnough = (a, limit) => {
//   return a.every(el => el <= limit);
// };

// =============================Task-4======================================
// функція претворює число в строку
// const numberToString = num => `${num}`;

// =============================Task-5======================================
// Area of an arrow
// const arrowArea = (a, b) => 0.5 * a * (b / 2);

// =============================Task-6======================================
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// варіант 1
// const XO = str => {
//   const x = 'x';
//   const o = 'o';

//   let sumX = 0;
//   let sumY = 0;

//   str
//     .toLowerCase()
//     .split('')
//     .forEach(el => {
//       if (el === x) {
//         sumX += 1;
//       }

//       if (el === o) {
//         sumY += 1;
//       }
//     });

//   return sumX === sumY;
// };

// варіант 2
// const XO = str => {
//   const x = str
//     .toLowerCase()
//     .split('')
//     .filter(el => el === 'x').length;
//   const o = str
//     .toLowerCase()
//     .split('')
//     .filter(el => el === 'o').length;
//   return x === o;
// };

// варіант 3
// const XO = str => {
//   const arr = str.toLowerCase().split('');
//   console.log(arr);
//   return arr.filter(el => el === 'x').length === arr.filter(el => el === 'o').length;
// };

// console.log(XO('ooxx'));
// console.log(XO('xo'), true);
// console.log(XO('xxOo'), true);
// console.log(XO('xxxm'), false);
// console.log(XO('Oo'), false);
// console.log(XO('ooom'), false);

// =============================Task-6======================================
// Дезоксирибонуклеиновая кислота, ДНК является основной молекулой хранения информации в биологических системах.
// Он состоит из четырех оснований нуклеиновых кислот гуанина(«G»), цитозина(«C»), аденина(«A») и тимина(«T»).
// Рибонуклеиновая кислота, РНК, является основной молекулой-мессенджером в клетках.
// РНК немного отличается от ДНК своей химической структурой и не содержит тимина.
// В РНК тимин заменен другой нуклеиновой кислотой урацилом(«U»).

// Создайте функцию, которая переводит заданную строку ДНК в РНК.

// "GCAT"  =>  "GCAU"

// Входная строка может быть произвольной длины, в частности, она может быть пустой.
// Гарантируется, что все входные данные верны,
// т.е.каждая входная строка будет состоять только из 'G', 'C', 'A'и / или 'T'.

// вариант 1
// const DNAtoRNA = dna => dna.replaceAll('T', 'U');

// вариант 2
// const DNAtoRNA = dna =>
//   dna
//     .split('')
//     .map(el => (el === 'T' ? (el = 'U') : el))
//     .join('');

// вариант 3
// const DNAtoRNA = dna => dna.split('T').join('U');

// console.log(DNAtoRNA('TTTT')); // 'UUUU'
// console.log(DNAtoRNA('GCAT')); // 'GCAU'
// console.log(DNAtoRNA('GACCGCCGCC')); // 'GACCGCCGCC'

// =============================Task-7======================================
// Формат для вираження впорядкованого списку цілих чисел полягає у
// використанні списку, розділеного комами:
//    - окремі цілі числа
//    - діапазон цілих чисел, позначений початковим цілим числом,
//      відокремленим від кінцевого цілого числа в діапазоні дефісом «-».
// Діапазон включає всі цілі числа в інтервалі, включаючи обидві кінцеві точки.
// Він не вважається діапазоном, якщо він не охоплює принаймні 3 числа.Наприклад "12,13,15-17"
// Доповніть рішення так, щоб воно приймало список цілих чисел у порядку зростання
// та повертало правильно відформатований рядок у форматі діапазону.

// Приклад
// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list) {
  if (typeof list[0] === 'string') {
    list = list[0].split(',').map(el => (Number(el) ? Number(el) : el));
    console.log(list);
  }
  if (list === []) {
    return;
  }

  list.sort((a, b) => a - b);

  const arrFormRange = [];
  const arrRes = [];
  const newArr = [];

  list.forEach(el => {
    if (arrFormRange.length === 0) {
      arrFormRange.push(el);
    } else if (el - 1 === arrFormRange[arrFormRange.length - 1]) {
      arrFormRange.push(el);
    } else if (el - 1 !== arrFormRange[arrFormRange.length - 1]) {
      if (arrFormRange.length <= 2) {
        arrRes.push(...arrFormRange, el);
        arrFormRange.splice(0, arrFormRange.length);
      } else {
        arrRes.push([...arrFormRange], el);
        arrFormRange.splice(0, arrFormRange.length);
      }
    }
  });

  if (arrFormRange.length <= 2) {
    arrRes.push(...arrFormRange);
    arrFormRange.splice(0, arrFormRange.length);
  } else if (arrFormRange.length >= 2) {
    arrRes.push([...arrFormRange]);
    arrFormRange.splice(0, arrFormRange.length);
  }

  arrRes.forEach(el => {
    if (typeof el !== 'number') {
      const min = Math.min(...el);
      const max = Math.max(...el);
      const string = `${min}-${max}`;
      el = string;
      newArr.push(el);
    } else {
      newArr.push(String(el));
    }
  });

  console.log(newArr.join(','));

  return newArr.join(',');
}

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
