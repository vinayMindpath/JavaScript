function exampleLet() {
  let letHello = "assigned at the time of creation";
  if (true) {
    // hello = 45;
    letHello = "changed in if block";
  }
  //   console.log(hello);
  return letHello;
}

console.log(`example of let : ${exampleLet()}`);
// console.log(`accessing variable outside the scope of let :${letHello}`);

function exampleVar() {
  var varHello = "defined by var keyword";
  if (true) {
    varHello = "changed in if block";
  }
  return varHello;
}

console.log(`example of var : ${exampleVar()}`);
console.log(`accessing variable outside the scope of var : ${varHello}`);
