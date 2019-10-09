//compose.js
export function compose(...fns: Function[]): any;
export function pipe(...fns: Function[]): any;

//cookie.js
export const Cookie: {
    get(key: string | number): any;
    set(key: string | number, val: any): string;
    remove(key: string | number): boolean;
};

//currying.js
export function currying(fn: Function, ...args: any[]): any;

//debounce.js
export function debounce(
    fn: Function,
    wait: number,
    immediate?: boolean
): Function;

//getter.js
export function getter(obj: object, keys: any[]): any;

//math.js
export interface Maths extends Math {
    add(...num: number[]): number;
    sub(...num: number[]): number;
    mul(...num: number[]): number;
    div(...num: number[]): number;
}

declare const Math: Maths;

//proxy.js
export function proxy(fn: Function): any;

//rule.js
export const rule: {
    isEmail(email: string): boolean;
    isMobilePhone(tel: string): boolean;
    isCreditCard(ccNum: string): boolean;
};

//singleton.js
export function singleton(fn: Function): Function;

//throttle.js
export function throttle(
    fn: Function,
    wait: number,
    immediate?: boolean
): Function;

//type.js

export const type: {
    isArray(input: any): boolean;
    isArrayBuffer(input: any): boolean;
    isFormData(input: any): boolean;
    isString(input: any): boolean;
    isNumber(input: any): boolean;
    isObject(input: any): boolean;
    isUndefined(input: any): boolean;
    isNull(input: any): boolean;
    isDate(input: any): boolean;
    isFile(input: any): boolean;
    isBlob(input: any): boolean;
    isFunction(input: any): boolean;
};

//validator.js

interface Rule {
    rule: RegExp | Function;
    message: any;
}

export class Validator {
    constructor(rules?: Rule[]);
    check(input: any): boolean;
    addRule(rule: Rule): void;
    getMessage(): any;
}
