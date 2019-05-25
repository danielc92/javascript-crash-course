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

/* OBJECT LITERALS */
let stats = {
    'height': 175,
    'weight': 65,
    'from':'Australia',
    'going':'New Zealand'
}

console.log(stats.height);
console.log(stats['height']);
stats['height'] = 180;
console.log(stats);
stats['interests'] = ['drawing', 'eating']
console.log(stats);


// They can be stored in a an array
let employees = [
    {
        'name':'Harry',
        'title':'data engineer',
        'age':26,
        'food':['sandwhich', 'apples', 'oatmeal', 'donuts']},
    {
        'name':'George',
        'title':'data engineer',
        'age':22},
    {
        'name':'Rufus',
        'title':'data engineer',
        'age':34
    }
]

/* LOOPS */
const fruits = ['apple', 'banana', 'grape', 'kiwi', 'watermelon'];
// for loop

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i] + ' - using a basic for loop');
}

for (let item of fruits) {
    console.log(item + 'using a simplified loop');
}

let e = employees.map(function(emp){
    return emp.name;
});

employees.forEach(function(emp){
    console.log(`Found another ${emp.name}`);
});

let e_filtered = employees.filter(function(employees){
    return employees.age > 25;
})

console.log(e);
console.log(e_filtered, e_filtered.length);

// while loop
let x = 0;
while (x <= 4) {
    //console.log(x);
    //console.log(x * 5);
    x ++;
}

/* CONDITIONALS */

const test = 40;
let target = 100;

// basic if
if (test > target) {
    console.log('target met.');
} else {
    console.log('target is not met.');
}

// using the or operator
if (test > 10 || test < -1) {
    console.log('condition has been met');
}

if (test == 40 && target == 1200) {
    console.log('Another condition has been met');
} else {
    console.log('Else activated');
}


/* ARROW FUNCTIONS */

function checkIfScoreHigh(score) {
    if (score >= 90) {
        return 'This is so dam high!';
    } else if (score >= 60) {
        return 'This score is pretty good';
    } else {
        return 'This score absolutely sucks';
    }
}


const checkIfScoreHighArrow = (score) => {
    if (score >= 90) {
        return 'This is so dam high!';
    } else if (score >= 60) {
        return 'This score is pretty good';
    } else {
        return 'This score absolutely sucks';
    }
}

let myscore = 93;


console.log(checkIfScoreHigh(myscore));
console.log(checkIfScoreHighArrow(myscore));

const AddTheseNumbers = (x, x2, x3) => {
    return x + x2 + x3;
}

const AddTheseNumbers2 = (x, x2) => x * x2;

console.log(AddTheseNumbers(2,5,1));
console.log(AddTheseNumbers2(5,10));


/* CONSTRUCTORS */

function Person (name, address, dob) {
    this.name = name;
    this.address = address;
    this.dob = dob;

    this.getNameLength = function () {
        return this.name.length;
    }
}

class Car {
    
    constructor(owner, brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.owner = owner;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getOwner() {
        return this.owner;
    }

    checkAffordability(amount) {
        if (amount >= this.price) {
            return 'You can afford this car!';

        } else {
            return 'This car is too expensive';
        }
    }
}

Person.prototype.getAddress = function() {
    return this.address;
}

let daniel = new Person(name = "Daniel Corcoran", address="3 Donut Lane", dob = "3-5-1992");

console.log(daniel);
console.log(daniel.getNameLength());
console.log(daniel.getAddress());

let freds_car = new Car(owner="Fred", brand='Mazda', model='Old Mazda', price=5000.00);

console.log(`Freds car is of brand ${freds_car.brand} and he bought it for ${freds_car.price}`)
console.log(freds_car.checkAffordability(amount=8000));
console.log(freds_car.getOwner());