async function promise(){
    const a =  await new Promise((res,err)=>{
        setTimeout(() => {
            res('function');
        }, 3000);
    });
    return a;
}

console.log(await promise())
console.log("Hello");

// const value = async ()=>{
//     let promise = await new Promise((res)=>{
//         setTimeout(res('a'),3000);
//     })
//     return promise; 
// }
// let store = await value().then(res=>{
//     return res;
// })
// console.log(store)