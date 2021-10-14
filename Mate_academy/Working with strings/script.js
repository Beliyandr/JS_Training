"use strict";
//!String iteration
/*
const str = "hello World";

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

for (let letter of str) {
  console.log(letter);
 }
*/

//!Find a substring
/*
const word = "asdfg";
const part = "sd";

console.log(
  word.includes(part),
  word.includes(part, 5),
  word.indexOf(part),
  word.indexOf(part, 3),
  word.startsWith(part),
  word.endsWith(part)
);

*/
////////////////////////////////////////////////////////////
/* ЗАДАНИЕ №1
Утром получили письмо от Grand Mate Hotel.

Вкратце, программисты еще не изменили тип поля "количество гостей" в форме бронирования и им все еще приходят строки Нас будет 4ро, Ну думаю где-то 3, Точно 2 человека, Большая компания из 15 людей. Менеджеры вынуждены обрабатывать такие запросы в ручном режиме. Сервис, конечно же, страдает.

Думаю, мы можем помочь им. Давай улучшим функцию calculateGuests так, чтобы она начала искать числа и в середине строки guestsInput? Если все-таки невозможно определить количество гостей, или это количество равно 0 - возвращай not a number.

Требования:

Ищи только целые числа внутри строки. Если число дробное - отбрасывай все значения после запятой.
Если в строке есть два отдельных числа - возвращай первое из них.
Подсказка: используй цикл for...of, чтобы перебрать строку guestsInput и проверить, является ли текущий символ цифрой.

Примеры:

calculateGuests('I think 5 guests') === 5
calculateGuests('Big company of 15 dudes') === 15
calculateGuests('5') === 5
calculateGuests('alone') === 'not a number'
calculateGuests('0') === 'not a number'
calculateGuests('Hello, 9.75 people') === 9
calculateGuests('There will be 7 or 9 guys') === 7
calculateGuests('hello cat walks on my keyboard ksadjfhskaj12.34kasdfhsjk') === 12
*/
//! /* Мое решение */
// function calculateGuests(guestsInput) {
//   let count = "";
//   for (let i = 0; i <= guestsInput.length; i++) {
//     if (Number(guestsInput[i]) > 0) {
//       count = guestsInput[i];
//       for (let j = 1; j < guestsInput.length; j++) {
//         if (Number(guestsInput[i + j] > 0)) {
//           count = count + guestsInput[i + j];
//         } else {
//           return Number(count);
//         }
//       }
//       return Number(count);
//     } else {
//     }
//   }
//   if (!count) {
//     return "not a number";
//   }
// }

// let a = calculateGuests("4");
// console.log(a);

//!Решение Преподавателя :

// function calculateGuests(guestsInput) {
//   let result = '';

//   for (let char of guestsInput){
//     if('1234567890'.includes(char)){
//       result+= char;
//     }else if (result.length>0){
//       break;
//     }
//   }
//   return +result || 'not a number';
// }

// let a = calculateGuests(" asdf43sdf");
// console.log(a);

/////////////////////////////////////////////////////////////////////
// ЗАДАНИЕ №2

// Мы усовершенствовали нашу программу для сбора статистики по вебинарам Миши. Теперь после сбора статистики, она отправляет данные на сервер в виде строки 111001010111011, где1 - это студент, который понял тему, а 0 - соответственно, нет.

// Было бы полезно понимать сколько процентов группы усвоили материал, это покажет насколько вебинар был эффективен.

// Создай функцию getSuccessRate которая будет принимать, строку statistic, и возвращать процент студентов, которые поняли материал, округляя до ближайшего целого (используй Math.round(result) для округления).

// Примеры:

// getSuccessRate('11100') === 60
// getSuccessRate('1100') === 50
// getSuccessRate('000000') === 0
// getSuccessRate('11111') === 100
// getSuccessRate('') === 0

//! Мое решени
// function getSuccessRate(statistic) {
//   let countPositiv = 0;
//   let percentPositive = 0;
//   let statLenght = statistic.length;

