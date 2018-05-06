// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Initial Attempt
function palindrome(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed
    }
    return reversed == str;
}

// Improved Attempt
function palindrome(str) {
    let reversed = str.split('').reduce((output, i) =>  i + output, '');
    return reversed == str;
}

// Alternative Attempt
function palindrome(str) {
    console.log("string is " + str);
    let i = 0;
    let half_i = Math.floor(str.length/2);
    while (i < half_i) {
        if (str[i] !== str[str.length-1-i]) {
            return false;
        }
        i++;
    }
    return true;
}

// Standard
function palindrome(str) {
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;
