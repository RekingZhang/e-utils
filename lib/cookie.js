/**
 * Cookie工具方法
 *
 */
const Cookie = {
	/**
	 * 获取cookie
	 *
	 * @param {String} key 目标cookie的key
	 * @param {Function} decode value解码方法 默认使用 decodeURIComponent 进行解码
	 */
	get(key, decode = decodeURIComponent) {
		let value;
		if (key && document.cookie && document.cookie !== '') {
			let cookies = document.cookie.split('; ');
			for (let i = 0, l = cookies.length; i < l; i++) {
				//cookie的value中可能包含未编码的'=',所以此处未使用cookies.split('=')去分割字符串
				if (cookies[i].substring(0, key.length + 1) === key + '=') {
					value = cookies[i].substring(key.length + 1);
					break;
				}
			}
		}
		return value ? decode(value) : value;
	},
	/**
	 * 设置cookie
	 *
	 * @param {String} key cookie 的 key
	 * @param {String|Number|Object} value cookie 的 value
	 * @param {Object} options cookie的其他参数
	 */
	set(key, value, options) {
		options = Object.assign(
			{},
			{
				encode: encodeURIComponent,
				expires: 365,
				path: '/',
				secure: window.location.protocol === 'https:'
			},
			options
		);
		//过期时间默认单位是天，如果需要设置小于一天的过期时间，可以直接转入具体的Date对象
		if (typeof options.expires === 'number') {
			options.expires = new Date(
				new Date().getTime() + options.expires * 864e5
			);
		}
		//格式化value
		if (typeof value === 'object') {
			try {
				value = JSON.stringify(value);
			} catch (e) {}
		}
		//编码value，默认使用encodeURIComponent方法，如需其他编码方式可以传入encode覆盖默认方法
		value = options.encode(value);

		return (document.cookie = [
			key + '=' + value,
			options.expires ? '; expires=' + options.expires.toUTCString() : '',
			options.path ? '; path=' + options.path : '',
			options.domain ? '; domain=' + options.domain : '',
			options.secure ? '; secure' : ''
		].join(''));
	},
	/**
	 * 移除指定cookie
	 *
	 * @param {String} key  cookie 的 key
	 */
	remove(key) {
		this.set(key, '', {
			expires: -1
		});
		return !this.get(key);
	}
};

export default Cookie;
