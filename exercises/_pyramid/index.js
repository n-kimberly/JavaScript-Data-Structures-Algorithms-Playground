// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // find length of rows (how many columns)
    let cols = 2*n-1;
    // conduct the following loop range(1-n) times
    for (let i=1; i<=n; i++) {
        // calculate the number of pound signs based on n
        let pound = 2*i-1;
        // calculate number of spaces based on space leftover
        let space = (cols - pound)/2;
        console.log(' '.repeat(space) + '#'.repeat(pound) + ' '.repeat(space));
    }
    return;
}

module.exports = pyramid;
