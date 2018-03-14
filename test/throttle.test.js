import throttle from './../lib/throttle';

jest.useFakeTimers();

describe('throttle', () => {
	test('节流函数每秒执行一次', () => {
		Date.now = jest
			.fn()
			.mockImplementationOnce(() => 1)
			.mockImplementationOnce(() => 1002)
			.mockImplementationOnce(() => 2002)
			.mockImplementationOnce(() => 2004)
			.mockImplementationOnce(() => 3003)
			.mockImplementationOnce(() => 4005)
			.mockImplementationOnce(() => 5005)
			.mockImplementationOnce(() => 5006)
			.mockImplementationOnce(() => 5007)
			.mockImplementationOnce(() => 5030);
		const callback = jest.fn();
		const containerFunc = throttle(callback, 1000);
		[...Array(10)].forEach(containerFunc);

		expect(callback).toHaveBeenCalledTimes(5);
	});

	test('节流函数每秒执行一次，首次立即执行', () => {
		let startTime = +new Date();
		Date.now = jest
			.fn()
			.mockImplementationOnce(() => startTime)
			.mockImplementationOnce(() => startTime + 10)
			.mockImplementationOnce(() => startTime + 101)
			.mockImplementationOnce(() => startTime + 203)
			.mockImplementationOnce(() => startTime + 305);
		const callback = jest.fn();
		const containerFunc = throttle(callback, 100, true);
		[...Array(5)].forEach(containerFunc);

		expect(callback).toHaveBeenCalledTimes(4);
	});
});
