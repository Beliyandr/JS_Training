'use strict';
//  ЗАДАЧА_1 **************
/*  ЗАДАЧА_1 **************
//   Задача _ 2
//   Испанский стыд ... Вот здесь наделали дел. Не в службу, а в дружбу, помоги это переписать на switch case, тебе практика, а нам чистый код.

//   function getTask(weekday) {
//   if (weekday === 'monday') {
//     return 'Write a new module for the program';
//   } else if (weekday === 'tuesday') {
//     return 'Test the module and find bugs';
//   } else
//   if (weekday === 'wednesday') {
//     return 'Write a new module for the program';
//   } else if (weekday === 'thursday') {
//     return 'Test the module and find bugs';
//   } else if (weekday === 'friday') {
//     return 'You need to meet the boss today';
//   } else
//   if (weekday === 'saturday') {
//     return 'Spend the evening with your friends';
//   } else
//   if (weekday === 'sunday') {
//     return 'Go to the movies in the evening';
//   } else {
//     return 'Entered the wrong day of the week';
//   }
// }


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

 */

/*//  Задача_ 2******************
//  Задача_ 2

//  Если взглянуть на банковскую карту можно заметить на ней 8-10 значный код. Что означают эти цифры? Первые 4 числа означают платежную систему в которой работает ваша карта. Например, если номер карты начинается с:

// 34, 37 это платежная система American Express;
// 4 это VISA
// 51, 52, 53,54, 55 это MasterCard
// 63, 67 это Maestro
// Там есть и другие платежные системы, но сейчас предлагаю создать функцию getPaymentSystem, которая поможет нам определять банковскую систему по коду карты в начале.

// Пример:

// getPaymentSystem(4) возвращает VISA;
// getPaymentSystem(37) возвращает American Express;
// getPaymentSystem(1234) возвращает unknown payment system;

const getPaymentSystem = (card) => {
  switch (card){
    case 34:
    case 37:
  return 'American Express';

    case 4:
    return 'VISA';

    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    return 'MasterCard';

    case 63:
    case 67:
    return 'Maestro';

    default:
    return 'unknown payment system'
  }
}

*/


// задача _ 3 ********************
/*
//   В Mate academy мы обучаем не только людей, но и роботов. Оказывается учить роботов даже сложнее чем людей!

// Вчера, когда мы скомандовали роботу идти прямо, что-то пошло не так, и он пошел налево. Весна? Думаю нет. Скорее была ошибка в коде.

// Наш робот принимает команду в виде строки back,forward, left, right, stop. Далее своими кибер мозгами он молниеносно конвертирует значение в координаты x и y и посылает импульс в свои робоконечности в виде строки hor=x ver=y.

// Так, например, команда left это сигнал -1 для x и сигнал 0 для y, а forward это сигнал 0 для x и сигнал 1 для y. Ну что, поможешь нам научить робота ходить правильно?

// Напиши функцию getDirection, которая принимает строку direction с направлением движения и возвращать строку в формате hor=x ver=y. Если же комнада не знакома роботу, то x и y будут равны 0.

// Но учти, что наш робот еще не изучил conditional operators, поэтому придется использовать switch case.

const getDirection = (direction) => {

  switch (direction){
    case 'back':
    return 'hor=0 ver=-1';

    case 'forward':
    return 'hor=0 ver=1';

    case 'left':
    return 'hor=-1 ver=0';

    case 'right':
    return 'hor=1 ver=0';

    case 'stop':
    return 'hor=0 ver=0';

    default:
    return 'hor=0 ver=0';
  }
}

*/