/**
 * 代理缓存
 *
 * @param {Fcuntion} fn
 */
function proxy(fn) {
  return function () {
    var cache = {};
    return function () {
      var args = Array.prototype.join.call(arguments, ',');

      if (args in cache) {
        return cache[args];
      }

      cache[args] = fn.apply(this, arguments);
      return cache[args];
    };
  }();
}

export default proxy;