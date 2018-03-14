/**
 * 函数柯里化
 *
 * @param {*} fn
 */
function currying(fn) {
	let args = [].slice.call(arguments, 1);
	return function() {
		var newArgs = args.concat([].slice.call(arguments));
		return fn.apply(null, newArgs);
	};
}

export default currying;
