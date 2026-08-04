/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// using pointers
var filter = function (arr, fn) {
  const newArr = [];
  let size = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr[size++] = arr[i];
    }
  }
  return newArr;
};
