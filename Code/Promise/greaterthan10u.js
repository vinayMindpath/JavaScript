let check = (a) =>{
    return new Promise((res,err)=>{
        if(a>10){
            res('Promise resolved');
        }
        else {
            err("Promise Not resolved");
        }
    }).then(message => console.log(message)).catch(err => console.log(err));
};
check(10)