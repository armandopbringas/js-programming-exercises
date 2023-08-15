function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function substract(a, b) {
  return a - b;
}

function power(a, b) {
  return Math.pow(a, b);
}

export { sum, multiply, divide, substract, power };
