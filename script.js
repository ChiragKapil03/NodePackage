function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = sortedArray[mid];
  
      if (midValue === target) {
        return mid; // Target found
      } else if (midValue < target) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }
  
    return -1; // Target not found
  }
  
  // Export the function for use in other projects
  module.exports = binarySearch;