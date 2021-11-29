//! 3 Prevent Object Mutation
// As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

// Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.

// let obj = {
//   name:"FreeCodeCamp",
//   review:"Awesome"
// };
// Object.freeze(obj);
// obj.review = "bad";
// obj.newProp = "Test";
// console.log(obj);
// The obj.review and obj.newProp assignments will result in errors, because our editor runs in strict mode by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS);

//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions
// In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

// To achieve this, we often use the following syntax:

// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }
// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

// const myFunc = () => {
//   const myVar = "value";
//   return myVar;
// }
// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

// const myFunc = () => "value";
// This code will still return the string value by default.

// Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

const magic = () => {
  return new Date();
};

//! 5 Write Arrow Functions with Parameters
// Just like a regular function, you can pass arguments into an arrow function.

// const doubler = (item) => item * 2;
// doubler(4);
// doubler(4) would return the value 8.

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

// const doubler = item => item * 2;
// It is possible to pass more than one argument into an arrow function.

// const multiplier = (item, multi) => item * multi;
// multiplier(4, 2);
// multiplier(4, 2) would return the value 8.

// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//! 6 Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// Check out this code:

// const greeting = (name = "Anonymous") => "Hello " + name;

// console.log(greeting("John"));
// console.log(greeting());
// The console will display the strings Hello John and Hello Anonymous.

// The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

//! 7 Use the Rest Parameter with Function Parameters
// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

// Check out this code:

// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));
// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

//! 8 Use the Spread Operator to Evaluate Arrays In-Place
// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

// The ES5 code below uses apply() to compute the maximum value in an array:

// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);
// maximus would have a value of 89.

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

// const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr);
// maximus would have a value of 89.

// ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

// const spreaded = ...arr;
// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

//! 9  Use Destructuring Assignment to Extract Values from Objects
// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

// Consider the following ES5 code:

// const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;
// name would have a value of the string John Doe, and age would have the number 34.

// Here's an equivalent assignment statement using the ES6 destructuring syntax:

// const { name, age } = user;
// Again, name would have a value of the string John Doe, and age would have the number 34.

// Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

// You can extract as many or few values from the object as you want.

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
