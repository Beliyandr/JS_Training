//! '1'
// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, item) => {
//   acc += item;
//   return acc;
// }, 0);

// console.log(sum);

//! '2';

// const arr = ["react", "angular", "react", "vue", "react", "angular"];

// const votes = arr.reduce((acc, item) => {
//   if (!acc[item]) {
//     console.log(acc);
//     acc[item] = 1;
//   } else {
//     console.log(acc);
//     acc[item] += 1;
//   }
//   return acc;
// }, {});

// //

// console.log(votes);

//! '3';

// const arr = [];

// for (let i = 0; i < 1000000; i++) {
//   arr[i] = i;
// }

// console.time("Var1");
// const res1 = arr.filter((el) => el % 2 === 0).map((el) => el * 2);
// console.timeEnd("Var1");

// console.time("Var2");
// const res2 = arr.reduce((acc, item) => {
//   if (item % 2 === 0) {
//     acc.push(item * 2);
//   }
//   return acc;
// }, []);
// console.timeEnd("Var2");
// console.log(res2);
// console.log(res1);

//! '4';

let users = [
  { id: 1, name: "John", age: "20" },
  { id: 2, name: "Sara", age: "30" },
  { id: 3, name: "Bob", age: "40" },
  { id: 4, name: "Mike", age: "50" },
  { id: 5, name: "Smith", age: "20" },
  { id: 6, name: "Alex", age: "25" },
  { id: 7, name: "Alex", age: "28" },
  { id: 8, name: "Jorg", age: "35" },
  { id: 9, name: "Moana", age: "45" },
];

//! 1. Получаем все возраста в обратном порядке
{
  const ages = users.reduce((acc, item) => {
    let age = Number(item.age);
    !acc.includes(age) && acc.push(age);
    acc.sort((a, b) => {
      return b - a;
    });
    return acc;
  }, []);
  console.log(ages);
}

{
  const ages = users.reduce((acc, item) => {
    if (!acc.includes(+item.age)) {
      acc.push(+item.age);
    }
    return acc;
  }, []);
  console.log(ages);
}

//! 2. Получаем все Имена
{
  const names = users.reduce((acc, item) => {
    !acc.includes(item.name) && acc.push(item.name);
    return acc;
  }, []);

  console.log(names);
}
