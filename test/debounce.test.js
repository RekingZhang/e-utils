import debounce from './../lib/debounce';

jest.useFakeTimers();

describe('debounce', () => {
	test('连续调用', () => {
		const callback = jest.fn();
		const fn = debounce(callback, 100);

		setTimeout(fn, 100);
		setTimeout(fn, 150);
		setTimeout(fn, 200);
		setTimeout(fn, 250);

		//快进1000ms
		jest.advanceTimersByTime(1000);

		expect(callback).toBeCalled();
		expect(callback).toHaveBeenCalledTimes(1);
	});

	test('第一次立即执行', () => {
		const callback = jest.fn();
		const fn = debounce(callback, 100, true);

		setTimeout(fn, 100);
		setTimeout(fn, 150);
		setTimeout(fn, 200);
		setTimeout(fn, 250);

		//快进1000ms
		jest.advanceTimersByTime(1000);

		expect(callback).toBeCalled();
		expect(callback).toHaveBeenCalledTimes(2);
	});
});
