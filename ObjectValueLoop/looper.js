const circuitObj = {
  A: 1,
  B: 3,
  C: 5,
};
function logger(key) {
  console.log(key);
}
function output(key, repeater) {
  let counter = 0;
  while (counter < repeater) {
    // console.log(`counter ${counter}`);
    logger(key);
    counter += 1;
  }
}
Object.keys(circuitObj).forEach(key => {
  const repeater = parseInt(circuitObj[key]);
  //   console.log(`repeater ${repeater}`);
  output(key, repeater);
});
