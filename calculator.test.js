const Calculator = require('./calculator'); // This line imports the Calculator class from calculator.js

describe('Calculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(calculator.add(1, 2)).toBe(3);
        });

        test('adds two negative numbers', () => {
            expect(calculator.add(-1, -2)).toBe(-3);
        });

        test('adds a positive number and a negative number', () => {
            expect(calculator.add(1, -2)).toBe(-1);
        });
    });

    describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(calculator.subtract(5, 2)).toBe(3);
        });

        test('subtracts a smaller number from a larger number', () => {
            expect(calculator.subtract(2, 5)).toBe(-3);
        });

        test('subtracts two negative numbers', () => {
            expect(calculator.subtract(-5, -2)).toBe(-3);
        });
    });

    describe('divide', () => {
        test('divides two positive numbers', () => {
            expect(calculator.divide(10, 2)).toBe(5);
        });

        test('divides a smaller number by a larger number', () => {
            expect(calculator.divide(2, 10)).toBe(0.2);
        });

        test('throws error when trying to divide by zero', () => {
            expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
        });
    });

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(calculator.multiply(3, 2)).toBe(6);
        });

        test('multiplies two negative numbers', () => {
            expect(calculator.multiply(-3, -2)).toBe(6);
        });

        test('multiplies a positive number and a negative number', () => {
            expect(calculator.multiply(3, -2)).toBe(-6);
        });
    });
});