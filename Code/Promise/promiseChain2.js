let promise = new Promise((resolveOuter) => {
    return resolveOuter(new Promise(resolveInner => {
        // console.log("wait for 10s ==> ")
        setTimeout(() => {
            resolveInner("Got the inner resolve.")
        }, 2000);
    }).then(mes => {
        console.log("wait for 2s ==> ")
        console.log(mes)
        return mes;
    }));
});

// promise.then(message => console.log(message)).catch(err => console.log(err));

let anotherPromise = new Promise((resolve) => {
    return resolve(new Promise(resolveInner => {
        setTimeout(() => {
            // resolveInner("Resolved in 5s.")
            console.log("resolve is going to take 3 seconds before execution")
            resolveInner(promise.then());
        }, 3000);
    }));
});

anotherPromise.then(res => console.log("Another Promise : " + res)).catch(err => console("got an err " + err));