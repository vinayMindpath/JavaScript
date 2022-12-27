import fetch from "node-fetch";

const url = `https://jsonplaceholder.typicode.com/comments`;

const data = async ()=>{
    let comments = await fetch(url);
    comments = await comments.json()
    // console.log(comments.allSettled())
    let top10 = 1;
    comments.forEach(val => {
        if(top10 <=10){
            // console.log(val.email +" "+val.id)
            console.log(val)
        }
        top10++;
    });
}

data().catch(err => console.log("got error")); 
// console.log(data().allSettled())
// data.allSettled()