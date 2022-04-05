// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// Have fun!

array = [1, 0, 1, -1];

function pickPeaks(arr) {
  let pos = [];
  let peaks = [];
  let start = arr[0];
  let peak = "";
  let repeat = 0;

  // if (arr[0] > arr[1]) {
  //   peak = false;
  // } else {
  //   peak = true;
  // }

  // if (arr[0] >= Math.max(...arr)) {
  //   pos.push(0);
  //   peaks.push(arr[0]);
  // }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === start && peak) {
      if (!repeat) {
        repeat = i;
      }
      continue;
    }

    if (arr[i] > start && peak) {
      if (repeat > 0) {
        start = arr[i - 1];
        repeat = 0;
      }
      start = arr[i];
      continue;
    }
    if (arr[i] < start && peak && i != 1) {
      if (repeat > 0) {
        pos.push(repeat - 1);
        peaks.push(arr[repeat - 1]);
        start = arr[i];
        peak = false;
        repeat = 0;
        continue;
      } else {
        pos.push(i - 1);
        peaks.push(arr[i - 1]);
        start = arr[i];
        peak = false;
        continue;
      }
    }
    if (arr[i] < start && !peak) {
      start = arr[i];
      continue;
    }
    if (arr[i] > start && !peak) {
      start = arr[i];
      peak = true;
      repeat = 0;
      continue;
    }
  }

  return { pos, peaks };
}

console.log(pickPeaks(array));
