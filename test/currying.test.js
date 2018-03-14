import currying from './../lib/currying';

describe('currying', () => {
	function add(n1, n2) {
		return n1 + n2;
	}
	test('柯里化', () => {
		let addCurry = currying(add, 1);
		expect(addCurry(4)).toBe(5);
	});
});
