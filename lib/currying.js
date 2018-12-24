/**
 * 函数柯里化
 *
 * @param {*} fn
 */

function currying(fn, ...args) {
	return fn.length <= args.length
		? fn(...args)
		: currying.bind(null, fn, ...args);
}

export default currying;
