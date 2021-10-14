'use strict';

//! 1.Создание массивов 

// let arr = [10, 20, 30, 40]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }


// let number = new Array(1, 2, 3, 4);

// for (let value of number) {
//   console.log(value);
// }


// console.log(arr);
//////////////////////////////////////////////////////
//! Задание 1  make stickers

// Наши роботы научились ходить! Пришло время запускать массовое производство! Чтобы роботы на линии собирались правильно, нужно маркировать детали. Для начала будет достаточно обычных наклеек. Разные части робота будут состоять из разного количества деталей.

// Напиши программу для принтера makeStickers, которая принимает число detailsCount и строку robotPart. Функция должна возвращать массив строк в следующем формате: {{partOfRobot}} detail #{{n}}.

// Если detailsCount = 0, верни пустой массив.

// Примеры:

// makeStickers(3, 'Body') === ['Body detail #1', 'Body detail #2', 'Body detail #3']
// makeStickers(4, 'Head') === ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
// makeStickers(0, 'Foot') === []

//----------

// function makeStickers(detailsCount, robotPart) {
//   let count = [];
//   if (detailsCount === 0) {
//     return count;
//   }
//    for (let i = 1; i<=detailsCount; i++){
//      count.push(`${robotPart} detail #${i}`)
//    }
//    return count;
// }
////////////////////////////////////////////////////////////

//! Задание 2  double power
// Наклейки готовы? Хорошо, нужно увеличивать производительность наших линий в два раза! Раньше мы там только попкорн готовили.

// Напиши функцию doublePower, которая принимает массив мощностей currentPowers и возвращает новый массив удвоенных мощностей.

// Примеры:

// doublePower([100, 150, 200, 220]) === [200, 300, 400, 440]
// doublePower([45, 34, 56, 67]) === [90, 68, 112, 134]
// doublePower([]) === []

//---------

// function doublePower(currentPowers) {
//   let arr= [];
//   if(currentPowers.length === 0 ){
//     return arr;
//   }
//   for(let value of currentPowers){
//     arr.push(value*2);
//   }
//   return arr;
// }

//-----------------------------------------------------

//Задача 3 is sorted 

// Пока у нас достаточно роботов, давайте научим их сортировать коробки на складе. Все коробки пронумерованы, и роботы учатся сортировать их по возрастанию.

// Но сортировка — дело нелёгкое, иногда случаются ошибки. Поэтому нам пока придется проверять правильно ли робот отсортировал коробки.

// Напиши функцию isSorted, которая получает массив номеров и возвращает true или false. (Номера только числовые, но могут повторяться)

// Примеры:

// isSorted([1, 2, 3, 4, 5]) === true
// isSorted([0, 1, 1, 1, 2]) === true
// isSorted([1, 5, 7]) === true
// isSorted([1, 2, 11]) === true
// isSorted([5]) === true
// isSorted([]) === true
// isSorted([0, 3, 1, 2, 2, 2]) === false
// isSorted([1, 11, 2]) === false
// isSorted([5, 3]) === false

// function isSorted(boxNumbers) {
//   if(boxNumbers.length <= 1){
//     return true;
//   }
//  for (let i = 0; i < boxNumbers.length-1; i++) {
// if(boxNumbers[i] > boxNumbers[i+1]){
// return false
// }
//  }
//  return true
// }

// isSorted([0, 3, 1, 2, 2, 2]);

//***************************************************** */

// Наши инженеры сейчас ищут баг, который заставляет роботов истреблять человечество...

// А мы пока выпустим обновление. Раньше мы научили роботов понимать команды и конвертировать направление движения в правильный сигнал:

// 'forward' в x + 0 и y + 1
// 'back' в x + 0 и y - 1
// 'right' в x + 1 и y + 0
// 'left' в x - 1 и y + 0
// Было бы здорово, чтобы робот знал, где он сейчас находится даже без GPS.

// Напиши функцию getLocation, которая принимает массив начальных координат coordinates (в виде [x, y]) и массив истории команд commands, и возвращает массив конечных координат робота в том же формате ([x, y]).

// Например:

// coordinates = [2, 1]
// commands = ['left', 'back', 'back']

// Координаты после первой команды: [1, 1] // 1 шаг влево
// Координаты после второй команды: [1, 0] // 1 шаг назад
// Координаты после третьей команды: [1, -1] // 1 шаг назад

// Результатом будет [1, -1]
// Другие примеры:

// getLocation([0, 0], ['forward', 'right']) === [1, 1]
// getLocation([2, 3], ['back', 'back', 'back', 'right']) === [3, 0]
// getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']) === [0, 3]

