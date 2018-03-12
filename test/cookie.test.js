import Cookies from './../lib/cookie';

test('测试添加Cookies', () => {
	const name = 'k';
	const value = 'xxx';
	Cookies.set(name, value);
	expect(Cookies.get(name)).toEqual(value);
});

test('测试配置参数', () => {
	const name = 'k';
	const value = 'xxx';
	Cookies.set(name, value, {
		expires: 1,
		path: '/test',
		domain: 'github.com'
	});
	expect(Cookies.get(name)).toEqual(value);
});

test('测试添加value为Object类型Cookies', () => {
	const name = 'k';
	const value = { a: 1 };
	Cookies.set(name, value);
	expect(JSON.parse(Cookies.get(name))).toEqual(value);
});

test('测试编码、解码', () => {
	const name = 'k';
	const value = 'a=1';
	Cookies.set(name, value);
	expect(Cookies.get(name)).toEqual(value);
});

test('测试自定义过期时间', () => {
	const name = 'k';
	const value = '1';
	Cookies.set(name, value, {
		expires: new Date('2018-03-15')
	});
	expect(Cookies.get(name)).toEqual(value);
});

test('测试删除Cookies', () => {
	const name = 'k';
	const value = 'xxx';
	let un;
	Cookies.set(name, value);
	Cookies.remove(name);
	expect(Cookies.get(name)).toEqual(un);
});
