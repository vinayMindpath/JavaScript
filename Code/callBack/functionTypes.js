// normal function 

function max(a,b){
    if (a >b) 
        return a;
    else 
        return b;
}
console.log("using normal functio....")
console.log("find max in 2 and 3 : ",max(2,3))
// examples of callback function 
console.log('Using callback function : callback are the function which are the argument of another function and working with that function to get the proper output')
console.log("using function without name.")
arr = []
for(i = 0;i<10;i++){
    arr[i] = i+1;
}
console.log("array : ",arr)
let filter = arr.filter(function (val){
    if(val %2 ==0){
        return val;
    }
})

console.log("Using filter selected only even values and returned the Array : ",filter)

console.log('using arrow functions...')
console.log("array : ",arr)
let filter2 = arr.filter((val)=>{
    if(val%2 ==0){
        return val;
    }
})

console.log("Using filter selected only even values and returned the Array : ",filter2)

const anotherFunction = (fn)=>{
    console.log("another function run")
    hold = fn(100)
    console.log("Hold :",hold)
    return hold;
}
const val = (a) => {
    console.log('val function run. ')
    return a*2;
}

console.log(anotherFunction(val))