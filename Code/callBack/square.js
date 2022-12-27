function multiply(a,b){
    return a*b;
}

function toCompute(a,callback){
    return callback(a,a);
}

function square(a){
    return toCompute(a,multiply);
}

console.log(square(4));