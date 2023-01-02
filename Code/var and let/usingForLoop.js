function usingVar() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log("using var in for loop");
      console.log(i);
    }, 1000);
  }
}

usingVar();

function usingLet() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log("using let in for loop : ");
      console.log(i);
    }, 1000);
  }
}
usingLet();
