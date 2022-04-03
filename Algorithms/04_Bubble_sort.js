const arr = [0, 2, 3, 5, 1, 2, 3, 45, 1, 1, 1, -1, 33, 54, 3, 2];

let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count++;
    }
  }
  return array;
}

console.log("count >", count);
console.log("bubbleSort >", bubbleSort(arr));
