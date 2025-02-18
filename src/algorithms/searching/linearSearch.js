/**
 * Linear Search - Does a straightforward comparison for a value with all the items in the array
 * Big O Notation = Linear Time Complexity O(N)
 * @param {*[]} array
 * @param {*} value
 * @return {number[]}
 */
function linearSearch(array, value) {
  let foundIndexes = [];
  array.forEach((item, idx) => {
    if (item === value) foundIndexes.push(idx);
  });
  return foundIndexes;
}

module.exports = linearSearch;
