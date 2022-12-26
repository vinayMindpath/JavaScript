let allGood = true

let fetchSomeData = new Promise((res,err) => {
    if(!allGood){
        err("error fetching data!");
    }
    else {
        res({
            id : 1,
            message : "nice work...."
        });
    }
})

fetchSomeData.then(respond =>console.log("then : "+respond.id+"\n"+respond.message)).catch(reason => console.log(reason))