let countBits = function (n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 !== 0) {
      count++;
    }
    n = Math.round(n / 2);
  }
  return count;
};

console.log(countBits(10));