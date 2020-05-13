function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import type from './type';
/**
 *
 *
 */

var Validator = /*#__PURE__*/function () {
  /**
   *
   * @param {*} input
   * @param {Array|Object} rules
   */
  function Validator() {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Validator);

    this.msg = ''; // this.input = input;

    this.rules = type.isArray(rules) ? rules : [rules];
  }
  /**
   * 校验
   */


  _createClass(Validator, [{
    key: "check",
    value: function check(input) {
      var flag = true;

      for (var i = 0; i < this.rules.length; i++) {
        var current = this.rules[i];
        flag = type.isFunction(current.rule) ? current.rule(input) : current.rule.test(input);

        if (!flag) {
          this.msg = current.message;
          break;
        }
      }

      return flag;
    }
    /**
     * 添加校验规则
     * @param {Object} rule
     * example:	{
     * 		rule: Regexp|Function,
     * 		message: String
     * }
     */

  }, {
    key: "addRule",
    value: function addRule(rule) {
      this.rules.push(rule);
    }
    /**
     * 校验失败时获取错误信息
     * @return {String}
     */

  }, {
    key: "getMessage",
    value: function getMessage() {
      return this.msg;
    }
  }]);

  return Validator;
}();

export default Validator;