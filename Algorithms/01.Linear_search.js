let arr = [1, 4, 67, 3, 3, 54, 64, 3, 8, 45, 5, 3, 4, 6, 2];

let count = 0; // количество итерация
function linear_searh(array, item) {
  // array- массив в котор нужно найти искомый эелемен
  // item - искомый эелемент
  // функция должна вернуть индекс элемента , или null
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linear_searh(arr, 2));
console.log(count);
