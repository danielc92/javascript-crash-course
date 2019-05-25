# Javascript Crash Course
Following some tutorials from Javascript crash course produced by Traversy Media.

# Concepts
The format for this section will follow along the lines of what the topic is, followed by what I learned.

### What is javascript
- Javascript is primarily a scripting language, most present in web development
- It is dynamically typed like python
- It can be used as a backend (Node.js)
- It can be used frontend (React.js, Vue.js, Tensorflow.js)
- Variables and functions need to end with a semicolin `;`

### Logging to console
- `console` can be used to print statements to console using `log()` method
- It can also be used to display warnings, errors and general debugging 

### Variables
- There are several ways you can instantiate variables (`let`, `var`, `const`)
- const does not change and must be assigned a value from its inception
- let can be modified
- var is globally available and for this reason is not recommended
- There are also several types of variables (`str`, `number`, `boolean`, `null`, `undefined`)
- `typeof` can be used to infer the type of a variable

### Properties
- Properties are associated with objects
- They do not have parenthesis unlike functions
- For example a string object has the property `length`, which can be accessed like so; `console.log(string.length);`

### Object Methods
- Methods are usually used to either mutate the object or give some information about the object
- Methods are denoted by the parenthesis `()` following a class object variable

### Arrays
- Arrays can be created using closed brackets of via the `Array` class
- Synonymous with lists from `python`
- Arrays can contain multiple data types
- Arrays can be nested
- Arrays start at `0` index
- Arrays have many useful built in methods
    - `push()` can append items to the end arrays
    - `pop()` can remove the last item from array
    - `indexOf()` can be used to return the index of an item (it does not return multiple indices)
    - `sort()` can sort an array a-z
    - `reverse()` (not the opposite of `sort()`) can be used to reverse the *order* of an array

### Object Literals
- Consist of key value pairs
- They can be highly nested in nature
- They can be 'stringified' to JSON strings (suitable for API services)
- Synonymous with dictionaries from `python`
- New items can be set with `[key]` notation or with `.key`
- Items can be accessed by their key
- Items can be arrays or object literals, as well as strings, numbers, booleans, nulls etc

### Looping
- Looping through arrays can be done in a magnitude of ways
    - A basic for loop `for (let i=0; i<array.length; i++)`
    - Using the `forEach` method
    - Using a simplified loop syntax `for (let item of array)`
    - Using the `map` method or `filter` (functional programming methods)

### Conditionals
- Conditionals are used to evaluate conditions based on and/or statements
    - conditions can be evaluated using an `if` loop
    - or statements can be denoted by `||`
    - and statements can be denoted by `&&` or a nested `if else`

### Functions
- Functions should have an input(s) and an output (return)
- Functions can be written using *arrow statements* with the `=>`
    - const func_name = (args) => { so something}
- Functions can also be written using the `function` keyword
    - function func_name (args) { do something }

### Classes
- Classes can be created in several ways;
    - With the `Class` keyword. This method is more readable and is more similar to the way python Classes are represented. 
    - With the `function` keyword
- `this` is used to refer to a class property (similar to `self` in python)
- `prototype` can be used to add methods to a `Class`
- `constructor` can be used to add initializing instructions to a `Class` when using the `Class` keyword to create the `Class` blueprint.

### The DOM
- Document Object Model (`document`) allows to select objects from the dom and manipulate them in real time.
- Generally speaking there are two methods of accessing HTML through the DOM
    - `document.getElementsByClassName`
    - `document.querySelectorAll`
- Multiple results can be returned in array format using `querySelectorAll` or `getElementsByClassName`
    - With querySelectors you can specify a prefix `#` for id, `.` for class (similar to referencing in `.css` files)
    - With getElementsByClassName you can simply specifiy the class name without any prefix
    - Both these methods return different types, where one is a `NodeList` and one is a `HTMLCollection`. The `NodeList` can use `Array` methods
- Single result can be returns by usign `getElementById` or `querySelect`
- The text or HTML of a node can be returned by accessing the `innerHTML` or `innerText` methods
- New nodes can be created and appened to existing HTML Tags using `appendChild`, `createTextNode` and `createElement` methods respectively.


# Contributors
- Daniel Corcoran

# Sources 
[JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c)