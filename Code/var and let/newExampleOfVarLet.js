function main() {
  console.log(`var : accessing before creating and initializing : ${initial}`);
  var initial = 56;
  if (initial <= 56) {
    let final = 1000;
    console.log(`let : accessing after creating and initializing : ${final}`);
  }
  if (initial === 56) {
    let final = 200;
    console.log(`let : accessing after creating and initializing : ${final}`);
  }
  console.log(`var : accessing after creating and initializing : ${initial}`);
  //   console.log(initial);
  console.log(`let : accessing outside the scope : ${final}`);
  //   console.log(final);
}

// y/ jgfbrvmtyg,io,yeall the function
main();
console.log(`var : accessing outside the scope : ${initial}`);
