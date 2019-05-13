const reducer = (f, g) => (...args) => f(g(...args));

/**
 * 函数组合：从右向左执行
 * @param  {[Function,]}  fns
 */
export function compose(...fns) {
	if (fns.length === 1) {
		return fns[0];
	}
	return fns.reduce(reducer);
}

/**
 * 函数管道：从左向右执行
 * @param  {[Function,]} fns
 */
export function pipe(...fns) {
	if (fns.length === 1) {
		return fns[0];
	}
	return fns.reduceRight(reducer);
}
