// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

let countBits = function (n) {
  let count = 0;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      count++;
    }
    n = Math.round(n / 2);
  }
  return count;
};

console.log(countBits(0));
