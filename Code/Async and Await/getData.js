import fetch from "node-fetch";

const loadData = async ()=>{
    const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
    const url2 = `https://jsonplaceholder.typicode.com/todos/2`;
    const url3 = `https://jsonplaceholder.typicode.com/todos/3`;

    try{
        const results = await Promise.all([fetch(url1),fetch(url2),fetch(url3)]);
        // console.log(results);
        const promises = results.map(result => result.json())
        const finalResult = await Promise.all(promises)
        console.log(finalResult)
    }catch(err){
        console.log("error");
    }
    // console.log(promises)
}
loadData()