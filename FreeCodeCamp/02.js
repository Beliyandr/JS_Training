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

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// // Only change code below this line

// const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

// ! 10 Use Destructuring Assignment to Assign Variables from Objects
// Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

// Using the same object from the last example:

// const user = { name: 'John Doe', age: 34 };
// Here's how you can give new variable names in the assignment:

// const { name: userName, age: userAge } = user;
// You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34.

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

//! 11 Use Destructuring Assignment to Assign Variables from Nested Objects
// You can use the same principles from the previous two lessons to destructure values from nested objects.

// Using an object similar to previous examples:

// const user = {
//   johnDoe: {
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com'
//   }
// };
// Here's how to extract the values of object properties and assign them to variables with the same name:

// const { johnDoe: { age, email }} = user;
// And here's how you can assign an object properties' values to variables with different names:

// const { johnDoe: { age: userAge, email: userEmail }} = user;
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line
// const {
//   today: { low: lowToday, high: highToday },
// } = LOCAL_FORECAST;

// const {
//   today: { low, high },
// } = LOCAL_FORECAST;
// // Only change code above this line

// console.log(LOCAL_FORECAST.today);
// console.log(lowToday);
// console.log(low);
// console.log(high);

//! 12 Use Destructuring Assignment to Assign Variables from ArraysPassed
// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);
// The console will display the values of a and b as 1, 2.

// The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);
// The console will display the values of a, b, and c as 1, 2, 5.

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8,
  b = 6;
// Only change code below this line
[a, b] = [b, a];

//! 13 Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);
// The console would display the values 1, 2 and [3, 4, 5, 7].

// Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list;

  return arr;
}
const arr = removeFirstTwo(source);

//! 13 Use Destructuring Assignment to Pass an Object as a Function's Parameters
// In some cases, you can destructure the object in a function argument itself.

// Consider the code below:
// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;

// }
// This effectively destructures the object sent into the function. This can also be done in-place:

// const profileUpdate = ({ name, age, nationality, location }) => {

// }
// When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

// Use destructuring assignment within the argument to the function half to send only max and min inside the function.

// Используйте назначение деструктуризации для передачи объекта в качестве параметров функции В некоторых случаях вы можете деструктурировать объект в самом аргументе функции. Рассмотрим код ниже:

// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;

// }
// Это эффективно разрушает объект, отправленный в функцию. Это также можно сделать на месте:
// const profileUpdate = ({ name, age, nationality, location }) => {

// }
// Когда profileData передается в указанную выше функцию, значения деструктурируются из параметра функции для использования внутри функции. Используйте деструктурирующее присвоение в аргументе функции half, чтобы отправлять только max и min внутри функции.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

//! 14 Create Strings using Template Literals
// A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

// Consider the code below:

//* Создание строк с использованием шаблонных литералов Новой особенностью ES6 является литерал шаблона. Это особый тип строки, упрощающий создание сложных строк. Литералы шаблонов позволяют создавать многострочные строки и использовать функции интерполяции строк для создания строк. Рассмотрим код ниже:

// const person = {
//   name: "Zodiac Hasbro",
//   age: 56
// };

// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// console.log(greeting);

// The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old..

// A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.

// Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

// Use an iterator method (any kind of loop) to get the desired output (shown below).

// На консоли отобразятся строки Привет, меня зовут Зодиак Хасбро! а мне 56 лет .. Там много чего произошло. Во-первых, в примере для обертывания строки используются обратные кавычки (`), а не кавычки ('или"). Во-вторых, обратите внимание, что строка является многострочной как в коде, так и в выводе. Это позволяет избежать вставки \ n внутри строк. Синтаксис $ {variable}, использованный выше, является заполнителем. По сути, вам больше не придется использовать конкатенацию с оператором +. Чтобы добавить переменные в строки, вы просто перетащите переменную в строку шаблона и оберните ее с помощью $ {и }. Точно так же вы можете включить другие выражения в свой строковый литерал, например $ {a + b}. Этот новый способ создания строк дает вам больше гибкости для создания надежных строк. Используйте синтаксис литерала шаблона с обратными кавычками, чтобы создать массив строк элементов списка (li). Текст каждого элемента списка должен быть одним из элементов массива из свойства отказа объекта результата и иметь атрибут класса со значением text-warning. Функция makeList должна возвращать массив строк элементов списка. Используйте метод итератора (любой цикл), чтобы получить желаемый результат (как показано ниже).

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  let failureItems = [];
  // Only change code above this line

  arr.forEach((item) => {
    failureItems.push(`<li class="text-warning">${item}</li>`);
  });
  return failureItems;
}

const failuresList = makeList(result.failure);

//! 15  Write Concise Object Literal Declarations Using Object Property Shorthand
// ES6 adds some nice support for easily defining object literals.

// Consider the following code:

// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });
// getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

// const getMousePosition = (x, y) => ({ x, y });
// Use object property shorthand with object literals to create and return an object with name, age and gender properties.
{
  const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender,
    };
    // Only change code above this line
  };
}

{
  //! 16 Write Concise Declarative Functions with ES6
  // When defining functions within objects in ES5, we have to use the keyword function as follows:

  // const person = {
  //   name: "Taylor",
  //   sayHello: function() {
  //     return `Hello! My name is ${this.name}.`;
  //   }
  // };
  // With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

  // const person = {
  //   name: "Taylor",
  //   sayHello() {
  //     return `Hello! My name is ${this.name}.`;
  //   }
  // };
  // Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

  // Написание кратких декларативных функций с помощью ES6 При определении функций внутри объектов в ES5 мы должны использовать ключевое слово function следующим образом: const person = { имя: "Тейлор", sayHello: function () { return `Привет! Меня зовут $ {this.name} .`; } }; В ES6 вы можете полностью удалить ключевое слово функции и двоеточие при определении функций в объектах. Вот пример этого синтаксиса: const person = { имя: "Тейлор", скажи привет() { return `Привет! Меня зовут $ {this.name} .`; } }; Выполните рефакторинг функции setGear внутри объекта Bike, чтобы использовать сокращенный синтаксис, описанный выше.

  const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    },
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
}

