var reducer = function reducer(f, g) {
  return function () {
    return f(g.apply(void 0, arguments));
  };
};
/**
 * 函数组合：从右向左执行
 * @param  {[Function,]}  fns
 */


export function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce(reducer);
}
/**
 * 函数管道：从左向右执行
 * @param  {[Function,]} fns
 */

export function pipe() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduceRight(reducer);
}