/* INITIALIZING VARIABLES */

// let
let score = 20;
console.log(score);

// const
const always_the_same = 'Daniel is learning programming';
console.log(always_the_same);

// var
var globally_available = 'PROD_ENV';

/* TYPES OF VARIABLES */

// Strings
let name = "Daniel";
let name2 = 'George';

// Template strings
let name_sentence = `my name is ${name} and my score is ${score}`;
console.log(name_sentence);

// Boolean
let active = true;
let inactive = false;

// Numbers
let age = 26;
let force = 23.43;
console.log(age * force);

console.log(typeof active, typeof age);

/* PROPERTIES AND METHODS */
let s = 'my, string!,  How are,   you';
let s_short = s.substring(0, 4);
console.log(s_short);
console.log(s.length);

const splitted = s.split(',');
console.log(splitted);

/* ARRAYS */
let classroom = ['john', 'bobby', 'ross', 'ross', 'jessica', 'anna', 'bruce'];
console.log(classroom);
console.log(`The length of this array is ${classroom.length}`);
console.log(classroom.indexOf('ross'));
console.log(classroom.pop());
console.log('shifting');
console.log(classroom);
console.log(classroom.unshift('daniel'));

let nums = [1];
nums.push(3);
nums.push(7,6);
nums.pop();
console.log(nums.slice(2));
console.log(nums);
console.log(classroom.reverse());
