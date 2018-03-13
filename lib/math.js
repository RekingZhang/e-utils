/**
 * 浮点数精确加、减、乘、除运算函数
 *
 */

!(function() {
	const unboundReduce = Array.prototype.reduce;
	const reduce = Function.prototype.call.bind(unboundReduce);
	/**
	 * 计算浮点数放大倍数，整数放大倍数为1
	 *
	 * @param {Number} x 需要放大的数字
	 * @return {Number}  放大倍数
	 */
	function multiplier(x) {
		let parts = x.toString().split('.');

		if (parts.length < 2) {
			return 1;
		}

		return Math.pow(10, parts[1].length);
	}
	/**
	 * 寻找最大放大倍数
	 *
	 * @return {Number}  最大放大倍数
	 */
	function findMaxMult() {
		return reduce(arguments, function(prev, next) {
			let mp = multiplier(prev),
				mn = multiplier(next);
			return mp > mn ? mp : mn;
		});
	}

	Math.add = function() {
		let maxMult = findMaxMult.apply(null, arguments);

		function reducer(accumulator, currentValue) {
			return accumulator + Math.mul(currentValue, maxMult);
		}

		return reduce(arguments, reducer, 0) / maxMult;
	};
	Math.sub = function() {
		let maxMult = findMaxMult.apply(null, arguments),
			reduced = Math.mul(arguments[0], maxMult);

		function reducer(accumulator, currentValue, currentIndex) {
			if (currentIndex === 0) {
				return accumulator;
			}

			return accumulator - Math.mul(currentValue, maxMult);
		}

		return reduce(arguments, reducer, reduced) / maxMult;
	};

	Math.mul = function() {
		let args = Array.prototype.slice.call(arguments),
			p = 1,
			m = 0;
		args.forEach(val => {
			//注意：268.34 * 100 = 26833.999999999996
			p *= Number(val.toString().replace('.', ''));
			try {
				m += val.toString().split('.')[1].length;
			} catch (e) {}
		});

		return p / Math.pow(10, m);
	};
	Math.div = function() {
		function reducer(accumulator, currentValue) {
			let maxMult = findMaxMult(accumulator, currentValue);

			return (
				Math.mul(accumulator, maxMult) / Math.mul(currentValue, maxMult)
			);
		}

		return reduce(arguments, reducer);
	};
})();
