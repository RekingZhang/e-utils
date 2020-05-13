import type from './type';

/**
 *
 *
 */
class Validator {
	/**
	 *
	 * @param {*} input
	 * @param {Array|Object} rules
	 */
	constructor(rules = []) {
		this.msg = '';
		// this.input = input;
		this.rules = type.isArray(rules) ? rules : [rules];
	}
	/**
	 * 校验
	 */
	check(input) {
		let flag = true;
		for (let i = 0; i < this.rules.length; i++) {
			let current = this.rules[i];

			flag = type.isFunction(current.rule)
				? current.rule(input)
				: current.rule.test(input);

			if (!flag) {
				this.msg = current.message;
				break;
			}
		}
		return flag;
	}
	/**
	 * 添加校验规则
	 * @param {Object} rule
	 * example:	{
	 * 		rule: Regexp|Function,
	 * 		message: String
	 * }
	 */
	addRule(rule) {
		this.rules.push(rule);
	}
	/**
	 * 校验失败时获取错误信息
	 * @return {String}
	 */
	getMessage() {
		return this.msg;
	}
}

export default Validator;
