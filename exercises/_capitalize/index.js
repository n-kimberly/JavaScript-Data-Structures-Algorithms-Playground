// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Initial Attempt
function capitalize(str) {
    let output = [];
    output[0] = str[0].toUpperCase();
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] == ' ') output[i+1] = str[i+1].toUpperCase(); 
      else output[i+1] = str[i+1]; 
    }
    return output.join('');
}

// Second Attempt
function capitalize(string) {
    let output = [];
    let str = string.split(' ');
    for (char of str) { output.push(char[0].toUpperCase() + char.slice(1)); }
    return output.join(' ');
}

module.exports = capitalize;
