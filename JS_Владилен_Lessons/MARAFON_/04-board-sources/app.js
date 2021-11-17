const board = document.querySelector('#board');
const colors = ['#2ecc71', '#BFACFA', '#14FAEB', '#DB0FFA', '#FAB362', '#F3FA22', '#FAF1B0'];
const SQUARE_NUMBER = 617;

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');


  square.addEventListener('mouseover', () => {
    setColor(square);
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  })

  board.append(square);
}

function setColor(element) {
  const color = getRendomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`
}

function getRendomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}