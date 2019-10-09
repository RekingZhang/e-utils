import {
    Cookie,
    compose,
    pipe,
    currying,
    debounce,
    getter,
    Math,
    proxy,
    rule,
    singleton,
    throttle,
    type,
    Validator
} from '../../';

Cookie.set('name', 'tom');
Cookie.set('age', 18);
Cookie.get('name');
Cookie.get('age');
Cookie.remove('age');

compose(
    function() {
        console.log(1);
    },
    function() {
        console.log(2);
    }
);

pipe(
    function() {
        console.log(1);
    },
    function() {
        console.log(2);
    }
);

currying(function() {}, 1, 2);

debounce(function() {}, 1000, true);

getter({}, ['a', 'b']);

Math.add(0.1, 0.7, 0.51);
Math.sub(-1.1, 0.1, -1.1);
Math.mul(1.1, 10);
Math.div(-1.1, 0.1);

proxy(function() {});

rule.isMobilePhone('');
rule.isCreditCard('');
rule.isEmail('');

singleton(function() {});

throttle(function() {}, 1000);

type.isArray([]);
type.isDate(12);

const validator = new Validator([
    {
        rule: /^\S/,
        message: '不能为空'
    }
]);

validator.addRule({
    rule: /\d/,
    message: '必须是数字'
});

validator.check('12');

validator.getMessage();
