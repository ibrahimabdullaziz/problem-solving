/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x = 4) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

const composedFn = compose(functions);
console.log(composedFn(4));

// var compose = function(functions) {
//     return function(x) {
//         return functions.reduceRight((acc, fn) => fn(acc), x);
//     };
// };
