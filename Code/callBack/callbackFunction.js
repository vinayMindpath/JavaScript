function processThis(mes,cb){
    console.log("Running function first with message : "+mes);
    if (typeof cb =='function'){
        console.log('calling callback function ')
        cb(2,3);
    }
}
processThis("Hello world",(a,b) =>{
    console.log("this is a callback Function.");
    console.log(a+"\n"+b)
});


// setTimeout(function() { console.log("learn with me");},5000)

// we have a product list 
var product = ['Laptop','Monitor','accessories']

function add(item ,callback){
    setTimeout(()=>{
        product.push(item);
        callback()
    },2000)
}

function getItems(){
    setTimeout(()=>console.log("products lists : "+product),1000);
}

add("Camera",getItems)

