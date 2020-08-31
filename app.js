const Calculator = require('./calculator');
const calc = new Calculator();

console.log("1 + 2 is " + calc.add(1, 2));
console.log("3 - 5 is " + calc.sub(3, 5));
console.log("3 * 5 is " + calc.mul(3, 5));
console.log("5 / 2 is " + calc.div(5, 2));
console.log("log10 is " + calc.log(10));
console.log("sin 360 is " + calc.sin(360));
console.log("tan 180 is " + calc.tan(180));
console.log("cos 120 is " + calc.cos(120));
console.log("5! is " + calc.fact(5));
console.log("abosulte value of -3.142 is " + calc.abs(-3.142));
console.log("Sqrt 25 is " + calc.sqrt(25));
console.log("4^4 is " + calc.pow(4, 4));
console.log("25cm is " + calc.cm_to_inch(25) + "inches");
console.log("Standard deviation of [1, 2, 3, 4, 5] is " + calc.sd([1, 2, 3, 4, 5]))
console.log("25 Centimeters is " + calc.cmToMeters(25)+" Meters");
console.log("25 Meters is " + calc.metersToCM(25)+" Centimeters");
console.log("mean of 8 and 2 is " + calc.mean(8, 2));
console.log("variance of [5,7,9,11,13] is " + calc.variance([5,7,9,11,13]));
console.log("300 Kelvin to celcius  is " + calc.kToC(300) + "C");
console.log("35 degree to celcius is " + calc.celciusToKelvin(35) + " kelvin");
console.log("celcius to fahrenheit of 25 is " + calc.cToF(25));
console.log("275 fahrenheit to celcius is " + calc.fToC(275));
console.log("300 fahrenheit to kelvin is " + calc.fToK(300));
console.log("450 kelvin to fahrenheit is " + calc.kToF(450));


