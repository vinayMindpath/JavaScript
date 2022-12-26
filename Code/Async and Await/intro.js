function waitFor2sec(){
    return new Promise((res)=>{ 
        setTimeout(() => {
            res("This is resolved.");
        }, 2000);
    }).then(res => console.log(res));
}

async function asyncCall(){
    console.log("Calling......");
    const result  = await waitFor2sec();
    setTimeout(() => {
        console.log("result");    
    }, 2000);
    
    console.log('End')
}

asyncCall();