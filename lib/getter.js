import type from './type';
/**
 * 安全获取嵌套对象属性方法
 *
 * @param {Object} obj 原始对象
 * @param {Array|List} keys 值列表
 * @returns {*}
 *
 * eg:
 *    var a = {
 *		b: {
 *		  c:1
 *		}
 *	  };
 *    console.log(getter(a, 'b'));//{c:1}
 *    console.log(getter(a,'b','c'));//1
 *    console.log(getter(a,'f','c'));//undefined
 *
 *    console.log(getter(a, ['b']));//{c:1}
 *    console.log(getter(a,['b','c']));//1
 *    console.log(getter(a,['f','c']));//undefined
 */

function getter(obj, keys) {
	//调用的对象不能为空，并必须为Object数据类型
	if (!obj || !type.isObject(obj)) {
		return undefined;
	}
	//兼容数组式和列表式两种调用方式
	if (!type.isArray(keys)) {
		keys = Array.prototype.slice.call(arguments, 1);
	}
	let key = keys.shift();

	if (keys.length === 0) {
		return obj[key];
	} else {
		return getter.call(this, obj[key], keys);
	}
}

export default getter;
