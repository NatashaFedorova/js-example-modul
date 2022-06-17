// --------------------------Задача 1------------------------------------
// Change code below this line
// const productName = 'Droid';
// console.log(productName);
// 'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000

// --------------------------Задача 2------------------------------------
// let productName = 'Droid';
// productName = 'Repair droid';
// let pricePerItem = 2000;
// pricePerItem += 1500;

// console.log(productName);
// console.log(pricePerItem);

// --------------------------Задача 3------------------------------------
// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

// --------------------------Задача 4------------------------------------
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// --------------------------Задача 5------------------------------------
// const productName = 'Droid';
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// --------------------------Задача 6------------------------------------
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// --------------------------Задача 7------------------------------------
// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// --------------------------Задача 8------------------------------------
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// --------------------------Задача 9------------------------------------
// function add(a, b, c) {
//   return a + b + c;
// }

// let result = add(2, 5, 8); // 15
// console.log(result);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// --------------------------Задача 10------------------------------------
// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }
// без виклику коду

// --------------------------Задача 11------------------------------------
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = pricePerItem * orderedQuantity;
//   return totalPrice;
// }
// без виклику коду

// --------------------------Задача 12------------------------------------
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }
// без виклику коду

// --------------------------Задача 13------------------------------------
// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }

// --------------------------Задача 14------------------------------------
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = SAVED_PASSWORD === password;
//   return isMatch;
// }
// --------------------------Задача 15------------------------------------
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// --------------------------Задача 16------------------------------------
// function checkStorage(available, ordered) {
//   let message;

//   if (available < ordered) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }

//   return message;
// }
// --------------------------Задача 17------------------------------------
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// --------------------------Задача 18------------------------------------
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice;
//   totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// --------------------------Задача 19------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// --------------------------Задача 20------------------------------------
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (available < ordered) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   // Change code above this line
//   return message;
// }
// --------------------------Задача 21------------------------------------
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   return isInRange;
// }

// --------------------------Задача 22------------------------------------
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line
//   return canAccessContent;
// }

// --------------------------Задача 23------------------------------------
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line
//   return isNotInRange;
// }
// --------------------------Задача 24------------------------------------

// if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 && totalSpent < 50000) {
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent < 20000) {
//   discount = BRONZE_DISCOUNT;
// } else {
//   discount = BASE_DISCOUNT;
// }

// if (totalSpent < 5000) {
//   discount = BASE_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent < 20000) {
//   discount = BRONZE_DISCOUNT;
// } else if (totalSpent >= 20000 && totalSpent < 50000) {
//   discount = SILVER_DISCOUNT;
// } else {
//   discount = GOLD_DISCOUNT;
// }

// --------------------------Задача 25------------------------------------
// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   return message;
// }

// --------------------------Задача 26------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
//   // Change code above this line
//   return message;
// }

// --------------------------Задача 27------------------------------------
// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;
//     case 'professional':
//       price = 20;
//       break;
//     case 'organization':
//       price = 50;
//       break;
//   }

//   return price;
// }

// --------------------------Задача 28------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }

// Рефакторинг коду
// switch (password) {
//   case null:
//     message = 'Canceled by user!';
//     break;
//   case ADMIN_PASSWORD:
//     message = 'Welcome!';
//     break;
//   default:
//     message = 'Access denied, wrong password!';
// }

// --------------------------Задача 29------------------------------------
// function getShippingCost(country) {
//   let message;

//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;

//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;

//     case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;

//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }

//   return message;
// }
// --------------------------Задача 30------------------------------------
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   return message;
// }
// --------------------------Задача 31------------------------------------
// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1]; //последний элемент строки

// --------------------------Задача 32------------------------------------
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// --------------------------Задача 33------------------------------------
// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + '...';
//   } else {
//     result = message;
//   }
//   return result;
// }

// --------------------------Задача 34------------------------------------
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line
//   return normalizedInput;
// }

// --------------------------Задача 35------------------------------------
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// --------------------------Задача 36------------------------------------
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const testWord1 = 'spam';
//   const testWord2 = 'sale';

//   result = message.toLowerCase().includes(testWord1) || message.toLowerCase().includes(testWord2);

//   // Change code above this line
//   return result;
// }
