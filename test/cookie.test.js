import { jsdom } from 'jsdom';
import Cookie from './../lib/cookie';

test('测试添加Cookie', () => {
	const name = 'k';
	const value = 'xxx';
	Cookie.set(name, value);
	expect(Cookie.get(name)).toEqual(value);
});

test('测试配置参数', () => {
	const name = 'k';
	const value = 'xxx';
	Cookie.set(name, value, {
		expires: 1,
		path: '/test',
		domain: 'github.com'
	});
	expect(Cookie.get(name)).toEqual(value);
});

test('测试添加value为Object类型Cookie', () => {
	const name = 'k';
	const value = { a: 1 };
	Cookie.set(name, value);
	expect(JSON.parse(Cookie.get(name))).toEqual(value);
});

test('测试编码、解码', () => {
	const name = 'k';
	const value = 'a=1';
	Cookie.set(name, value);
	expect(Cookie.get(name)).toEqual(value);
});

test('测试自定义过期时间', () => {
	const name = 'k';
	const value = '1';
	Cookie.set(name, value, {
		expires: new Date('2020-09-15')
	});
	expect(Cookie.get(name)).toEqual(value);
});

test('测试删除Cookie', () => {
	const name = 'k';
	const value = 'xxx';
	let un;
	Cookie.set(name, value);
	Cookie.remove(name);
	expect(Cookie.get(name)).toEqual(un);
});
