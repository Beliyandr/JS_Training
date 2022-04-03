const arr = [0, 2, 3, 5, 1, 2, 3, 45, 1, 1, 1, -1, 33, 54, 3, 2];
let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2); //опорный элемент - центральный (индекс массива)
  let pivot = array[pivotIndex]; // значение центрального маассива
  let less = []; // - числа которые меньше чем опорный
  let greater = []; // -числа которые больше чем опорный

  for (let i = 0; i < array.length; i++) {
    count += 1;
  }
}
