// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// // Initial attempt
// function reverse(str) {
//     var output = '';
//     for (var i = str.length-1; i >= 0; i--) {
//         output = output + str[i];
//     }
//     return output;
// }

// // Using es15 syntax
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed
//     }
//     return reversed;
// }

// // Using Array.prototype.reverse()
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// // Not using Array.prototype.reverse()
// function reverse(str) {
//     return str.split('').reduce((output, i) => {
//         return i + output 
//     }, '');
// }

//Condensed
function reverse(str) {
    return str.split('').reduce((output, i) =>  i + output, '');
}
module.exports = reverse;
