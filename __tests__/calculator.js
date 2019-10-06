const Calculator = require('../calculator');

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

  it("should add if positive number is subtracted to negative number", () => {
    // Act
    let result = calc.sub(a, -b);
    // Assert
    expect(result).toBe(a - (-b));
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

  it("should give result 1 when factorial is done for value of a<1", () => {
    // Act
    let result = calc.fact(-a);
    // Assert
    expect(result).toBe(1);
  });

  it("should give undefined if sqrt of negative value is done", () => {
    // Act and Assert
    expect(() => calc.sqrt(-a)).toThrow("Undefined");
  });

  it("should give square root value", () => {
    // Act
    let result = calc.pow(a, 2);
    // Assert
    expect(result).toBe(a*a);;
  });

  it("should give standard deviation value", () => {
    //Act
    let result = calc.sd([1, 1, 1, 1, 1]);
    //Assert
    expect(result).toBe(0);
  })

  it("should give cm to Meters value", () => {
    //Act
    let result = calc.cmToMeters(a);
    //Assert
    expect(result).toBe(a/100);
  })
});