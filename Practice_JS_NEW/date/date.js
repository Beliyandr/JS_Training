// const num = 15e3;
// const big = 1_000_000;

// console.log(Number.MAX_SAFE_INTEGER);

// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min +1) + min)
//  }

//  console.log(getRandom(5,12));

// Closures

// function createPerson(name) {
//   return function (lastName) {
//     console.log(name + '' + lastName);
//    }
//  }


// const addLastName = createPerson('Vlad');

// console.log(new Date());

// const now = new Date();

// const start = new Date();

// console.log('now:', now.toLocaleDateString());
// console.log('start:', start);

let mode = 'full';
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

function update() {
  output.textContent = format(mode)
}

function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case 'time': return now.toLocaleTimeString() + '.' + now.getMilliseconds();
    case 'date': return now.toLocaleDateString();
    case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
    default : return  now.toLocaleTimeString();
  }
 }

function bindMode(name) {
  return function () {
    mode = name;
    update();
  }
}

fullBtn.onclick = bindMode('full');

 dateBtn.onclick=bindMode('date');

 timeBtn.onclick=bindMode('time');

 setInterval(update,1000)
 update();
