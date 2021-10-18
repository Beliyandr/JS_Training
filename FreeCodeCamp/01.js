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
var myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';

//Constructing Strings with Variables
var myName = 'Andrey';
var myStr = 'My name is' + myName + 'and I am well!'

//Appending Variables to Strings
var someAdjective = 'JS HTML CSS';
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
var wordBlanks = myNoun + ',' + myVerb + ',' + myAdjective + ',' + 'or' +  ' ' + myAdverb;
console.log(wordBlanks);


//Store Multiple Values in one Variable using JavaScript Arrays

// myArray should be an array.

// Passed
// The first item in myArray should be a string.

// Passed
// The second item in myArray should be a number.

var myArray = ['sc', 3];

//!Nest one Array within Another Array
// myArray should have at least one array nested within another array.
var myArray = [['123',324], ['sam',555]];


//!Access Array Data with Indexes
var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData)
