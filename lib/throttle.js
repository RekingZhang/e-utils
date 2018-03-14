/**
 * 节流函数
 *
 * @param {Function} fn 延迟执行函数
 * @param {Number} wait 延迟函数执行时间间隔
 * @param {Boolean} immediate 第一次调用是否立即执行
 */
function throttle(fn, wait, immediate) {
	let lastTime = 0;
	return function() {
		let timestamp = Date.now();

		if (!lastTime && !immediate) {
			lastTime = timestamp;
		}

		if (timestamp - lastTime >= wait) {
			lastTime = timestamp;
			return fn.apply(this, arguments);
		}
	};
}

export default throttle;
