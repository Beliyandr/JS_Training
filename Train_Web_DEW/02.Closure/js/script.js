// функция - код функции + доступный набор данных в момент запуска функции
// замыкание - это процесс создания scope(области видимости) внутри другого scope, с доступом к переменным внешнего scope

//замыкание - это функция у которой есть доступ к своей внешней функции по области видимости, даже после того как внешняя функция прекратилась

// замыкание - это возможность функции которая находится внутри другой функции получать доступ к переменным которые находятся в области видимости родительской функции, даже после того как родительская функция прекратила свое существование

/*
function cs() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  };
}

let d = cs();

d();
d();
d();
d();

*/

// function external() {
//   const externalVar = "я- внешняя функция";

//   function internal() {
//     const internalVar = "Я - внутренняя функция";

//     console.log("internalVar >", internalVar);
//     console.log("externalVar >", externalVar);
//   }

//   return internal;
// }

// let internalFn = external();

// internalFn();

// function createAddress(type) {
//   const adress = type.toUpperCase();
//   return function (name) {
//     return `${adress} ${name}`;
//   };
// }

// const adressGrazdanin = createAddress("Гражданин");
// const adressGrazdanka = createAddress("Гражданинка");

// console.log(adressGrazdanin("Вася"));
// console.log(adressGrazdanka("Александра"));

function createPlayer(name) {
  let score = 0;
  return function scoreCount() {
    score++;
    return `${name} - ${score}  баллов`;
  };
}

const playerOne = createPlayer("Василий");
const playerTwo = createPlayer("Alex");
