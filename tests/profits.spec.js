import { yearlyProfitCalculator } from '../src/profits.js';

test('Test obliczania zysku z lokaty', () => {
  const amount = 1000;
  const interestRate = 10;

  const expectedValue = 81;

  const actualValue = yearlyProfitCalculator(amount, interestRate);

  expect(actualValue).toEqual(expectedValue);
})