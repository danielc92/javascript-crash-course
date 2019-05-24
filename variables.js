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
let s = 'my string!';
let s_short = s.substring(0, 4);
console.log(s_short);
console.log(s.length);