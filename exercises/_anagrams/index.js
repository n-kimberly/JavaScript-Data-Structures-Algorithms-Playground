// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Initial Attempt
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }
  
// function cleanString(str) {
//     return str
//       .replace(/[^\w]/g, '')
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('');
// }

// Alternative attempt without .sort()
function anagrams(strA, strB) {

    // Set up hash maps
    let A = {};
    let B = {};

    // Clean up strings
    strA = strA.replace(/[^\w]/g, '').toLowerCase();
    strB = strB.replace(/[^\w]/g, '').toLowerCase();

    // Create char maps
    for (e of strA) { A[e] = ++A[e] || 1; }
    for (e of strB) { B[e] = ++B[e] || 1; }

    // Dismiss based on char map length
    if (Object.keys(A).length != Object.keys(B).length) { return false; }    

    // Dismiss based on frequency
    for (key in A) { if (A[key] != B[key]) return false; }

    // Pass as true anagram if function runs up to this point
    return true;
}



module.exports = anagrams;