function multiply(a, b) {
  return a * b;
}

function compute(a, callback) {
  return callback(a, a);
}
function square(a) {
  return compute(a, multiply);
}

console.log(`print of callback function : ${square(4)}`);
console.log(`print after callbacks : 3`);
