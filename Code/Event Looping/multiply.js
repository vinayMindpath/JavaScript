// got another function
function multiply(a, b) {
  //   setTimeout(() => {
  //     return a * b;
  //   }, 1000);
  return a * b;
}

function compute(a, callback) {
  return callback(a, a);
}

function square(a) {
  let value = compute(a, multiply);
  return value;
}
console.log(square(4));
// get the value
