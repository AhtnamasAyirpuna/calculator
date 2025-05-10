function add() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number: '));
  const result = firstNumber + secondNumber;
  alert('The result is: ' + result);
}

function subtract() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number: '));
  const result = firstNumber - secondNumber;
  alert('The result is: ' + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number: '));
  const result = firstNumber * secondNumber;
  alert('The result is: ' + result);
}

function divide() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number: '));
  const result = firstNumber / secondNumber;
  alert('The result is: ' + result);
}

function simpleInterest() {
  const principal = parseFloat(
    prompt('The initial amount of money invested or borrowed: ')
  );
  const rateOfInterest = parseFloat(
    prompt('The annual interest rate (as a decimal): ')
  );
  const time = parseFloat(
    prompt('The number of years the money is invested or borrowed: ')
  );
  const result = principal * rateOfInterest * time;
  alert('Simple Interest = ' + result.toFixed(2));
}

function compoundInterest() {
  const principal = parseFloat(
    prompt('The initial amount of money invested or borrowed: ')
  );
  const rateOfInterest = parseFloat(
    prompt('The annual interest rate (as a decimal): ')
  );
  const time = parseFloat(
    prompt('The number of years the money is invested or borrowed: ')
  );
  const number = parseFloat(
    prompt('How often interest is compounded in one year: ')
  );
  const finalAmount =
    principal * Math.pow(1 + rateOfInterest / number, number * time);
  const result = finalAmount - principal;
  alert('Compound Interest = ' + result.toFixed(2));
}
