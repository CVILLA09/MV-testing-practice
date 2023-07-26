const stringLength = require('./stringLength'); // this line imports the function from stringLength.js

test('returns the length of a string', () => {
    expect(stringLength('hello')).toBe(5);
});
