// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// Initial Attempt
// function vowels(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let element of str) {
//         if (vowels.includes(element.toLowerCase())) { count++ }
//     }
//     return count;
// }

// Second Attempt
function vowels(str) {
    let string = str.toLowerCase();
    let vowels = 'aeiou';
    let count = 0;
    for (let char of string) { if (vowels.includes(char)) count++ };
    return count;
}

// Regex solution
function vowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }

module.exports = vowels;
