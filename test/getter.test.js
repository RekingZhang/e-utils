import getter from './../lib/getter';
import currying from './../lib/currying';

describe('getter', () => {
	const obj = {
		a: 1,
		b: {
			c: 3
		},
		d: 78
	};
	test('测试获取嵌套对象属性：参数列表', () => {
		expect(getter(obj, 'b', 'c')).toBe(3);

		expect(getter(obj, 'a', 'f')).toBeUndefined();

		expect(getter(obj, 'e', 'f')).toBeUndefined();

		expect(getter(obj, 'b')).toEqual({ c: 3 });
	});

	test('测试获取嵌套对象属性：参数数组', () => {
		expect(getter(obj, ['b', 'c'])).toBe(3);

		expect(getter(obj, ['a', 'f'])).toBeUndefined();

		expect(getter(obj, ['e', 'f'])).toBeUndefined();

		expect(getter(obj, ['b'])).toEqual({ c: 3 });
	});

	test('测试获取嵌套对象属性：柯里化', () => {
		let getObj = currying(getter, obj);
		expect(getObj('b', 'c')).toBe(3);

		expect(getObj(['a', 'f'])).toBeUndefined();

		expect(getObj(['e', 'f'])).toBeUndefined();

		expect(getObj(['b'])).toEqual({ c: 3 });
	});
});
