/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

const fn = function sum(accum, curr) {
  return accum + curr * curr;
};

console.log(reduce([1, 2, 3, 4], fn, 100));
