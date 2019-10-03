const Calculator = require('./calculator');
const calc = new Calculator();

console.log("1 + 2 is " + calc.add(1, 2));
console.log("3 - 5 is " + calc.sub(3, 5));
console.log("3 * 5 is " + calc.mul(3, 5));
console.log("5 / 2 is " + calc.div(5, 2));
console.log("log10 is " + calc.log(10));
console.log("sin 360 is " + calc.sin(360));
console.log("degrees " + calc.tan(1));
