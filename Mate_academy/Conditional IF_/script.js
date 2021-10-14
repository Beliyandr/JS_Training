'use strict';

/* Задача №2 ******

Все официанты любят чаевые!

Один из них поделился с нами секретным рейтингом в зависимости от оставленной суммы amount:

terrible - amount в размере 0 грн
poor - 0 <amount <= 10 грн
good - 10 <amount <= 20 грн
great - 20 <amount <= 50 грн
excellent - amount > 50 грн
Реализуй функцию getTipsRating, которая принимает сумму чаевых amount, и возвращает строку-оценку с рейтинга выше: terrible, poor, good, great или excellent

*/

function getTipsRating(amount) {
    // write your code here
    if (amount === 0) {
        return 'terrible';
    }
    if (0 < amount <= 10) {
        return 'poor';
    }
    if (10 < amount <= 20) {
        return 'good';
    }
    if (20 < amount <= 50) {
        return 'great';
    }
    if (amount > 50) {
        return 'excellent';
    }
}


/* ЗАДАЧА№ 3 

Создай функцию getLargestExpressionResult, которая принимает два числа a и b и возвращает наибольший возможный результат среди выражений:

a + b
a - b
a * b
a / b
ограничения:

Имей в виду, что a и b могут быть отрицательными.
Не используй тернарный оператор или ключевое слово else.
Не используй объект Math.

*/

const getLargestExpressionResult = (a, b) => {
    let addition = a + b,
        subtraction = a - b,
        division = a / b,
        multiplication = a * b;
    if (addition > subtraction &&
        addition > division &&
        addition > multiplication)
        return addition;

    if (subtraction > addition &&
        subtraction > division &&
        subtraction > multiplication)
        return subtraction;

    if (division > addition &&
        division > subtraction &&
        division > multiplication)
        return division;

    return multiplication;
}

/**Задача №4
 * Никто не любит платить налоги, но мы обязаны!

Создай функцию calculateTaxes, которая рассчитывает сумму налогов исходя из объема доходов income. Используй 3-х ступенчатую модель налогообложения:

часть income до 1000 облагается налогом 2%
часть income от 1000 до 10000 - 3%
всё что больше 10000 - 5%
 */
const calculateTaxes2 = (income) => {
    let tax1 = 0.02,
        range1 = 1000,
  
        tax2 = 0.03,
        range2 = 10000,
  
        tax3 = 0.05;
  
  
  
    if (income <= range1){
      return income * tax1 ;
    } 
  let difference = income - range1 ;
  
    if (difference <= range2){
    return (range1 * tax1) + (difference * tax2);
    }
    difference =  income - range2;
    return (range1 * tax1) + ((range2 - range1) * tax2) + (difference * tax3);
  }


  /*  *********************************************  */

  /* SWITCH  */
/*  ЗАДАЧА_1  ( SWITCH - сравнивает на true )
  const value = 2;

  if(value ===5) {
      console.log('A few');
  } else if (value ===10) {
      console.log('Many');
  }else {
      console.log('Some');
  }

  switch (true) {
      case (value < 5):
        console.log('A few');
        break;

    case value > 10: 
        console.log('Many');
        break;
    
    default:
        console.log('Some');
  }

  */

  /* Задача _ 2
  Испанский стыд ... Вот здесь наделали дел. Не в службу, а в дружбу, помоги это переписать на switch case, тебе практика, а нам чистый код.

  function getTask(weekday) {
  if (weekday === 'monday') {
    return 'Write a new module for the program';
  } else if (weekday === 'tuesday') {
    return 'Test the module and find bugs';
  } else
  if (weekday === 'wednesday') {
    return 'Write a new module for the program';
  } else if (weekday === 'thursday') {
    return 'Test the module and find bugs';
  } else if (weekday === 'friday') {
    return 'You need to meet the boss today';
  } else
  if (weekday === 'saturday') {
    return 'Spend the evening with your friends';
  } else
  if (weekday === 'sunday') {
    return 'Go to the movies in the evening';
  } else {
    return 'Entered the wrong day of the week';
  }
}
  */

function getTask(weekday) {
    if (weekday === 'monday') {
      return 'Write a new module for the program';
    } else if (weekday === 'tuesday') {
      return 'Test the module and find bugs';
    } else
    if (weekday === 'wednesday') {
      return 'Write a new module for the program';
    } else if (weekday === 'thursday') {
      return 'Test the module and find bugs';
    } else if (weekday === 'friday') {
      return 'You need to meet the boss today';
    } else
    if (weekday === 'saturday') {
      return 'Spend the evening with your friends';
    } else
    if (weekday === 'sunday') {
      return 'Go to the movies in the evening';
    } else {
      return 'Entered the wrong day of the week';
    }
  }
  console.log(getTask('tuesday'));

  function getTask2(weekday) {
    switch (weekday){
        case 'monday':
            return 'Write a new module for the program';

        case 'tuesday':
            return 'Test the module and find bugs';
            
        case 'wednesday':
        return 'Write a new module for the program';

        case 'thursday':
        return 'Test the module and find bugs';

        case 'friday':
        return 'You need to meet the boss today';
        
        case 'saturday':
        return 'Spend the evening with your friends';
        
        case 'sunday':
        return 'Go to the movies in the evening';

        default: 
            return 'Entered the wrong day of the week';
    }
  }

  console.log(getTask2('wednesday'));