function get(){
    setTimeout(()=> console.log('get called'),5000)
    // console.log('get called');
}
let arr = function now(ele,callback){
    setTimeout(()=>{
        console.log("now function called...");
        console.log(ele);
        if(typeof callback == 'function') {
            console.log('calling argument function...')
            callback(ele,get)
        }
    },5000);
}

function secondCall(i,callback){
    setTimeout(()=>{
        console.log(i-3)
        if(typeof callback == 'function'){
            console.log('calling next argument function')
            callback()
        }    
    },5000)
    
    
}
arr(5,secondCall)