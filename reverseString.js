function reverseString(string) {
    return string.split('').reverse().join('');
}

module.exports = reverseString; // This line is important for importing the function in the test file
