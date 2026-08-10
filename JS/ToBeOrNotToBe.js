/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const toBe = (value) => {
    if (val === value) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  };
  const notToBe = (value) => {
    if (val !== value) {
      return true;
    } else {
      throw new Error("Equal");
    }
  };
  return { toBe, notToBe };
};

console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(5));
