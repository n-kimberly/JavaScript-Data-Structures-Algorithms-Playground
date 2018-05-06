// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Initial Attempt
function reverseInt(n) {
    let n_arr = n.toString().split('');
    let rev = n_arr.reduce((char, i) =>  i + char, '');
    if (n_arr[0] == '-') {
        rev.split('').shift();
        rev = '-' + parseInt(rev).toString();
    };
    return parseInt(rev);
}

// Second Attempt
function reverseInt(n) {
    let nStr = n.toString();
    let rev = '';
    for (let char of nStr) {
        rev = char + rev
    };
    if (nStr[0] == '-') {
        rev.split('').shift();
        rev = '-' + parseInt(rev).toString();
    };
    return parseInt(rev);
}

// Improved Attempt
function reverseInt(n) {
    let nStr = n.toString();
    let rev = '';
    for (let char of nStr) {
        rev = char + rev
    };
    return nStr[0] == '-' ? parseInt(rev)*-1 : parseInt(rev);
}

// Standard
function reverseInt(n) {
    const reversed = n
      .toString()
      .split('')
      .reverse()
      .join('');
  
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