//

// function getLocation(coordinates, commands) {
//   let x = coordinates[0];
//   let y = coordinates[1];

//   for (let value of commands) {
//     if (value === 'forward') {
//       y += 1;
//     } else if (value === 'back') {
//       y -= 1;
//     } else if (value === 'right') {
//       x += 1;
//     } else if (value === 'left') {
//       x -= 1;
//     }

//   }
//   return [x, y];
// }

// console.log(getLocation([1, 1], ['forward']));

//------------------------------------------------------------

// Задача №5 
// get plan

// Итак, когда все процессы настроены, нужно ставить перед собой правильные цели. Наши роботы лучшие на рынке, поэтому нужно наращивать обороты и увеличивать объемы производства.

// Давай напишем функцию getPlan, которая составит план производства на заданное количество месяцев months. Сейчас мы производим currentProduction роботов в месяц и хотим, чтобы каждый месяц это число росло на заданный процент percent.

// Если число роботов оказывается дробным, то мы округляем его вниз (Math.floor(result)), и так каждый месяц. В результате мы получим массив с целями на ближайшие месяцы.

// Примеры:

// getPlan(1000, 6, 30) === [1300, 1690, 2197, 2856, 3712, 4825]
// getPlan(500, 3, 50) === [750, 1125, 1687]

// function getPlan(currentProduction, months, percent) {
//   let curentPlan = [];
//   let increase = currentProduction;
//   for (let i = 0; i < months; i++) {
//     increase = increase + (Math.floor(increase * percent / 100));
//     curentPlan.push(increase);
//   }
//   console.log(curentPlan)
//   return curentPlan;
// }

// getPlan(1000, 6, 30);

//Задача № 6 
// Первая партия роботов готова, теперь их надо проверить. Все роботы уникальны, поэтому скорость перемещения у каждого своя. Ошибка в коде? Возможно. Но сейчас не до этого. Нужно определить минимальную, максимальную и среднюю скорость роботов.

// Наш сервер получает массив скоростей роботов testResults, пропускает его через функциюgetSpeedStatistic и возвращает статистику в виде массива.

// Первый элемент результирующего массива — самая низкая скорость
// второй — самая высокая
// третий — средняя скорость, округлённая вниз (используй Math.floor(result))
// Примеры:

// getSpeedStatistic([10, 10, 11, 9, 12, 8]) === [8, 12, 10]
// getSpeedStatistic([10]) === [10, 10, 10]
// getSpeedStatistic([]) === [0, 0, 0]
// getSpeedStatistic([8, 9, 9, 9]) === [8, 9, 8]
// getSpeedStatistic([5]) === [5, 5, 5]

// function getSpeedStatistic(testResults) {
//   let statistics = [];
//   let maxSpeed = Math.max(...testResults);
//   let minSpeed = Math.min(...testResults);
//   let summ = 0;
//   let middleSpeed = 0;
//   if (testResults.length === 0) {
//     maxSpeed = 0;
//     minSpeed = 0;
//     middleSpeed = 0;
//   } else {

//     for (const num of testResults) {
//       summ += num
//     }
//     middleSpeed = Math.floor(summ / testResults.length);

//   }
//   statistics.push(minSpeed, maxSpeed, middleSpeed);
//   return statistics;
// }

// getSpeedStatistic([10, 10, 11, 9, 12, 8]);

//Вариант преподавателя
// function getSpeedStatistic(testResults) {
//   if (testResults.length === 0) {
//     return [0, 0, 0, ]
//   }

//   let min = testResults[0];
//   let max = testResults[0];
//   let sum = 0;

//   for (const speed of testResults) {
//     sum += speed;
//     if (speed < min) {
//       min = speed;
//     }
//     if (speed > max) {
//       max = speed;
//     }
//   }
//   const average = Math.floor(sum / testResults.length);

//   console.log([min, max, average]);

//   return [min, max, average];


// }
// getSpeedStatistic([10, 10, 11, 9, 12, 8]);

//Задача_7
// compare robots

// Роботы протестированы. Медленные роботы отправлены на апгрейд. Mate Post хочет купить у нас десяток роботов для доставки грузов по городу. Для этого им нужны роботы, которые будут переносить за день больше всего груза.

// Давай напишем функцию compareRobots, которая получает два массива. Первый массив firstRobotResults - это веса грузов, перевезённых за день первым роботом, второй secondRobotResults - соответственно вторым.

// Проверь, кто из роботов перевёз больший вес, и верни строку с рекомендацией, кого из роботов стоит взять (см. примеры).

// Примеры:

