/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function (fn) {
  let value;
  let isCalled = false;
  return function (...args) {
    if (!isCalled) {
      value = fn(...args);
      console.log(value);
      isCalled = true;
      return value;
    }
    return undefined;
  };
  return undefined;
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
