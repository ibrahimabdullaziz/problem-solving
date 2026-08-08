/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const chunked = [];

  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }

  return chunked;
};

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const subArrayNumber = Math.ceil(arr.length / size);
  const returnedArray = [];

  let arrayOnFly = [];
  for (let i = 0; i < subArrayNumber; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[i * size + j] || arr[i * size + j] === 0) {
        arrayOnFly.push(arr[i * size + j]);
      }
    }
    returnedArray.push(arrayOnFly);
    arrayOnFly = [];
  }

  return returnedArray;
};

console.log(chunk([0, -0, 19, 6, 8, 7, 9, 325, 0, 428, 23, 757], 3));
