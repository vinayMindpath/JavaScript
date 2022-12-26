arr = []
for(i=1;i<10;i++){
    arr[i-1] = i;
}
console.log(arr)

let lessThanFive = arr.filter((ele)=>{
    if (ele <5 ){
        return ele;
    }
});
console.log("element less than five in previous array : ",lessThanFive)

let greaterThanFive =arr.filter((ele)=>{
    if(ele>5){
        return ele;
    }
});
console.log("element greater than five in previous array : ",greaterThanFive)