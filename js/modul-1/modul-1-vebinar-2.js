// файл примеров с живых встреч (чт)

//-------------------------------Example 1---------------------------------------------
// Тема. Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!",
// в противном случае - "Не знаете? ECMAScript!"

// const userAnswer = prompt('Какое официальное название JavaScript?');

// вариант 1
// if (userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   console.log('Верно!');
// } else {
//   console.log('Не знаете? ECMAScript!');
// }

// вариант 2
// console.log(
//   userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase() ? 'Верно!' : 'Не знаете? ECMAScript!'
// );

//-------------------------------Example 2---------------------------------------------
// Тема. Отображение времени (if...else)
//Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.".
//Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 15;
// let timestring;

// вариант 1
// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }

// вариант 2
// console.log(minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`);

//-------------------------------Example 3---------------------------------------------
// Тема. Ветвеления
//Напиши скрипт, который выводит в консоль строку "Это положительное число",
//если в prompt пользователь ввел число больше нуля.
//Если был введен ноль, выводи в консоль строку "Это ноль".
//Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// мое решение
// const userInput = prompt('Введите число');
// const num = Number(userInput);

// if (num < 0) {
//   console.log('Это отрицательное число');
// } else if (num === 0) {
//   console.log('Это ноль');
// } else {
//   console.log('Это положительное число');
// }

//мое решение
// const userInput = prompt('Введите число');
// const number = Number(userInput) || 0;
// let answer;

// if (number > 0) {
//   answer = 'Это положительное число';
// } else if (number < 0) {
//   answer = 'Это отрицательное число';
// } else {
//   answer = 'Это ноль';
// }
// console.log(answer);

//-------------------------------Example 4---------------------------------------------
// Тема.Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 20;
// const b = 180;
// мой вариант
// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// вариант лектора
// if (a > 100 && b > 100) {
//   // const res = Math.max(a, b);
//   const res = a > b ? a : b;

//   // if (a > b) {
//   //   res = a;
//   // } else {
//   //   res = b;
//   // }

//   console.log(res);
// } else {
//   console.log(b + 512);
// }

//-------------------------------Example 5---------------------------------------------
// Тема. Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ.Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// Пиши код ниже этой строки

// мое решение
// if (link.endsWith('/') === false) {
//   console.log(link + '/');
// } else {
//   console.log(link);
// }

// решение лектора
// if (!link.endsWith("/")) link += "/";
// // link += !link.endsWith("/") ? "/" : "";

// Пиши код выше этой строки
// console.log(link);

//-------------------------------Example 6---------------------------------------------
// Тема. Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site".
// Используй конструкцию if...else.

// let link = 'https://somesite.com/about/my-site';

// Пиши код ниже этой строки
// мое решение  1
// if (!link.endsWith('/') && link.includes('my-site')) {
//   console.log(link + '/');
// } else {
//   console.log(link);
//  }

// мое решение  2
// if (!link.endsWith('/') && link.includes('my-site')) link + '/';

// Пиши код выше этой строки
// console.log(link);

//-------------------------------Example 7---------------------------------------------
// Тема. Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://somesite.com/about/my-site';
// if (link.includes('my-site') && !link.endsWith('/'))
//   link += '/';
// мой вариант
// link = link.includes('my-site') && !link.endsWith('/') ? (link += '/') : (link += '');

//решение лектора
// link += link.includes("my-site") && !link.endsWith("/") ? "/" : "";
// console.log(link);

//-------------------------------Example 8---------------------------------------------
// Тема. if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:
// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 5;
// let text;
// if (hours < 17) {
//   text = 'Pending';
// } else if (hours >= 17 && hours <= 24) {
//   text = 'Expires';
//   console.log('Expires');
// } else {
//   text = 'Overdue';
// }
// console.log(text);

//-------------------------------Example 9---------------------------------------------
// Тема. Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта.
// Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 2;
// let text;
// мое решение
// if (daysUntilDeadline === 0) {
//   text = 'Сегодня';
// } else if (daysUntilDeadline === 1) {
//   text = 'Завтра';
// } else if (daysUntilDeadline === 2) {
//   text = 'Послезавтра';
// } else {
//   text = 'Дата в будущем';
// }

// решение лектора
// switch (daysUntilDeadline) {
//   case 0:
//     text = 'Сегодня';
//     break;
//   case 1:
//     text = 'Завтра';
//     break;
//   case 2:
//     text = 'Послезавтра';
//     break;
//   default:
//     text = 'Дата в будущем';
// }
// Пиши код ниже этой строки
// console.log(text);
//-------------------------------Example 10---------------------------------------------
// Тема. Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// switch (daysUntilDeadline) {
//   case 0:
//     text = 'Сегодня';
//     break;
//   case 1:
//     text = 'Завтра';
//     break;
//   case 2:
//     text = 'Послезавтра';
//     break;
//   default:
//     text = 'Дата в будущем';
// }
// console.log(text);

//-------------------------------Example 11---------------------------------------------
// Тема. Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;
// вариант 1 (мин менятся не будет)
// for (let i = min; i <= max; i += 5) {
//   console.log('i', i);
// }

// вариант 1 (мин меняется)
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log('i', i);
//   }
// }
//-------------------------------Example 12---------------------------------------------
// Тема. Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// let login = prompt('login');
// let text;

// if (login) {
//   if (login === 'Админ') {
//     const password = prompt('password');

//     if (password === 'Я админ') {
//       text = 'Здравствуйте!';
//     } else {
//       text = 'Неверный пароль';
//     }
//   } else {
//     text = 'Я вас не знаю';
//   }
// } else {
//   text = 'Отменено';
// }

// console.log(login);
// console.log(text);
