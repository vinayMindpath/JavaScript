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

const userValue = async ()=>{
    let userData = await user("vinay@mindpathtech",21332);
    let userVideo = await videos(userData.userEmail);
    let videotitle =await getTitle(userVideo[1]);
    console.log(videotitle);
}
userValue()