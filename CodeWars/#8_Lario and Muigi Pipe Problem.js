function pipeFix(numbers) {
  let maxNum = Math.max(...numbers);
  let minNum = Math.min(...numbers);
  let res = [];
  for (let i = minNum; i <= maxNum; i++) {
    res.push(i);
  }
  return res;
}
