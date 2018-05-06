// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let freq = {};
    let maxFreq = 0;
    let max = '';
    for (char of str) {
        freq[char] = ++freq[char] || 1;
    }
    for (key in freq) {
        if (freq[key] > maxFreq ) {
            maxFreq = freq[key];
            max = key;        }
    }
    return max;
}

module.exports = maxChar;
