// (corrections) - длины с целыми положительными приращениями скорости, которые требуется достичь на каждом из маневров ;
// (cells) -  массив произвольной длины содержащий список доступных топливных капсул ,

// const data = {
//   corrections: [1, 12, 7, 1],
//   cells: [8, 4, 6, 2, 2],
// };

// (main_thruster) - последовательность использования капсул для первого двигателя
// (sec_thruster) - последовательность использования капсул для второго двигателя
// (delta_velocity) - итоговое полученное приращение скорости

const res = {
  main_thruster: [0, 8, 6, 0],
  sec_thruster: [2, 4, 2, 0],
  delta_velocity: 18,
};

const corrections = [1, 12, 7, 1];
const cells = [8, 4, 6, 2, 2];

console.log(correctRes(corrections, cells));

function correctRes(correct, cells_) {
  let v1 = [];
  let v2 = [];
  let res = {};
  corrections.forEach((item) => {
    //  поиск на равенство значения для первого двигателя для маневра
    for (let i = 0; i <= cells.length; i++) {
      if (item === cells[i]) {
        v1.push(...cells.splice(i, 1));
        v2.push(0);
        return;
      }
    }

    //  поиск на равенство значения для второго двигателя для маневра
    let min = Math.min(...cells);
    if (item === min / 2) {
      v1.push(0);
      v2.push(...cells.splice(cells.indexOf(min), 1));
      return;
    }

    //
    for (let i = 0; i <= cells.length; i++) {
      let max = Math.max(...cells);
      if (item > max) {
        if (max != cells[i] && item >= max + cells[i] / 2) {
          v2.push(...cells.splice(i, 1));
          v1.push(...cells.splice(cells.indexOf(max), 1));

          return;
        }
      }
    }

    if (item) {
      v1.push(0);
      v2.push(0);
    }
  });
  let delta_velocity = sum(v1, v2);
  return (res = { main_thruster: v1, sec_thruster: v2, delta_velocity });
}

function sum(v1, v2) {
  let v1Sum = v1.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);

  let v2Sum = v2.reduce((acc, item) => {
    acc += item / 2;
    return acc;
  }, 0);
  return v2Sum + v1Sum;
}

// Знаю, что решение возможно не верное и не точное, понимаю что нужно стремиться к самому максимально значению delta_velocity, пока не смог решить лучше...