// compareRobots([12, 4, 13], [1, 1, 4, 5, 12]) === 'First robot for sale!' - 29 > 23
// compareRobots([9, 7, 9], [1, 3, 4, 5, 12]) === 'Both robots for sale!' - 25 = 25
// compareRobots([1, 3, 4], [1, 1, 4, 5]) === 'Second robot for sale!' - 8 < 11

// function compareRobots(firstRobotResults, secondRobotResults) {
//   let firstRes = 0;
//   let secondRes = 0;
//   for (const res of firstRobotResults) {
//     firstRes += res;
//   }
//   for (const res of secondRobotResults) {
//     secondRes += res;
//   }
//   if (firstRes > secondRes) {
//     return 'First robot for sale!'
//   }
//   if (firstRes === secondRes) {
//     return 'Both robots for sale!'
//   }else{
//      return 'Second robot for sale!'
//   }
// }


//Вариант препода
// function compareRobots(firstRobotResults, secondRobotResults) {

//   const firstTotal = getTotalWeight(firstRobotResults);
//   const SecondTotal = getTotalWeight(secondRobotResults);

//   if (firstTotal > SecondTotal) {
//     return 'First robot for sale!';
//   }
//   if (firstTotal < SecondTotal) {
//     return 'Second robot for sale!';
//   }
//   return 'Both robots for sale!';
// }

// function getTotalWeight(weights) {
//   let total = 0;
//   for (const weight of weights) {
//     total += weight;
//   }
//   return total;
// }

// console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12]));

//***************************************************************** */

//ЗАДАЧКИ________________________________
// //1,
// Напиши функцию splitString, которая принимает строку и возвращает массив строк из двух символов. Если строка содержит нечетное количество символов, тогда второй символ нужно заменить на подчеркивание ("_").

// Пример:

// splitString('abc') === ['ab', 'c_']
// splitString('abcdef') === ['ab', 'cd', 'ef']

// function splitString(str) {
//   let newArr = [];
//   let newStr = '';

//   for (let i = 0; i < str.length; i++) {
//     newStr += str[i];
//     if (newStr.length > 1) {
//       newArr.push(newStr);
//       newStr = '';
//     }

//   }
//   if (str.length % 2 !== 0) {
//     newArr.push(str[str.length-1] + '_')
//   }
//   return newArr
// }


// console.log(splitString('abcasdasdsa'));
//************************************************ */

// Задачка 2 

// Scrolling text

// Создай функцию scrollingText, которая принимает строку как параметр, последовательно переставляет все символы в строке с нулевого индекса на последний и возвращает массив с полученными комбинациями в этой строке в верхнем регистре.

// Пример

// scrollingText("robot")

// Возвращает:
// [ "ROBOT",
//   "OBOTR",
//   "BOTRO",
//   "OTROB",
//   "TROBO" ]

// function scrollingText(word) {
//   let wordsArr = [];
//   for (let i = 0; i < word.length; i++) {
//     if (i === 0) {
//       wordsArr.push(word.toUpperCase());
//     } else {
//       word = (word.slice(1) + word.slice(0, 1));

//       wordsArr.push(word.toUpperCase());
//     }
//   }
//   return wordsArr;
// }

// console.log(scrollingText('word'));


// Задачка 3

// Создайте функцию checkNumber, которая проверяет число по трем различым свойствам:

// это число положительное?
// это число четное?
// это число кратно 10?
// Функция checkNumber должна вернуть массив с результатами проверок в виде булевых значений.

// Число всегда будет целым.

// Пример:

// const number = 3;

// checkNumber(number); // return [true, false, false]
// const number = 10;

// checkNumber(number); // return [true, true, true]
// const number = 0;

// checkNumber(number); // return [false, true, true]
// const number = -1;

// checkNumber(number); // return [false, false, false]

// function checkNumber(number) {
//   let positive = (number > 0);
//   let even = (number % 2 === 0);
//   let multiples = (number % 10 === 0);
//   let result = [];
//   result.push(positive, even, multiples);

//   return result;
// }

// console.log(checkNumber(-1));

//Задачка 4
// Реализуй функцию getArraysSum, которая принимает два массива чисел одинаковой длины, и возвращает сумму всех элементов этих массивов.

// Пример:

// getArraysSum([1, 2], [3, 4]) === 10  // 1 + 2 + 3 + 4 = 10
// getArraysSum([], []) === 0

// function getArraysSum(arr1, arr2) {
//   let array = [...arr1, ...arr2]
//   let sum = 0;
//   for (let char of array) {
//     sum += char
//   }
//   return sum;

// }

// console.log(getArraysSum([1, 2, 3], [4, 4, 4]));


