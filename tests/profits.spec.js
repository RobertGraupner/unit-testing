import {yearlyProfitCalculator} from '../src/profits.js';

function test1() {
  const amount = 1000;
  const interestRate = 10;

  const expectedValue = 81;

  const actualValue = yearlyProfitCalculator(amount, interestRate);
  console.log(actualValue);

  if(actualValue === expectedValue) {
    console.log('Zysk z lokat liczy się poprawnie');
  } else {
    console.log('Zysk z lokat nie liczy się poprawnie');
  }
}
test1();