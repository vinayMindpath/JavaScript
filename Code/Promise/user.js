const userInfo = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({name : 'ed'});
    }, 2000);
});
let username = userInfo.then(res =>{
    console.log("data is ready.")
    console.log(res);
    return res;
});
// console.log(username);
Promise.allSettled([userInfo]).then(res => console.log(res))