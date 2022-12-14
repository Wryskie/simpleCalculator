const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.clear');
const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.operation')
const equalsBtn = document.querySelector('.equalBtn');

let num1 = "";
let num2 = "";
let displayText = "";
let operation = "";
let result = 0.0;

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

function operate(num1, num2) {
  switch (operation) {
    case "+":
      result = add(num1, num2);
      break;

    case "-":
      result = subtract(num1, num2);
      break;

    case "x":
      result = multiply(num1, num2);
      break;

    case "/":
      result = divide(num1, num2);
      break;
  }
  return parseFloat(result.toFixed(2));
}

digits.forEach((digit) => {
  digit.addEventListener('click', setDisplay);
})

operations.forEach((operationBtn) => {
  operationBtn.addEventListener('click', setDisplay)
})


function setDisplay(e) {
  // Sets the screen content to empty in order to remove the 0 before displaying content.
  if (screen.textContent == 0) screen.textContent = "";

  screen.textContent += e.target.innerHTML

  // Checks if operator button was clicked and if both numbers contain values yet.
  if (e.target.classList.contains('operation')) {
    if (num1 !== "" && num2 !== "") {
      num1 = operate(num1, num2);
      num2 = "";
      screen.textContent = num1;
      screen.textContent += e.target.innerHTML;
    };
    operation = e.target.innerHTML;
    return;
  }
  // If the operation is not assigned yet assign the value the user enters to num1 else assign it to num2.
  (operation == "") ? num1 += e.target.innerHTML : num2 += e.target.innerHTML;
}

// Resets data when the clear button is pressed.
function clearCalc() {
  num1 = "";
  num2 = "";
  operation = "";
  result = 0;
}

clearBtn.addEventListener('click', () => { screen.textContent = "0"; clearCalc(); })
equalsBtn.addEventListener('click', () => {
  result = operate(num1, num2);
  screen.textContent = result;
  operation = "";
  console.log(result);
  console.log(`num 1 = ${num1} num2 = ${num2}`)
})

