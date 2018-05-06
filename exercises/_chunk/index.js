// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Initial Attempt
function chunk(array, size) {
    let output = [];    
    for (let j = 0; j < array.length; j = j + size) {
      let element = [];
      for (let i = 0; i < size && i+j < array.length; i++) {
        element.push(array[j+i]);
      }
      output.push(element);
    }
    return output;
}

// Second Attempt
function chunk(arr, size) {
    let output = [];
    let len = arr.length;
    for (let i = 0; i < len; i = i + size) {
      if (arr.length >= size) output.push(arr.splice(0,size));
      else output.push(arr);
    }
    return output;
}

// Third Attempt
function chunk(arr, size) {
    let i = 0;
    let output = [];
    while (i < arr.length) {
      output.push(arr.slice(i,i+size));
      i = i + size;
    }
    return output;
  }

module.exports = chunk;
