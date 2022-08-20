// цей файл буде як index.js
import { min, max } from './util/minMax.js';
import data from './util/data.js';
import isEmail from './util/isEmail.js';

console.log(min(data));
console.log(max(data));

console.log(isEmail('example@gmail.com')); // true
console.log(isEmail('example_gmail.com')); //false

// ====================================================
