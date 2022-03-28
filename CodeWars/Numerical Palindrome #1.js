/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

Return "Not valid" if the input is not an integer or less than 0


Палиндром — это слово, фраза, число или другая последовательность символов, которая читается одинаково как в прямом, так и в обратном порядке. Примеры числовых палиндромов: 2332 110011 54322345 Для данного числа num напишите функцию, которая проверяет, является ли это числовым палиндромом или нет, и возвращает логическое значение (true, если это так, и false, если нет). Вернуть «Недействительно», если ввод не является целым числом или меньше 0

describe("Tests", () => {
  it("test", () => {
  Test.assertEquals(palindrome(1221),true);
  Test.assertEquals(palindrome(123322),false);
  Test.assertEquals(palindrome("ACCDDCCA"),"Not valid");
  Test.assertEquals(palindrome("1221"),"Not valid");
  Test.assertEquals(palindrome(-450),"Not valid");
  });
});

*/

function palindrome(num) {
  if (typeof num !== "number" || num < 0) {
    return "Not valid";
  }
  let reverse = Number(String(num).split("").reverse().join(""));
  if (reverse === num) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(4444455554444));

console.log(null || false || false);
