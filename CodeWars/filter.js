let a = [1, 2, 3, 4, 5];

let myFilter = function (arr) {
  let newArr = [];
  function cb(elem) {
    if (elem > 2) {
      return elem;
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(cb(arr[i]));
    }
  }
  return newArr;
};

let myMap = function (arr) {
  let newArr = [];
  function cb(elem) {
    return elem * 2;
  }

  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
};

console.log(myMap(a));
console.log(myFilter(a));
