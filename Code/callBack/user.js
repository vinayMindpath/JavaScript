function login(email,pass,callback){
    setTimeout(() => {
        return callback({userEmail : email});
    }, 3000);
}

function getvideos(email,callback){
    setTimeout(() => {
        return callback(["video1","video2","video3"]);
    }, 2000);
}

function videoDetials(video,callback){
    setTimeout(() => {
        return callback("this is title of the "+video);
    }, 2000);
}
console.log('start');

const email = login("vinay@mindpathtech.com", 2323,user=>{
    console.log(user);
    getvideos(user.userEmail,videos=>{
        console.log(videos);
        videos.forEach(element => {
            videoDetials(element,title=>{
                console.log(title);
            });
        });
    });
    return user; 
});
// const videos = getvideos(email);

// console.log(videos);