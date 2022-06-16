// const totalPrice = 200;
// console.log('Цена:', totalPrice);

//-----------------------разница между свойством и методом-------------------------
// Свойство => сущность.имя_свойства
// const exampleProperty = "I'm from Ukraine".length;
// console.log(exampleProperty);
// 16 - количество символов

// Метод => сущность.имя_метода()
// const exampleProperty = "I'm from Ukraine";
// console.log(exampleProperty.toUpperCase(exampleProperty));
// 16 - количество символов

//-------------------------------------typeof-------------------------------------
// оператор typeof
// const type = typeof '4';
// console.log(type);
// отобразиться слово string, обозначает строка

// const type = typeof 5;
// console.log(type);
// отобразиться слово number

// const type = typeof true;
// console.log(type);
// отобразиться слово boolean, обозначает буль

//-------------------------------------alert------------------------------------------
// console.log('before');
// alert('stop');
// console.log('after');
// window.confirm
// const shoudRenew = confirm('Хотите продлить подписку?');
// console.log('Результат:', shoudRenew);

//-------------------------------------prompt------------------------------------------
// window.prompt
// const quantity = prompt('Введите количество товара');
// console.log('Количество:', quantity);

// ввести можно используя  переменные для переменных

// нужно вместо const поставть let, ввести новое значние переменной
// quantity = Number(quantity); - можно написать и отдельно
// const questionQuantity = 'Введите количество товара';
// let quantity = Number(prompt(questionQuantity));
// console.log('Количество:', quantity);
// console.log(typeof quantity);
// если ввести текст, результатом будет NaN

// ----------------------------------ЧИСЛА (perseInt)------------------------------------
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

// let elementWidth = '60px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);

// ----------------------------------ЧИСЛА (perseFloat)------------------------------------
// let elementWidth = '50.04px';
// elementWidth = Number.parseFloat(elementWidth);
// console.log('elementWidth:', elementWidth);

// ----------------------------------ЧИСЛА (toFixed)------------------------------------
// let salary = 200069.4795733;
// salary = salary.toFixed(3);
// salary = Number(salary);
// console.log(salary);

// запись оп методу матрешки Number(salary.toFixed(2))  - вариант 1
// let salary = 200069.4795733;
// salary = Number(salary.toFixed(2));
// console.log(salary);

// запись оп методу матрешки Number(salary.toFixed(2))  - вариант 2
// let salary = 200069.4795733;
// console.log(Number(salary.toFixed(2)));

// ----------------------------------ЧИСЛА (true/false)------------------------------------
// console.log(Number('5'));
// 5
// console.log(Number(true));
// 1
// console.log(Number(false));
// 0
// console.log(Number('ffkglfdgnsl'));
// Nan, если указать ffkglfdgnsl без скобок  - оштбка
// console.log(Number(5 / 0));
//Infinity

// ----------------------------------ЧИСЛА (pow)------------------------------------
// Math.pow(степень)
// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);
// 32
// аналог предидущей записи
// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(base ** power);

// -----------------------------Задача (просчитать степень)--------------------------------
// дадть число, дать число для степени, просчитать результат
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);

// ----------------------------------Math.random-------------------------------------------
// const min = 30;
// const max = 50;
// const result = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(result);
// результат 31.367118601259175 (число может быть любое в диапазоне)

// пример
// const result = Math.floor(Math.random() * (max - min + 1) + min);

// const min = 30;
// const max = 50;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);
// результат 31 (целое округленное число)

//---------------------------ЗАДАЧА (random for bg)--------------------------------
// СМЕНА  backgroundColor ПРИ ПЕРЕЗАГРУЗКЕ СТРАНИЦЫ (пример использования random)
//   const colors = ['tomato', 'teal', 'orange', 'violet'];
//   const max = colors.length - 1;
//   const min = 0;
//   const index = Math.round(Math.random() * (max - min) + min);
//   console.log(index);

//   const color = colors[index];
//   console.log(color);
//   document.body.style.backgroundColor = color;

//------------------------------------STRIHG (строка) --------------------------------
// const message = 'В этой строке 26 символов.';
// console.log(message.length);

//------------------------------Конкатернация строк ----------------------------------
// const firstName = 'dark';
// const lastName = 'grey';
// const fullName1 = firstName + lastName;
// const fullName2 = firstName + ' ' + lastName;
// console.log(fullName1);
// console.log(fullName2);

//-------------------Конкатернация строк (с числами) -------------------------------
// console.log(1 + 2 + '3');
// 33
// console.log(1 + '2' + 3);
// 123
// console.log('1' + 2 + 3);
//123
// console.log('2' + 3);
//23
// console.log(1 + '2' + 3 + 4 + 5);
//12345

