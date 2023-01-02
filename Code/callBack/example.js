function get(arg, callback) {
  console.log(`Hello, ${arg}`);
  callback();
  console.log("After callback fucntion ");
}

get("sanyam", function () {
  setTimeout(() => {
    console.log("callback function");
  }, 0);
});
