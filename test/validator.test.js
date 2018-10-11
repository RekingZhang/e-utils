import Validator from '../lib/validator';


describe('validator', () => {
	test('测试正则校验', () => {
		let validator = new Validator([{
				rule: /^\S/,
				message: '不能为空'
			},
			{
				rule: /\d/,
				message: '必须是数字'
			}
		])
		expect(validator.check(10)).toBe(true);
		expect(validator.getMessage()).toBe('');
		expect(validator.check('')).toBe(false);
		expect(validator.getMessage()).toBe('不能为空');
		expect(validator.check('ss')).toBe(false);
		expect(validator.getMessage()).toBe('必须是数字');
	});
	test('测试添加校验', () => {
		let validator = new Validator()
		validator.addRule({
			rule: /\d/,
			message: '必须是数字'
		});
		expect(validator.check('ss')).toBe(false);
		expect(validator.getMessage()).toBe('必须是数字');
	});
	test('测试自定义校验函数', () => {
		let validator = new Validator({
			rule: function (val) {
				return /^\S/.test(val);
			},
			message: '不能为空'
		})
		expect(validator.check('')).toBe(false);
		expect(validator.check('ss')).toBe(true);
	})

});