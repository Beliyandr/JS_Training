//1 Understanding Case Sensitivity in Variables

// Variable declarations
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// // Variable assignments
// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// //2 Add Two Numbers with JavaScript

// var sum = 20 + 0;

// var myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

// var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// ES6

// 1.
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

// 2.Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // Only change code above this line
}
printManyTimes("freeCodeCamp");

// 3.Mutate an Array Declared with const

const s = [5, 7, 2];

function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

// 4.Prevent Object Mutation

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Concatenating Strings with the Plus Equals Operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//Constructing Strings with Variables
var myName = "Andrey";
var myStr = "My name is" + myName + "and I am well!";

//Appending Variables to Strings
var someAdjective = "JS HTML CSS";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Find the Length of a String
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
lastNameLength = 8;

//Word Blanks

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks =
  myNoun + "," + myVerb + "," + myAdjective + "," + "or" + " " + myAdverb;
console.log(wordBlanks);

//Store Multiple Values in one Variable using JavaScript Arrays

// myArray should be an array.

// Passed
// The first item in myArray should be a string.

// Passed
// The second item in myArray should be a number.

var myArray = ["sc", 3];

//!Nest one Array within Another Array
// myArray should have at least one array nested within another array.
var myArray = [
  ["123", 324],
  ["sam", 555],
];

//!Access Array Data with Indexes
var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

//!Manipulate Arrays With push()
// var arr1 = [1,2,3];
// arr1.push(4);

// var arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]]
var myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);

//!Manipulate Arrays With pop()
// Another way to change the data in an array is with the .pop() function.

// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

// var threeArr = [1, 4, 6];
// var oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);
// The first console.log will display the value 6, and the second will display the value [1, 4].

// Use the .pop() function to remove the last item from myArray, assigning the popped off value to removedFromMyArray.

// Setup
var myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
var removedFromMyArray = myArray.pop();

//! Manipulate Arrays With unshift()
// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Example:

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");
// After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

// Add ["Paul",35] to the beginning of the myArray variable using unshift().

var myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
myArray.unshift(["Paul", 35]);

//!Shopping List
var myList = [
  ["choco", 15],
  ["cofe", 20],
  ["milk", 11],
  ["tea", 33],
  ["water", 1],
];

// Write Reusable JavaScript with Functions

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

//Passing Values to Functions with Arguments
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

// Here is a function with two parameters, param1 and param2:

// function testFun(param1, param2) {
//   console.log(param1, param2);
// }

function functionWithArgs(par1, par2) {
  console.log(par1 + par2);
}

functionWithArgs(1, 2);

//Global Scope and Functions
// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

// Variables which are declared without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

// Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

var oopsGlobal = 5;
var myGlobal;

function fun1() {
  myGlobal = 10;
  // Assign 5 to oopsGlobal Here
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

// Here is a function myTest with a local variable called loc.

// function myTest() {
//   var loc = "foo";
//   console.log(loc);
// }
// myTest();
// console.log(loc);
// The myTest() function call will display the string foo in the console. The console.log(loc) line will throw an error, as loc is not defined outside of the function.

// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

// Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

function myLocalScope() {
  var myVar;

  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);

//Global vs. Local Scope in Functions
// In this example:

// var someVar = "Hat";
// function myFun() {
//   var someVar = "Head";
//   return someVar;
// }

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
