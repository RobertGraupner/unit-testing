import { division } from '../src/division.js';

// Nie powinnismy tworzyć testów, które sprawdzają funkcje danego języka. 
// Zakładamy, że wszystkie funkcje w języku JavaScript są napisane poprawnie.

function test1 () {
	const a = 42;
	const b = 6;
	const expectedResult = 7;

	const actualResult = division(a, b);


	if(actualResult === expectedResult) {
		console.log('Dzielenie działa poprawnie');
	}
}
test1();

function test2 () {
	const a = 25;
	const b = 0;
	const expectedResult = Infinity;

	const actualResult = division(a, b);

	if(actualResult === expectedResult) {
		console.log('Dzielenie przez zero działa poprawnie');
	}
}
test2();

function test3 () {
	const a = 'a';
	const b = 'b';

	const actualResult = division(a, b);

	if(isNaN(actualResult)) {
		console.log('Dzielenie napisów przez siebie działa poprawnie');
	}
}
test3();
