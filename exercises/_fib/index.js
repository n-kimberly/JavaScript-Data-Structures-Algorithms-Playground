// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Recursive method with fib(0) and fib(1) base cases
// function fib(n) {
//     if (n==1) { return 1 }
//     if (n==0) { return 0 }
//     return fib(n-1) + fib(n-2);
// }

// Memoization method
function memoize(fn) {

    // first set up a cache object
    const cache = {};
    console.log("======================");
    
    // now return the following function
    return function(...args) {
        console.log("current arg is " + args);

        // if cache exists, then return the cached value as result
        if (cache[args]) {
            console.log("----------------------");
            console.log("cached value for " + args + " is " + cache[args]);
            return cache[args];
        } else {
            console.log("there are no values in cache.");
        }
    
        // otherwise, calculate the result
        console.log("now calculating fib(" + args + ")");
        const result = fn.apply(this, args);

        console.log("current result is " + result);
        console.log("so now we add this result into cache");
        cache[args] = result;

        // print our cache keys (optional)
        for (let key in cache) {
            console.log("cache @ key " + key + " = " + cache[key]);
        }
        return result;
    };
    
}

function slowFib(n) {

    // base cases are provided here
    if (n < 2) {
        return n;
    }
    
    // recursion takes place here
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
  
module.exports = fib;
