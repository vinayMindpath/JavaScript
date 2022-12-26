let promise = new Promise((res,err) => {
    a = 4;
    if(a==5){
        res("a is "+a);
    }
    else {
        err("a is "+a)
    }
});

let checkNumType = new Promise((res,err)=>{
    a = '4' ;
    if (typeof a == 'number') res(typeof a);
    else err(typeof a);
})
promise.then((message)=> console.log(message)).catch((reason) => console.log(reason))

Promise.all([promise,checkNumType]).then((message)=> console.log(message)).catch((reason)=>console.log(reason));

Promise.allSettled([promise,checkNumType]).then((result) => result.forEach((value)=> console.log(value)))