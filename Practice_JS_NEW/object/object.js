const person = {
  name: 'vlad',
  age: 29,
  isYoutube: true,
  language: ['ru', 'en'],
  adress: {
    city: 'Sant',
    street: 'Nevsry'
  },
  [1 + 2]: 'korol',


}

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(person[key]);
//   }
// }

Object.keys(person).forEach((key) => {
  console.log(person[key])
 })

