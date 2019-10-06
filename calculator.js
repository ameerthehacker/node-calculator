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
    if (b == 0) {
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
    for (let i = a; i > 1; i--) {
      result *= i;
    }
    return result;
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

  cm_to_m(a) {
    return a / 100;
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
    return a * 100;
  }
}

module.exports = Calculator;