//   for (let num of statistic) {
//     if (num > 0) {
//       countPositiv += 1;
//     }
//   }
//   if (countPositiv === 0){
//     return 0
//   }
//   percentPositive = countPositiv / statLenght * 100 ;
//   return Math.round(percentPositive);
// }

// let a = getSuccessRate("0");
// console.log(a);

//! Решение преподавателя

// function getSuccessRate(statistic) {
//  if (!statistic){
//    return 0 ;
//  }

// let count = 0;

//  for (const char of statistic){
//    if (char === '1'){
//    count ++;
//   }
//  }
// return Math.round(count / statistic.length * 100);
// }

// let a = getSuccessRate("0d123d");
// console.log(a);

////////////////////////////////////////////////////////////

//Задание № 3
// Завтра у первоклашек будет самостоятельная работа. Учат алфавит, бедняги. Но еще хуже учителю, которому все это проверять.

// У детей задание вспомнить порядок букв в алфавите и написать столько букв, сколько они вспомнят. Задание учителя проверить, пишут ли дети буквы в правильном порядке и не пропущена ли буква в строке. Большие буквы или маленькие значения не имеет.

// Давай поможем учителю функцией isAlphabet, которая будет принимать letters и возвращать true если порядок букв совпадает с порядком в алфавите. Иначе false.

// Примеры:

// isAlphabet('abc') === true
// isAlphabet ('aBc') === true
// isAlphabet('abd') === false - после b идет c
// isAlphabet('a') === true
// isAlphabet('') === false - задание не выполнено
// isAlphabet('abcdefghjiklmnopqrstuvwxyz') === false - j идет после i
// isAlphabet('tuvwxyz') === true
// isAlphabet ('XYZ') === true
// isAlphabet('mnoprqst') === false - q идет перед r

//
// word.includes(part),
// word.includes(part, 5),
// word.indexOf(part),
// word.indexOf(part, 3),
// word.startsWith(part),
// word.endsWith(part)

//! Мое решени

// function isAlphabet(letters) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const newLetter = letters.toLowerCase();
//   console.log(newLetter);
//   if (letters === "" || newLetter.length > alphabet.length || !letters) {
//     return false;
//   }

//   if (alphabet.includes(newLetter)) {
//     return true;
//   }

//   for (let i = 0; i < letters.length; i++) {
//     if (alphabet[0] !== newLetter[0]) {
//       return false;
//     }
//     if (alphabet[i] !== newLetter[i]) {
//       //return `после ${alphabet[i - 1]} идет ${alphabet[i]}`;
//       return false;
//     }
//   }
// }

// let a = isAlphabet("");
// console.log(a);

// Решение преподавателя

// function isAlphabet(letters) {
//   if (!letters) {
//     return false;
//   }

//   const abc = "abcdefghijklmnopqrstuvwxyz";

//   return abc.letters.toLowerCase();
// }

////////////////////////////////////////////////////////////////
// Задание № 4

// Наш новый босс, как оказалось, просто ненавидит гласные буквы. Да это странно. Но для тебе это просто странно, а нам с этим как-то работать. Вынуждены из всей документации убирать гласные буквы...

// Вот если бы нам кто-то помог. Слушай, ты же уже опытный программист. Может можно что-то сделать?

// Мы тебе строки document, а ты их через функцию removeVowels пропустишь и вернешь нам готовые документы. Что скажешь?

// Примеры:

// removeVowels('document') === 'dcmnt'
// removeVowels('I like my boss') === ' lk m bss'
// removeVowels('350 euro') === '350 r'

// function removeVowels(doc) {
//   const vowels = "eyuioa";
//   let unVowels = "";
//   for (let char of doc) {
//     if (!vowels.includes(char.toLowerCase())) {
//       unVowels += char;
//     }
//   }
//   return unVowels;
// }

// let a = removeVowels("doc poc");
// console.log(a);

////////////////////////////////////////////////////
// Задача№5

// Псс... Мы тут придумали интересную идею для бизнеса. В мире есть много вещей, которые состоят из нескольких слов. Мы можем создать суперпрограмму makeAbbr, которая будет возвращать для них аббревиатуры!!! Такого точно еще никто не делал!

