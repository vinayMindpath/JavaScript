const calculateCube = (number,callback) => {
    setTimeout(()=>{
        if (typeof number !== "number"){
            callback(new TypeError("Numeric argument is expected"));
            return 
        }
        const cube = number*number*number;
        callback(null,cube);
    },2000)
};

const callback = (error, result) =>{
    if (error !== null){
        console.log(error);
        return
    }
    console.log(result);
}

try{
    calculateCube(12,callback);
} catch(e) {
    console.log(e)
}