const anotherFunction = fn=>{
    console.log("another function run")
    console.log(" in another function")
    hold = fn(100)
    console.log("Hold : ",hold)
    return hold;
};
const val = a => {
    console.log('val function run. ')
    console.log(" in a function.")
    console.log(a*2);
    return a*2;
};

console.log("start")
anotherFunction(val)
console.log("end")

let add = (a,b) => a+b;
let another = get => get(1,2);

console.log(another(add));
