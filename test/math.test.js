import './../lib/math';

test('测试加法', () => {
	expect(Math.add(0.1, 0.7, 0.51)).toBe(1.31);

	expect(Math.add(1, 90)).toBe(91);

	expect(Math.add(10, 0.701)).toBe(10.701);

	expect(Math.add(-1, 0.7, -0.9)).toBe(-1.2);

	expect(Math.add(-2, -0.71)).toBe(-2.71);

	expect(Math.add(268.34, 0.83)).toBe(269.17);
});

test('测试减法', () => {
	expect(Math.sub(268.34, 0.83)).toBe(267.51);

	expect(Math.sub(21, 0.83, 0.1)).toBe(20.07);

	expect(Math.sub(-1.1, 0.1, -1.1)).toBe(-0.1);
});

test('测试乘法', () => {
	expect(Math.mul(0.7, 0.1)).toBe(0.07);

	expect(Math.mul(1.1, 10)).toBe(11);

	expect(Math.mul(268.34, 100, 1)).toBe(26834);

	expect(Math.mul(-0.1, 0.7, -0.1)).toBe(0.007);
});

test('测试除法', () => {
	expect(Math.div(0.7, 0.1, 0.1)).toBe(70);

	expect(Math.div(268.34, 100)).toBe(2.6834);

	expect(Math.div(-1.1, 0.1)).toBe(-11);
});
