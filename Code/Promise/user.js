const user = (email,pass)=>{
    return new Promise((res,err)=>{
        setTimeout(() => {
            res({userEmail : email});
        }, 3000);
    })
};

const videos = (email) =>{
    return new Promise((res)=>{
        setTimeout(() => { 
            res(["video1","video2","video3"])
        }, 2000);
    })
}

const getTitle = (video) =>{
    return new Promise(res =>{
        setTimeout(() => {
            res(`This is the title of ${video}`);
        }, 2000);
    })
}
user("vaina","apsdsd")
.then(user =>videos(user.userEmail))
.then(res =>{
    res.forEach(element => {
       getTitle(element).then(res => console.log(res))
    });
})
