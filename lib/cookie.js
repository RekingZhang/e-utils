import _typeof from "@babel/runtime/helpers/typeof";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.regexp.split";

/**
 * Cookie工具方法
 *
 */
var Cookie = {
  /**
   * 获取cookie
   *
   * @param {String} key 目标cookie的key
   * @param {Function} decode value解码方法 默认使用 decodeURIComponent 进行解码
   */
  get: function get(key) {
    var decode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : decodeURIComponent;
    var value;

    if (key && document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split('; ');

      for (var i = 0, l = cookies.length; i < l; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');
        var name = decode(parts[0]); //去掉多余的"

        if (cookie.indexOf('"') === 0) {
          cookie = cookie.slice(1, -1);
        }

        if (key === name) {
          value = decode(cookie);
          break;
        }
      }
    }

    return value;
  },

  /**
   * 设置cookie
   *
   * @param {String} key cookie 的 key
   * @param {String|Number|Object} value cookie 的 value
   * @param {Object} options cookie的其他参数
   */
  set: function set(key, value, options) {
    options = Object.assign({}, {
      encode: encodeURIComponent,
      expires: 365,
      path: '/',
      secure: window.location.protocol === 'https:'
    }, options);
    var expires = options.expires; //过期时间默认单位是天，如果需要设置小于一天的过期时间，可以直接转入具体的Date对象

    if (typeof expires === 'number' && expires !== 0) {
      expires = new Date(new Date().getTime() + expires * 864e5);
    } //格式化value


    if (_typeof(value) === 'object') {
      try {
        value = JSON.stringify(value);
      } catch (e) {}
    } //编码key、value，默认使用encodeURIComponent方法，如需其他编码方式可以传入encode覆盖默认方法


    key = options.encode(key);
    value = options.encode(value);
    return document.cookie = [key + '=' + value, expires ? '; expires=' + expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
  },

  /**
   * 移除指定cookie
   *
   * @param {String} key  cookie 的 key
   */
  remove: function remove(key) {
    this.set(key, '', {
      expires: -1
    });
    return !this.get(key);
  }
};
export default Cookie;