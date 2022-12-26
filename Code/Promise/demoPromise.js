let p = new Promise((resolve,reject) => {
    let a = 1+2;
    if (a ==3){
        resolve("Succeed");
    }
    else {
        reject('failed');
    }
});


p2 = Promise.resolve('succeed');
p3 = new Promise((resolve, reject) => {
    let a= 'string';
    // a =12
    if (a == typeof a){
        resolve('string')
    }
    else {
        reject(typeof a)
    }
});

// using race method of promise to get the first promise to be executed
// Promise.race([p,p2,p3]).then((values) => console.log(values)).catch((reason) => console.log(reason)).finally(()=>console.log("finally enterred.."));
setTimeout(()=>{
    console.log("using race method of promise to get the first promise to be executed.....");
    Promise.race([p,p2,p3]).then((values) => console.log(values)).catch((reason) => console.log(reason)).finally(()=>console.log("finally enterred.."));
},1000);


// using all method of promise to get all the resolved message if each promise executed if any promise get reject, all only send the message of reject value.

setTimeout(()=>{
    console.log("\nusing all method of promise to get all the resolved message if each promise executed if any promise get reject, all only send the message of reject value.");
    Promise.all([p,p2,p3]).then((values) => console.log(values)).catch((values) => console.log(values)).finally(()=>console.log("finally enterred.."));
},2000);


// settled method is used to show the status of the promise.
setTimeout(() => {
    console.log("\nsettled method is used to show the status of the promise.");
    Promise.allSettled([p,p2,p3]).then((values) => values.forEach((value)=> console.log(value))).catch((reason)=> console.log(reason)).finally(()=>console.log("finally enterred.."));    
}, 3000);


// any method is used to show if any promise fulfills the promise or not. it takes an iterable of promises and returns a promise that is the result either fulfilled or rejected.
setTimeout(() => {
    console.log("\nany method is used to show if any promise fulfills the promise or not. it takes an iterable of promises and returns a promise that is the result either fulfilled or rejected.");
    Promise.any([p,p2,p3]).then((value) => console.log(value)).catch((reason)=> console.log(reason)).finally(()=>console.log("finally enterred.."));    
}, 4000);