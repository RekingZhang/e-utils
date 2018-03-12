import types from './../lib/type';

test('isArray', () => {
	expect(types.isArray([])).toBe(true);

	expect(types.isArray({})).toBe(false);

	expect(types.isArray(arguments)).toBe(false);
});

test('isArrayBuffer', () => {
	let buffer = new ArrayBuffer(8);
	expect(types.isArrayBuffer(buffer)).toBe(true);

	expect(types.isArrayBuffer([])).toBe(false);
});

test('isBlob', () => {
	let debug = { hello: 'world' };
	let blob = new Blob([JSON.stringify(debug, null, 2)], {
		type: 'application/json'
	});
	expect(types.isBlob(blob)).toBe(true);

	expect(types.isBlob(debug)).toBe(false);
});

test('isDate', () => {
	expect(types.isDate(new Date())).toBe(true);

	expect(types.isDate(+new Date())).toBe(false);
});

test('isFormData', () => {
	let formData = new FormData();
	formData.append('username', 'Groucho');
	expect(types.isFormData(formData)).toBe(true);

	expect(types.isFormData('formData')).toBe(false);
});

test('isFile', () => {
	let file = new File(['foo'], './../index.js', {
		type: 'text/plain'
	});
	expect(types.isFile(file)).toBe(true);

	expect(types.isFile('formData')).toBe(false);
});

test('isFunction', () => {
	expect(types.isFunction(function fn() {})).toBe(true);

	expect(types.isFunction(() => {})).toBe(true);

	expect(types.isFunction(Array)).toBe(true);

	expect(types.isFunction({})).toBe(false);
});

test('isNull', () => {
	let a = null;
	expect(types.isNull(a)).toBe(true);

	expect(types.isNull('')).toBe(false);
});

test('isNumber', () => {
	expect(types.isNumber(1.2)).toBe(true);

	expect(types.isNumber(-1)).toBe(true);

	expect(types.isNumber(2)).toBe(true);

	expect(types.isNumber('2')).toBe(false);
});

test('isObject', () => {
	expect(types.isObject({})).toBe(true);

	expect(types.isObject('')).toBe(false);

	expect(types.isObject(null)).toBe(false);
});

test('isString', () => {
	expect(types.isString('2323')).toBe(true);

	expect(types.isString({})).toBe(false);
});
test('isUndefined', () => {
	let a,
		b = 1;
	expect(types.isUndefined(a)).toBe(true);

	expect(types.isUndefined(b)).toBe(false);
});
