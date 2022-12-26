let promise= new Promise((resolveOuter)=>{
    return resolveOuter(new Promise(resolveInner =>{
        // console.log("wait for 10s ==> ")
        setTimeout(() => {
            resolveInner("Got the inner resolve.")
        }, 2000);
    }).then(mes => {
        console.log("wait for 2s ==> ")
        return mes;
    }));
});

// promise.then(message => console.log(message)).catch(err => console.log(err));

let anotherPromise = new Promise(resolve=>{
    return resolve(new Promise(resolveInner =>{
        setTimeout(() => {
            // resolveInner("Resolved in 5s.")
            resolveInner(()=>{
                return promise.then(message => console.log(message)).catch(err => console.log(err))
            });
        }, 1000);
    }).then(res => {
        console.log("wait for 1s ==> ")
        return res;
    }));
});

anotherPromise.then(res => console.log("Another Promise : "+res)).catch(err=>console("got an err "+err));