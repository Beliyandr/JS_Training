// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  if (text.length < 2) {
    return 0;
  }
  let newText = text.toLowerCase().split('');
  let count = [];

  for (let i = 0; i <= newText.length; i++) {
    for (let j = 1; j <= newText.length; j++) {
      if (newText[0] === newText[j]) {
        if (!count.includes(newText[0])) {
          count.push(newText[0]);
        }
        newText.splice(newText[j], 1);
        j--;
      }
    }
    newText.splice(newText[0], 1);

  }

  return count.length;
}


console.log(duplicateCount("Indivisibilities"));