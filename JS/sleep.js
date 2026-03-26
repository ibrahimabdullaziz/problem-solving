/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

let t = performance.now();
sleep(100).then(() => {
  console.log(performance.now() - t);
});
