import singleton from './../lib/singleton';

describe('singleton', () => {
	function getTime() {
		return +new Date();
	}
	test('单例模式', () => {
		const singletonFn = singleton(getTime);
		expect(singletonFn()).toBe(singletonFn());
	});

	test('参数异常', () => {
		expect(() => {
			singleton(12);
		}).toThrowError('12 is not a function');
	});
});
