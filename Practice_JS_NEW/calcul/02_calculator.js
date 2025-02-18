const firstInp = document.querySelector('.calculator__input-first');
const secondInp = document.querySelector('.calculator__input-second');
const buttonP = document.querySelector('.calculator__button-plus')
const buttonM = document.querySelector('.calculator__button-minus')
const calc = document.querySelector('.calculator__button-result')
const result = document.querySelector('.calculator__result')

let arifm = '+';
result.textContent = 0;

buttonM.onclick = function () {
  arifm = '-';
 }
buttonP.onclick = function () {
  arifm = '+';
 }

function printResult(value) {
  if (value < 0) {
    result.style.color = 'red'
  } else {
     result.style.color = 'green'
  }
  result.textContent = value;
 }

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  return actionSymbol === '+' ? (num1 + num2) : (num1 - num2)
}



calc.onclick = function () {
  const amount = computeNumbersWithAction(firstInp, secondInp, arifm);

  printResult(amount)

}
