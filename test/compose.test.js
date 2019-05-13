import {
	compose,
	pipe
} from '../lib/compose';

function add(num1, num2) {
	return num1 + num2;
}

function add2(val) {
	return val + 2;
}

function sub2(val) {
	return val - 2;
}

function mul2(val) {
	return val * 2;
}

function div2(val) {
	return val / 2;
}
describe('compose', () => {
	test('组合', () => {
		let composeMath = compose(sub2, mul2, add2, add);
		expect(composeMath(2, 8)).toBe(22);
	});
	test('组合', () => {
		let compose1 = compose(sub2, mul2);
		let compose2 = compose(mul2, compose1, add2);
		expect(compose2(1)).toBe(8);
	});
	test('组合', () => {
		let composeMath = compose(sub2);
		expect(composeMath(10)).toBe(8);
	});
});

describe('pipe', () => {

	test('管道', () => {
		let composeMath = pipe(add, sub2, mul2);
		expect(composeMath(2, 8)).toBe(16);
	});
	test('管道', () => {
		let compose1 = pipe(sub2, mul2);
		let compose2 = pipe(mul2, compose1, add2);
		expect(compose2(4)).toBe(14);
	});
	test('管道', () => {
		let composeMath = pipe(sub2);
		expect(composeMath(10)).toBe(8);
	});
});