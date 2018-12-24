import currying from './../lib/currying';

describe('currying', () => {
	function add(a, b, c, d) {
		return a + b + c + d;
	}
	test('柯里化', () => {
		let addCurry = currying(add, 1);
		expect(addCurry(2, 3)(4)).toBe(10);
	});
	test('柯里化', () => {
		let addCurry = currying(add);
		expect(addCurry(1, 2)(3)(4)).toBe(10);
	});
});