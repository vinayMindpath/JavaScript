import { get } from "http";
import fetch from "node-fetch";
const url = `https://jsonplaceholder.typicode.com/users`;

// const data= fetch(url).then(res => {
//     return res.json()
// })
// console.log(data)

const getUser = async ()=>{
    const user = await fetch(url);
    // console.log(user)
    const data = await user.json()
    // const gotData = await new Promise(data)
    console.log(data)
}
getUser()