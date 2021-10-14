'use strict';

/* Задача_1   century from year

Напиши функцию getCentury, которая принимает год (year) и возвращает век, в котором он находится. Обрати внимание, что летоисчисление начинается с 1 года н.э., поэтому 0 должен обрабатываться как первый год н.э. Например:

getCentury(2001) === 21;
getCentury(0) === 1;
getCentury(1786) === 18

function getCentury(year) {
  if (year !=0){
  return Math.ceil(year/ 100) ;
  }else return 1;

}



*/



/* Задача_2   convert currency

Сотрудникам Mate Exchange надоело конвертировать валюту на калькуляторе. Давай создадим функцию convertCurrency, которая будет принимать параметры, amount в гривнах, exchangeRate курс обмена, название currencyName желаемой валюты и возвращать строку Give them {{x}} {{currencyName}}('s). Функция должна проверять, что работник правильно заполнил параметры и возвращать ошибку Enter valid data если в параметрах amount и exchangeRate отрицательные значения или ноль. Если результат не целое число - округли значение до двух знаков после запятой.

Примеры:

convertCurrency(1000, 0.037, 'dollar') === 'Give them 37 dollar('s)'
convertCurrency(251, 0.15, 'zloty') === 'Give them 37.65 zloty('s)'
convertCurrency(-100, -0.034, 'bolivar') === 'Enter valid data'


function convertCurrency(amount, exchangeRate, currencyName) {
  let result = amount * exchangeRate;

  if (amount <= 0 
     || exchangeRate <= 0 
     ){
    return 'Enter valid data';
  }
else {
   return  `Give them ${+result.toFixed(2)} ${currencyName}('s)`;
}
}


*/

/** Задача _ 3 get rectangle area

Функция getRectangleArea принимает 1 сторону side, и диагональ diagonal прямоугольника. Проверь, является ли фигура прямоугольником (диагональ должна быть больше чем сторона). Думал математика не понадобится в жизни?

Верни площадь прямоугольника, округляя до 2 знаков после запятой, или строку not a rectangle, если это не прямоугольник.

Примеры:

getRectangleArea(10, 20) === 173.2
getRectangleArea(9, 18) === 140.29
getRectangleArea(100, 98) === 'not a rectangle'


function getRectangleArea(side, diagonal) {
  if (side >= diagonal || side <=0) {
    return 'not a rectangle';
  }
  const sideB = Math.sqrt(diagonal **2 - side ** 2 ) ;
  const area = side * sideB ;
  return +area.toFixed(2);
  




  // let side2 = Math.sqrt(diagonal*diagonal  - side*side),
  //     s = side * side2;
  //     if (+side >= +diagonal || side === 0 || diagonal === 0){
  //       return 'not a rectangle';
  //     }else {
  //       return +s.toFixed(2);
  //     }
}

*/

/** Задача_4 is even

Функция isEven принимает число number. Проверь, является ли число чётным (делится на 2 без остатка). Для чётных чисел верни true, для нечётныхfalse. Дробные числа не являются чётными.

Примеры:

isEven(100) === true
isEven(0) === true
isEven(77) === false
isEven(10.2) === false
isEven(-2) === true


function isEven(number) {
  if (number % 2 === 0  ){
    return true;
  }
    return false;
}


*/


/** Задача_5 make decision

Хороший день для пикника. Друзья решили выбраться в лес и отдохнуть. Приехав, они поняли что у них осталось очень мало топлива. Есть два варианта:

Позвонить знакомым и попросить привезти топливо.
Добраться до ближайшей заправочной станции самостоятельно.
Зная количество топлива, которое осталось fuelRemaining, расстояние в километрах до ближайшей заправки distance и расход топлива на 100км fuelСonsumption мы можем помочь людям принять решение при помощи функции makeDeсision.

Примеры:

makeDeсision(3, 34, 6.5) === 'reach gas station by themselves'
makeDeсision(0, 34, 6.5) === 'ask for help'
makeDeсision(-2, -30, 0) === 'please, enter the valid data.'


function makeDecision(fuelRemaining, distance, fuelConsumption) {
  const themselves = distance <= (fuelRemaining * 100) / fuelConsumption ;
  const help = distance > (fuelRemaining * 100) / fuelConsumption;
  const valid = fuelRemaining >= 0 
  && distance >= 0 
  && fuelConsumption > 0;

  if (themselves && valid ) {
    return 'reach gas station by themselves'
  }
  if (help && valid) {
    return 'ask for help';
  }
 return 'please, enter the valid data.';

}

*/


/* Задача_6 count networking

Раз в несколько месяцев Mate academy проводит networking вечеринку для всех студентов, выпускников и тех, кто только планирует начать обучение.

Иногда все идет не так, как хотелось бы и заведения закрываются на карантин. Слава богу карантин может быть только раз в году и только в начале года. Поэтому как только он заканчивается мы сразу проводим первую встречу.

Посчитай, сколько вечеринок проведёт Mate academy за год, зная длительность карантина в месяцах quarantineLength и частоту проведения вечеринок frequency (1 вечеринка каждые frequency месяцев).

Примеры:

countNetworking(0, 1) === 12 - каждый месяц
countNetworking(3, 1) === 9 - каждый месяц начиная с 4го
countNetworking(3, 2) === 5 - месяцы 4, 6, 8, 10 и 12
countNetworking(12, 1) === 0 - карантин на весь год
countNetworking(11, 3) === 1 - в последний месяц года
countNetworking (2, 5) === 2 - месяцы 3 и 8
countNetworking (3, 4) === 3 - месяцы 4, 8 и 12

function countNetworking(quarantineLength, frequency) {
 const contPartyMonth =  12 - quarantineLength;
 return  Math.ceil(contPartyMonth / frequency) ;
}


*/



