// function findSquares(x, y) {
//   let sum = 1;
//   for (let i = 2; i <= x; i++) {
//     if (y >= i) {
//       sum = sum + i * i + 1;
//     } else if (x > y && x >= i) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(findSquares(11, 4));

// function removeZeros(number) {
//   if (number === 0) {
//     return 0;
//   }
//   let newNumber = String(number);
//   let num = "";
//   for (let i = 0; i < newNumber.length; i++) {
//     if (newNumber[i] != 0) {
//       num += newNumber[i];
//     }
//   }
//   return Number(num);
// }

// console.log(removeZeros(-22025));

let a = "Mate Academy";
let b = a.split("");
let c = "dsgdfgdasd";
let d = c.split("");
console.log("a >", a);
console.log("b >", b);
console.log("c >", c);
console.log("d >", d);
console.log(b.includes(c));

d.forEach((element) => {
  if (b.includes(element)) {
    console.log(true);
  }
});

function hasNoneLetters(blacklist, phrase) {
  blacklist = blacklist.split("");
  console.log(phrase.includes(blacklist[0]));
  for (let i = 0; i <= blacklist.length; i++) {
    if (phrase.includes(blacklist[i])) {
      console.log(blacklist[i]);
      return false;
    } else {
      console.log(blacklist[i]);
      return true;
    }
  }
}
console.log("2>", hasNoneLetters("ABC", "a"));

// console.log("1>", hasNoneLetters("Mate Academy", "pqrs"));

// function checkSubstring(text, part) {
//   if (text.toLocaleLowerCase().includes(part.toLocaleLowerCase())) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkSubstring("mate academy", "school"));
// checkSubstring('mate academy', 'mate') === true
// checkSubstring('Mate academy', 'matE') === true
// checkSubstring('Mate academy', '') === true

// function getLargestNumber(numbers) {
//   let maxNumber = numbers[0];
//   for (let i = 1; i <= numbers.length; i++) {
//     if (maxNumber < numbers[i]) {
//       maxNumber = numbers[i];
//     }
//   }
//   return maxNumber;
// }

// console.log(getLargestNumber([3, 8, 5, 7]));

// const names = [
//   "Eileen",
//   "Peter",
//   "Jared",
//   "Robert",
//   "Robert",
//   "Robert",
//   "David",
// ];

// function getUniqNames(names) {
//   let uniqNames = [];
//   names.forEach((name) => {
//     if (!uniqNames.includes(name)) {
//       uniqNames.push(name);
//     }
//   });
//   return uniqNames;
// }

// console.log(getUniqNames(names));
// === ['Eileen', 'Peter', 'Jared', 'Robert', 'David']

function hasNoneLetters(blacklist, phrase) {
  blacklist = blacklist.toLowerCase().split("");
  for (let i = 0; i < blacklist.length; i++) {
    if (phrase.toLowerCase().includes(blacklist[i])) {
      return false;
    }
  }
  return true;
}

console.log(hasNoneLetters("ABC", "a"));
