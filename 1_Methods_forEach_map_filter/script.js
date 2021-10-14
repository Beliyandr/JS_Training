const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
];

//   FOR   **********************

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// FOR OF ***********************

// for (let person of people) {
//     console.log(person);
// }

// forEach ***********************

// ES5
// people.forEach(function(person) {
//     console.log(person);
//     console.log(index);
//     console.log(pArr);
// })

// ES6 
// people.forEach(person => console.log(person));

// Map *****************************
/* служит для преобразования текущего массива в другой нужный нам массив */

// const newPeople = people.map(person => {
//     return `${person.name} (${person.age})`;
// })
// console.log(newPeople);


// Filter  ******************************

/* задача : отфильтровать людей которым меньше 18 лет*/
// 1. FOR

// const adults = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults);

// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// });
// console.log(adults);

// ES6

// const adults = people.filter(person => person.age >= 18)
// console.log(adults)


// Reduce **************************
/* проссумировать весь бюджет */

// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//     amount = amount + people[i].budget;

// }
// console.log(amount);

// const amount = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)

// console.log(amount);



// Find ****************  
/* служит для поиска нужного элемента */
// const igor = people.find(person => person.name === 'Игорь');
// console.log(igor);

// FindIndex *************************

// const igorIndex = people.findIndex(person => person.name === 'Игорь');
// console.log(igorIndex);


/////********************* */

const newPeople = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
    .reduce((total, person) => total + person.budget, 0)

console.log(newPeople)