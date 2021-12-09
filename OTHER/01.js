function findSquares(x, y) {
  let sum = 1;
  for (let i = 2; i <= x; i++) {
    if (y >= i) {
      sum = sum + i * i + 1;
    } else if (x > y && x >= i) {
      sum += i;
    }
  }
  return sum;
}

console.log(findSquares(11, 4));
