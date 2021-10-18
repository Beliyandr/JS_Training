// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  if (num < 10) {
    return 0;
  }

  let numlength = num.toString();

  let multi = 1;
  let count = 0;
  for (let i = 0; numlength.length > 1; i++) {
    for (let char of numlength) {
      multi *= char;
    }
    count++;
    if (multi < 10) {
      return count;
    } else {
      numlength = multi.toString();
      multi = 1;
    }
  }
}

console.log(persistence(39));