//---------------------------Шаблонные строки (задача) -----------------------------
// "Гость х поселяестся в z номер q"
//x z q - переменные
// const firstName = 'Natasha';
// const lastName = 'Fedorova';
// const room = 706;
// const type = 'VIP';
// пример громоздкий;
// const welcomeMsg =
//     'Гость ' + firstName + ' ' + lastName + ' ' + 'поселяестся в ' + type + ' ' + 'номер ' + room;
// пример с шаблонной строкой
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяестся в ${type} номер ${room}`;
// console.log(welcomeMsg);

//---------------------------String (indexOf) -----------------------------
// const sentence = 'My name is Nataliya Fedorova';
// console.log(sentence.indexOf('name'));
// 3
// console.log(sentence.indexOf('Nataliya'));

// console.log(sentence.indexOf('fedorova'));
//слово есть,но в консоле первая буква в нижнем регистре, поэтому -1 (нет совпадений)
// console.log(sentence.indexOf('to'));
// -1 (нет совпадений)

//---------------------------String (replace) ----------------------------
// const substring = 'My name is NNNNNNNN Fedorova'.replace('NNNNNNNN', 'Nataliya');
// console.log(substring);

// const substring1 = 'We make changes only in подстроку'.replace('подстроку', 'substring');
// console.log(substring1);

//-----------------------нормализация с методом toLowerCase (2 варианта)--------------------
// let brandName = 'SamsuNG';
// brandName = brandName.toLowerCase();
// console.log(brandName);

// let brand = prompt();
// brand = brand.toLowerCase();
// console.log(brand);

//----------------------------------Задача (toLowerCase)------------------------------------
//нормализация всего, кроме первой буквы
// let brand = 'SaMSunG';
// console.log(brand[0]);
// brand = brand.slice(1).toLowerCase();

// let brand = 'SaMSunG';
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

//----------------------------------String includes------------------------------------
// const blacklistedWork1 = 'спам';
// const blacklistedWork2 = 'распродажа';

// const string1 = 'Обратите внимание на это письмо - это не спам';
// const string2 = 'Только сегодня у нас РАСПРОДАЖА';
// const string3 = 'Ваша заявка подверждена';

// console.log(string1.includes(blacklistedWork1, blacklistedWork2));
// true
// console.log(string1.includes(blacklistedWork1));
// console.log(string1.includes(blacklistedWork2));

// console.log(string2.includes(blacklistedWork1));
// console.log(string2.toLowerCase().includes(blacklistedWork2));
// можно еще записать по другому
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWork2));

// console.log(string3.includes(blacklistedWork1));
// console.log(string3.includes(blacklistedWork2));

//----------------------------------Операторы сравнения------------------------------------
//console.log(10 <= 5);
// false
//console.log(10 > 5);
// true
// console.log('10' > 5);
// true - операнд слева привелся к строке
//console.log(true > 5);
// false
// const result = true == 1;
// true
// const result = true === '1';
// false(строгое, каждый равняеться себе)
// const result = 5 == '5';
// true
// const result = 5 === '5';
// false (строгое, каждый равняеться себе)
// console.log(result);

//----------------------------------Преобразование к булю------------------------------------
// 6 ложных  значений, остальные true
//console.log(Boolean(0));
// false
//console.log(Boolean(null));
// false
//console.log(Boolean(NaN));
// false
//console.log(Boolean(undefined));
// false
//console.log(Boolean(''));
// false
//console.log(Boolean(false));
// false
//console.log(Boolean('NaN'));
// true

//----------------------------------Логические && (И)------------------------------------
//console.log(5 && 6 && 'Hello');
// Hello
//console.log(5 && 6 && false && 7);
// вернуло false
//console.log(5 && 6 && '' && 7);
// вернуло пустую строку
//console.log(0 && 6);
// вернуло 0
//console.log(5 && 6 && 'Hello' && 7);
// 7

//----------------------------------Логические || (ИЛИ)------------------------------------
// console.log(5 || 6);
// 5
// console.log(0 || 6);
// 6 (0 - это false)
// console.log(false || 0 || '' || 7);
// 7
// console.log(false || 10 || '' || 7);
// 10
// console.log(false || '' || 0);
// 0

//----------------------------------Логические ! (НЕ)------------------------------------
// console.log(!false);
// true
// console.log(!true);
// false
// console.log(!4);
// false
// console.log(!0);
// true
// console.log(!1);
// false
// console.log(!'string');
// false
//

//----------------------------------Задача (число в диапазоне)------------------------------------
// скрипт, который проверяет вхождение числа (num1, num2) в отрезок обозначеный х1 и х2 (диапазон)
// до х1
// после х2
// до х1 или после х2
//между х1 - х2

// const x1 = 10;
// const x2 = 30;
// const num1 = 5;
// const num2 = 40;
// console.log(`Число ${num1} попадает в диапазон до ${x1}?`, x1 >= num1);
// console.log(`Число ${num2} попадает в диапазон до ${x1}?`, x1 >= num2);
// Число 5 попадает в диапазон до 10? true
// Число 50 попадает в диапазон до 10? false
// console.log(`Число ${num1} попадает в диапазон от ${x2}?`, x2 <= num1);
// console.log(`Число ${num2} попадает в диапазон от ${x2}?`, x2 <= num2);
// Число 5 попадает в диапазон от 30? false
// Число 25 попадает в диапазон от 30? false
// const result1 = num1 > x1 && num1 < x2;
// console.log(`Число ${num1} попадает в диапазон от ${x1} до ${x2}?`, result1);
// Число 5 попадает в диапазон от 10 до 30? false
// num1 > x1 && num1 < x2
// 5 > 10 && 5 < 30
// false && false - false
// 15 > 10 && 15 < 30
// true && true - true

// const result2 = num2 > x1 && num2 < x2;
// console.log(`Число ${num2} попадает в диапазон от ${x1} до ${x2}?`, result2);
// Число 25 попадает в диапазон от 10 до 30? true

// const result3 = num1 < x1 || num1 > x2;
// console.log(`Число ${num1} попадает в диапазон до ${x1}  или от ${x2}?`, result3);

// const result4 = num2 < x1 || num2 > x2;
// console.log(`Число ${num2} попадает в диапазон до ${x1}  или от ${x2}?`, result4);
// num2 - 40  - true

//----------------------------------Задача (&&)------------------------------------
// Скрипт, который проверяет возможность открыть час с пользователем
// Для этого пользователь должен быть:
//  - другом;
//  - онлайн;
//  - без режима не беспокоить.

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат?', canOpenChat);

//----------------------------------Задача (число в диапазоне)------------------------------------
// Скрипт проверки подписки пользователя при доступе к контенту
// Есть 3 вида подпски: free, pro, vip
// Доступ к контенту могут получть только pro и vip
// const sub = 'free';
// если пользователь pro или vip он получает доступ
// const canAccessContent = sub === 'pro' || sub === 'vip';
// true || false => true (запинаеться на первом true)
// false || true => true (запинаеться на первом true)
// false || false => false (если sub = free)
// console.log('Есть доспут к контенту?', canAccessContent);

//----------------------------------Оператор ветвления if------------------------------------
// if (10 >= 5) {
//   console.log('Значение true, поэтому выполняется if');
// }
// console.log('Значение false - if пропускается');

//----------------------------------Оператор ветвления if...else------------------------------------
// if (4 >= 5) {
//   console.log('Значение true, поэтому выполняется if');
// } else {
//   console.log('Значение  if = false  - if пропускается, выполняется значение else');
// }

//----------------------------------Оператор ветвления  if ...else if------------------------------------
// const salary = 1000;

// let salary = prompt('Указать размер зп');
// if (salary <= 500) {
//   console.log('Уровень 1 ');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2 ');
// } else if (salary > 1500 && salary <= 3000) {
//   console.log('Уровень 3 ');
// } else {
//   console.log('Уровень 4 ');
// }

//----------------------------------Тернарный оператор------------------------------------
// const balance = 1000;
// let balance = prompt('Баланс');
// let message;
// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }
// код с использованием можно заменить, смотреть ниже
// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(message);

//----------------------------------Область видимости------------------------------------
// const a = 10;
// if (a > 0) {
//   const b = 'ok';
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b); - не видно, выдает ошибку

//----------------------------------Задача------------------------------------
// скрипт обработки покупки в магазине

// баланс пользователя храится в перменной balance
// сумма покупк хранится в переменной payment

// перед проверкой ввести сообщение
// "Общая стоимость заказа [число] кредитов. Проверяем количество доступных средств на счету."

// Если сумма покупки не превышает баланс:
//  - вычесть з баланса сумму покупки;
//  - вывести сообщение "На счету осталось [число] кредитов."

// Если сумма покупки превышает баланс:
//  - вывести сообщение "На счету недостаточно средста для проведения операци!"

// В конце вывести сообщение "Операция завершена."

// 1. Опредилить переменные
// let balance = 10000;
// const payment = 4000;
// let messageResult;

// 2.
// messageResult = `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету.`;
// console.log(messageResult);

// 3. сравнить сумму покупи и баланс
// 4. вычесть из баланса сумму покупки
// 5. результат - сообщение `На счету осталось [число] кредитов`
// if (payment <= balance) {
//   balance -= payment;
//   messageResult = `На счету осталось ${balance} кредитов`;
//   console.log(messageResult);
// } else {
//   messageResult = 'На счету недостаточно средста для проведения операци!';
//   console.log(messageResult);
// }
// messageResult = 'Операция завершена.';
// console.log(messageResult);
// balance -= payment; - как ваирант записи отнимания
// Репета писал текст сообщений в консоле без const
