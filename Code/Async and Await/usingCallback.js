function multiply(a, b) {
  setTimeout(() => {
    return a * b;
  }, 1000);
}

function compute(a, callback) {
  return callback(a, a);
}

function square(a) {
  return compute(a, multiply);
}

async function execute() {
  let a = await square(4);
  console.log(a);
  return a;
}
execute().then((res) => console.log(res));
// this is an example where await is return a callback rather than promise