// Поможешь нам? Ты в доле. Как только это начнет приносить нам прибыль, мы перечислим средства тебе. Точно-точно. Ух. Заживем!

// Ты можешь рассчитывать, что в названии есть только буквы, а слова разделяются одним пробелом.

// Примеры:

// makeAbbr('national aeronautics space administration') === 'NASA'
// makeAbbr('central processing unit') === 'CPU'
// makeAbbr('simplified molecular input line entry specification') === 'SMILES'
//! Мое решение

// function makeAbbr(words) {
//   let newWords = words.split(" ");
//   let capitalAbbr = "";
//   for (let word of newWords) {
//     capitalAbbr += word[0];
//   }
//   return capitalAbbr.toUpperCase();
// }

// let a = makeAbbr("doc poc");
// console.log(a);

//Решение преподавателя

// function makeAbbr(words) {
//   let name = ` ${words.trim()}`;
//   let abbr = "";
//   for (let i = 0; i < name.lenth; i++) {
//     if (name[i] === " ") {
//       abbr += name[i + 1];
//     }
//     console.log(abbr)
//   }
//   return abbr;
// }

// let a = makeAbbr(" asdcacdoc poc");
// console.log(a);

///////////////////////////////////////////////////////////////////////////
// Недавно археологи нашли старые записи древней цивилизации. Оказывается у них уже была развита письменность и был свой язык. Но самое крутое из всего этого то, что говорили они просто задом наперед. Археологи отправили находку нам на расшифровку.

// Давай расшифруем decryptMessage послание message древней цивилизации потомкам!!!

// Примеры:

// decryptMessage('!!!reeb gniknird ekil eW') === 'We like drinking beer!!!'
// decryptMessage('0202 ni eb lliw cimednap surivanoroc A') === 'A coronavirus pandemic will be in 2020'

// Мое решение
// function decryptMessage(message) {
//   return  message.split("").reverse().join('');
// }

// let a = decryptMessage("!! asdcacdoc poc");
// console.log(a);

// Решение преподователя
// function decryptMessage(message) {
//   let res = '';

//   for(const char of message){
//     res = char + res;
//   }
//   return res;
// }

// let a = decryptMessage("!! asdcacdoc poc");
// console.log(a);

///////////////////////////////////////////////////////////////////
// Задача № 6
// До нас дошла информация, что оборотни могут быть опасными для людей. Мы еще не знаем почему, но игнорировать эту информацию не можем. Надо как можно скорее научиться выявлять оборотней.

// Предлагаем для начала проверять слова и предложения. Они далеко не уйдут в случае чего. Как мы поняли, оборотни читаются одинаково в обе стороны и при этом игнорируют пробелы и знаки препинания.

// Напиши, пожалуйста, функцию isWerewolf, которая получает строку target и возвращает true, если это оборотень.

// Примеры:

// isWerewolf('rotator') === true // rotator --> rotator
// isWerewolf('home') === false // home --> emoh
// isWerewolf('racecar') === true
// isWerewolf('red rum sir is murder') === true
// isWerewolf('eva, can i see bees in a cave') === true

//! Мое решение
// function isWerewolf(target) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let newTarget = target.toLowerCase().split("");
//   let targetReverse = "";
//   let arr = [];
//   for (let i = 0; i < newTarget.length; i++) {
//     if (alphabet.includes(newTarget[i])) {
//       arr.push(newTarget[i]);
//     }
//   }
//   newTarget = arr.join("");
//   targetReverse = arr.reverse().join("");
//   if (newTarget === targetReverse) {
//     return true;
//   }
//   return false;
// }

// let a = isWerewolf("evE");
// console.log(a);

//! Решение преподавателя
// function isWerewolf(target) {
//   const lowerTarget = target.toLowerCase();
//   const abc = "abcdefghijklmnopqrstuvwxyz";
//   let normal = "";
//   let reversed = "";

//   for (const char of lowerTarget) {
//     if (abc.includes(char)) {
//       normal += char;
//       reversed = char + reversed;
//     }
//   }
//   return normal === reversed;
// }

// let a = isWerewolf("evE");
// console.log(a);