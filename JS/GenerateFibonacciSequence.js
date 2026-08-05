/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;

    [a, b] = [b, a + b];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

//recursive code
/**
 * @return {Generator<number>}
 */
var fibGenerator = function* (a = 0, b = 1) {
  yield a;
  yield* fibGenerator(b, a + b);
};

//without yield
/**
 * @return {Generator<number>}
 */
var fibGenerator = function () {
  let a = 0,
    b = 1;

  return {
    next: () => {
      let current = a;
      [a, b] = [b, a + b];
      return { value: current, done: false };
    },
  };
};

//sliding window
/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  const window = [0, 1];

  while (true) {
    yield window[0];
    window.push(window[0] + window[1]);
    window.shift();
  }
};
