const arr = [0, 2, 3, 5, 1, 2, 3, 45, 1, 1, 1, -1, 33, 54, 3, 2];

let count = 0;

function selectionSortMin(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMinValue = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMinValue]) {
        indexMinValue = j;
      }
      count++;
    }

    let temp = array[i];
    array[i] = array[indexMinValue];
    array[indexMinValue] = temp;
  }
  return array;
}

console.log(selectionSortMin(arr));
console.log("count >", count);

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//       let indexMin = i;
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[j] < array[indexMin]) {
//           indexMin = j;
//         }
//         count += 1;
//       }
//       let temp = array[i];
//       array[i] = array[indexMin];
//       array[indexMin] = temp;
//     }
//     return array;
//   }

const arra = [0, 2, 3, 5, 5, 2, 3, 45, 1, 1, 1, -1, 33, 54, 3, 2];

let tmp = arra[3];

console.log(tmp);

arra[3] = 2;
console.log(arra[3]);
console.log(arra);
