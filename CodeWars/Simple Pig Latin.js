//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  let newStr = str.split(' ');
  alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = '';
  newStr.map((item, i) => {
    let firstLetter = item.split('').splice(0, 1);
    let newWorld = item.split('').splice(1).join('') + firstLetter + 'ay';



    if (item.length < 2 && !alphabet.includes(item.toLowerCase())) {
      return result += ' ' + item;

    }
    if (i === 0) {
      return result += newWorld;
    } else {
      return result += ' ' + newWorld;
    }

  })

  return result;
}


console.log(pigIt('O Pig latin is cool @ !'));