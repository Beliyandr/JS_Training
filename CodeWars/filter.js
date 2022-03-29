let a = [1, 2, 3, 4, 5];

let myFilter = function (arr, cb) {};

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
