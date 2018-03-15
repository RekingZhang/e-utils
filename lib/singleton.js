import type from './type';
/**
 * 通用单例模式工具函数
 *
 * @param {Function} fn 回调函数
 * @return
 */

function singleton(fn) {
	let result;
	//类型检测，回调函数必须是一个方法
	if (!type.isFunction(fn)) {
		throw new TypeError(fn + ' is not a function');
	}
	return function() {
		return result || (result = fn.apply(this, arguments));
	};
}

export default singleton;
