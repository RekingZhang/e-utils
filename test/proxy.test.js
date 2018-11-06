import proxy from './../lib/proxy';

describe('proxy', () => {
	let count = 0;

	function add(a, b) {
		count++;
		return a + b;
	}
	test('代理缓存', () => {
		const proxyAdd = proxy(add);
		proxyAdd(1, 2);
		proxyAdd(1, 2);
		expect(count).toBe(1);
		proxyAdd(2, 2);
		expect(count).toBe(2);
	});

});