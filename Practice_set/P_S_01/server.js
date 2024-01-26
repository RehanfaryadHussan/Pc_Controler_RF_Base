function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
  function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero";
  }
}
class Calculator {
  constructor() {
    this.result = 0;
  }
  addToResult(number) {
    this.result = add(this.result, number);
  }
  subtractFromResult(number) {
    this.result = subtract(this.result, number);
  }
  multiplyResultBy(number) {
    this.result = multiply(this.result, number);
  }
  divideResultBy(number) {
    this.result = divide(this.result, number);
  }
  getResult() {
    return this.result;
  }
}
const calculator = new Calculator();
calculator.addToResult(5);
calculator.multiplyResultBy(3);
calculator.subtractFromResult(2);
calculator.divideResultBy(4);
console.log("Result:", calculator.getResult());
