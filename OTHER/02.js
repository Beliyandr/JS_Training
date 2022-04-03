const combiArr = (function () {
  let res = [];
  function combArr(arr, k, start, idx, current) {
    if (idx === k) {
      res.push(current.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current[idx] = arr[i];
      combArr(arr, k, i + 1, idx + 1, current);
    }
  }

  return function (arr, k) {
    res = [];
    combArr(arr, k, 0, 0, []);
    let temp = res;
    res = null;
    return temp;
  };
})();
