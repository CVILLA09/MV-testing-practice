const capitalize = require('./capitalize'); 

test('capitalize the first letter of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
});