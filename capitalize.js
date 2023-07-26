function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize; // This line is important for importing the function in the test file
