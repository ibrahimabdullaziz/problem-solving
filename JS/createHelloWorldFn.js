/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World!";
  };
};

const f = createHelloWorld();
console.log(f()); // "Hello World"
console.log(f({})); // "Hello World"
console.log(f([], null)); // "Hello World"
console.log(f(45, { key: "megatron000" })); // "Hello World"
