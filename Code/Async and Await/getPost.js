import fetch from "node-fetch";

const url = `https://jsonplaceholder.typicode.com/comments`;

const data = async ()=>{
    let comments = await fetch(url);
    comments = await comments.json()
    // console.log(comments.allSettled())
    let top10 = 1;
    comments.forEach(val => {
        if(top10 <=5){
            // console.log(val.email +" "+val.id)
            console.log(val)
        }
        top10++;
    });
}

await data().catch(err => {
    console.log("got error");
    console.error(err)
}); 

Promise.allSettled([data]).then(mes => console.log(mes))