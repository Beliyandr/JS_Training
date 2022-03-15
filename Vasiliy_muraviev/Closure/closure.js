function createAdress(type) {
  const address = type.toUpperCase();
  return function (name) {
    return `${address} ${name}`;
  };
}

const addressGrazhdanin = createAdress("Гражданин");
const addressGrazhdanka = createAdress("Гражданка");

console.log(addressGrazhdanin("Vasiliy"));
console.log(addressGrazhdanka("Alexandra"));

function createPlayer(name) {
  let score = 0;
  return function scoreCount() {
    score++;
    return `${name} - ${score} баллов`;
  };
}

const playerOne = createPlayer("Vasiliy");
const playerTwo = createPlayer("Alex");

function rand(num) {
  let a = 0;
  for (let i = 0; i < num; i++) {
    a = playerOne();
  }
  console.log(a);
}
rand(12);

console.log(playerOne());
