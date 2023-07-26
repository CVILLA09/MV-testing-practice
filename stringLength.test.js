const stringLength = require('./stringLength');

test('returns the length of a string', () => {
    expect(stringLength('hello')).toBe(5);
});

test('throws error when string length is less than 1', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters');
});

test('throws error when string length is more than 10', () => {
    expect(() => stringLength('morethantencharacters')).toThrow('String length must be between 1 and 10 characters');
});