// Задачка 5
// Реализуй функцию combineArrays, которая принимает 2 массива чисел(first и second) и возвращает массив чисел где N[i] это сумма чисел first[i] и second[i].

// Примечания:

//   Входные массивы всегда одинакового размера.
// Примеры:

//   combineArrays([1, 2, 5], [3, 6, 1]) === [4, 8, 6]
// combineArrays([1], [6]) === [7]
// combineArrays([], []) === []

// function combineArrays(first, second) {
//   let result = [];
//   let sum = 0;

//   if (first.length === 0) {
//     return result;
//   }
//   for (let i = 0; i < first.length; i++) {
//     sum = first[i] + second[i];
//     result.push(sum);
//   }
//   return result;
// }

// console.log(combineArrays([2, 3, 4], [3, 2, 2]));

// Задачка 6
// Реализуй функцию isJumping, которая принимает число number и возвращает строку JUMPING, если каждая цифра в числе отличается от соседней на 1. Если условие не выполняется - строку NOT JUMPING.

// Примечания:

//   Входное число всегда положительное
// Разница между 9 и 0 не является 1
// Все числа, которые состоят из одной цифры - JUMPING
// Примеры:

//   isJumping(9) === 'JUMPING'
// It 's single-digit number
// isJumping(79) === 'NOT JUMPING'
// Adjacent digits don 't differ by 1
// isJumping(23454) === 'JUMPING'
// Adjacent digits differ by 1

// function isJumping(number) {
//   let numbers = number.toString();
//   if (numbers.length === 1) {
//     return 'JUMPING';
//   }
//   for (let i = 1; i < numbers.length; i++) {
//     if ((numbers[i] - numbers[i - 1] == 1) || (numbers[i - 1] - numbers[i] == 1)) {

//     } else {
//       return 'NOT JUMPING'
//     }
//   }
//   return 'JUMPING'
// }

// console.log(isJumping(54321));

/************************************************ */

// Задачка 7 

// Is special number

// Функция isSpecialNumber принимает число и должна определить, является ли оно особенным. Число называется особенным, если оно включает в себя только 0, 1, 2, 3, 4 или 5.

// Заметки:

// Число, передаваемое в функцию, является положительным (n > 0).
// Все однозначные числа в интервале [0:5] считаются особенными числами.
// Примеры:

// isSpecialNumber(2) === "Special!!"

// 2 - это однозначное число в интервале [0:5].
// isSpecialNumber(9) === "NOT!!"

// хоть 9 - это и однозначное число, но оно не находится в интервале [0:5].
// isSpecialNumber(23) === "Special!!"

// все цифры числа 23 находятся в интервале [0:5].
// isSpecialNumber(39) === "NOT!!"

// хоть и есть число 3, которое находится в интервале, но другое число (9) в нем не находится (каждая цифра должна находиться в интервале [0:5]).

// function isSpecialNumber(n) {
//   let num = n.toString();
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > 5) {
//       return 'NOT!!'
//     }
//   }
//   return 'Special!!'
// }

// console.log(isSpecialNumber(152));


// Задачка 8

// Tidy numbers

// Все в порядке!По крайней мере так должно быть: )

// Давай проверим все ли наши числа "опрятные"
// и все цифры числа стоят в правильном порядке.Порядок правильный, когда все цифры числа расположены в неубывающей последовательности.

// Создай функцию isTidy которая принимает number в качестве параметра и должна выводить результат true если цифры в неубывающей последовательности, или false если нет.

// Примечание: Входные значения всегда положительные.

// Примеры:

//   isTidy(12) == > true Цифры {
//     1,
//     2
//   }
// расположены в неубывающей последовательности, то есть 1 <= 2.

// isTidy(32) == > false Цифры {
//   3,
//   2
// }
// расположены в порядке убывания, то есть 3 > 2.

// isTidy(1024) == > false Цифры {
//   1,
//   0,
//   2,
//   4
// }
// расположены в порядке убывания, поскольку 0 < 1.

// isTidy(3445) == > true Цифры {
//   3,
//   4,
//   4,
//   5
// }
// расположены в неубывающей последовательности, т.к.4 <= 4.

// isTidy(13579) == > true Цифры {
//   1,
//   3,
//   5,
//   7,
//   9
// }
// расположены в возрастающей последовательности

// function isTidy(number) {
//   let num = number.toString().split('');
//   if (num.length === 1) {
//     return true
//   }
//   console.log(num);
//   for (let i = 1; i < num.length; i++) {
//     if (num[i - 1] <= num[i]) {

//     } else {
//       return false
//     }

//   }
//   return true
// }

// console.log(isTidy(1256876));