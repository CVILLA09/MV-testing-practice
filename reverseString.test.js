const reverseString = require('./reverseString'); // This line imports the function from reverseString.js

test('returns the string reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
});
