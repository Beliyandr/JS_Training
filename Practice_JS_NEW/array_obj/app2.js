
const person = [
  { name: "Gena", budget: 1500 },
  { name: "Lena", budget: 3000 },
  { name: "Kolya", budget: 800 },
  { name: "Olga", budget: 500 }
]

const budget = person.filter((item) => item.budget > 1000 )
console.log(budget);

const budget2 = person.reduce((acc, item) => {return  acc + item.budget },0)

console.log(budget2);
