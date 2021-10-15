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
