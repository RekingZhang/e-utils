/**
 * 函数柯里化
 *
 * @param {*} fn
 */
function currying(fn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return fn.length <= args.length ? fn.apply(void 0, args) : currying.bind.apply(currying, [null, fn].concat(args));
}

export default currying;