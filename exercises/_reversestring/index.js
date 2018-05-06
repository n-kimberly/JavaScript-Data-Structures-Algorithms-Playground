// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Initial attempt
function reverse(str) {
    var output = '';
    for (var i = str.length-1; i >= 0; i--) {
        output = output + str[i];
    }
    return output;
}

// Initial Attempt, es16
function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed
    }
    return reversed;
}

// Improved Attempt
function reverse(str) {
    return str.split('').reduce((output, i) => {
        return i + output 
    }, '');
}

// Standard
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

// Regular
function reverse(str) {
    return str.split('').reverse().join('');
}

reverse('abcd');
module.exports = reverse;
