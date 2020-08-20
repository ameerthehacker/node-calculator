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
    if (b === 0) {
      throw Error("Can't divide by zero");
    }
    return a / b;
  }

  abs(a) {
    return Math.abs(a);
  }

  log(a) {
    if (a === 0) {
      return '-Infinity';
    } else if (a < 0) {
      return NaN;
    } else {
      return Math.log(a);
    }
  }

  sin(a) {
    return Math.sin(a);
  }

  cos(a) {
    return Math.cos(a);
  }

  tan(a) {
    if (Math.abs(a) === Math.PI / 2) {
      return 'Infinity';
    } else {
      return Math.tan(a);
    }
  }

   fact(a) {
   var result = 1;

    if (a < 0) {
      throw Error("Can't factoral negative values");
    }
    for (let i = a; i > 1; i--) {
      result *= i;
     
  } return result;
  }

  cm_to_inch(a) {
    return a * 0.393701;
  }

  sqrt(a) {
    if (a<0) {
      throw 'Undefined'
    } else {
      return Math.sqrt(a);
    }
  }

  pow(a, b) {
    return Math.pow(a, b);
  }

  sd(a) {
    var sum = a.reduce(function(sum, value){
      return sum + value;
    }, 0);
    var avg = sum / a.length;
    return Math.sqrt(a.reduce(function (sq, n) {
            return sq + Math.pow(n - avg, 2);
        }, 0) / (a.length));
  };

  cmToMeters(a){
    return a / 100;
  }

  metersToCM(a){
    return a * 100;
  }

  mean(a, b) {
    return (a + b) / 2;
  }

  variance(a){
    var sum = a.reduce(function(sum, value){
      return sum + value;
    }, 0);
    var avg = sum / a.length;
    return a.reduce(function (sq, n) {
      return sq + Math.pow(n - avg, 2);
    }, 0) / (a.length);
  }

  kToC(a){
    return parseFloat((a - 273.15).toFixed(2));
  }
  celciusToKelvin(a) {
    return a + 273.15;
  }
  
  cToF(a){
    return parseFloat((a * 1.8 + 32).toFixed(1));
  }
}

module.exports = Calculator;
