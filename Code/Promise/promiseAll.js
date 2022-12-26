let promise1 = new Promise((resolve) => {
    setTimeout(()=>resolve('Promise 1 accepted'),2000)
});

let promise2 = new Promise((resolve) => {
    setTimeout(()=>resolve('Promise 2 accepted'),3000)
});

let promise3 = new Promise((resolve) => {
    setTimeout(()=>resolve('Promise 3 accepted'),1000)
});

Promise.race([promise1,promise2,promise3]).then((message) => console.log(message));
Promise.all([promise1,promise2,promise3]).then((message) => console.log(message));
Promise.resolve('yes').then((message) => console.log(message))