const Calculator = require('../calculator');

describe('Calculator', () => {
  let calc, a, b;

  beforeEach(() => {
    calc = new Calculator();
    a = Math.random();
    b = Math.random();
  });

  it('should add correctly', () => {
    let result = calc.add(a, b);

    expect(result).toBe(a + b);
  });

  it("should subtract correctly", () => {
    let result = calc.sub(a, b);

    expect(result).toBe(a - b);
  });

  it("should multiply correctly", () => {
    let result = calc.mul(a, b);

    expect(result).toBe(a * b);
  });

  it("should divide correctly", () => {
    let result = calc.div(a, b);

    expect(result).toBe(a / b);
  });
});