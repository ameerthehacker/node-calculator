class Calculator {
  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
  mul(a, b) {
    return a * b;
  }
  div(a, b) {
    if(b == 0) {
      throw Error("Can't divide by zero");
    }

    return a / b;
  }
  abs(a) {
    return Math.abs(a);
  }
  tan(a) {
    return Math.tan(a * Math.PI/180);
  }
}

module.exports = Calculator;