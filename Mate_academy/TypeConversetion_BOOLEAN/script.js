'use strict';

/*
// Значения FALSE - преобразаются только примитивные  значения
let condition = false ;
    condition = 0;
    condition = NaN;
    condition = 0n;
    condition = '';
    condition = null;
    condition = undefined;

    //  Все значения которые являются объектами преобразуются в TRUE

    condition = {};   // TRUE
    condition = [];   // TRUE
    condition = function() {};  // TRUE


console.log(
  Boolean(condition),
  !!12   // двойное логическое отрицание для переведения значения в TRUE
);

if (condition){
  console.log('Hello');
}

*/

    //  Conversion to number      ***************************  
/*
const value = '1.5f00.0sa';

console.log(Number(value), 'Number'); //Строгое приведение к числу | если строка правильно записана для переведения строки в число
console.log(+value, '+');

console.log(parseFloat(value), 'parseFloat');
console.log(parseInt(value), 'parseInt');
*/
// Conversion to string **************

const x = 12345;

console.log(x);


console.log(
  String(x),
  x.toString(),
  '' + x,
  `${x}`
);



