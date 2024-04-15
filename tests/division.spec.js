import { division } from '../src/division.js';

// Nie powinnismy tworzyć testów, które sprawdzają funkcje danego języka. 
// Zakładamy, że wszystkie funkcje w języku JavaScript są napisane poprawnie.

test('Test dzielenia', () => {
	const a = 42;
	const b = 6;
	const expectedResult = 7;

	const actualResult = division(a, b);

	expect(actualResult).toEqual(expectedResult);
})

test('Test dzielenia przez zero', () => {
	const a = 25;
	const b = 0;
	const expectedResult = Infinity;

	const actualResult = division(a, b);

	expect(actualResult).toEqual(expectedResult);
})

test('Test dzielenia napisów', () => {
	const a = 'a';
	const b = 'b';

	const actualResult = division(a, b);

	expect(actualResult).toBeNaN();
})

// możemy wywołać npm run test w trybie watch, żeby testy były uruchamiane automatycznie po każdej zmianie plików
// npm run test -- --watch

