const Calculator = require('./calculator');

describe('Calculator', () => {
  let calc, a, b;

  beforeEach(() => {
    // Arrange
    calc = new Calculator();
    a = Math.random();
    b = Math.random();
  });

  it('should add correctly', () => {
    // Act
    let result = calc.add(a, b);
    // Assert
    expect(result).toBe(a + b);
  });

  it("should subtract correctly", () => {
    // Act
    let result = calc.sub(a, b);
    // Assert
    expect(result).toBe(a - b);
  });

  it("should multiply correctly", () => {
    // Act
    let result = calc.mul(a, b);
    // Assert
    expect(result).toBe(a * b);
  });

  it("should divide correctly", () => {
    // Act
    let result = calc.div(a, b);
    // Assert
    expect(result).toBe(a / b);
  });

  it("should error when divided by zero", () => {
    // Act and Assert
    expect(() => calc.div(a, 0)).toThrow("Can't divide by zero");
  });
});