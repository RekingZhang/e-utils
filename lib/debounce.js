/**
 * 防抖函数
 *
 * @param {Function} fn 延迟执行函数
 * @param {Number} wait 延迟时间间隔
 * @param {Boolean} immediate 第一次调用是否立即执行
 */
function debounce(fn, wait, immediate) {
	let timer;
	return function() {
		let context = this,
			args = arguments;

		if (!timer && immediate) {
			timer = -1;
			return fn.apply(context, args);
		}

		if (timer) clearTimeout(timer);

		timer = setTimeout(function() {
			fn.apply(context, args);
		}, wait);
	};
}

export default debounce;
