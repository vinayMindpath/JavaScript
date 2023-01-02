function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        // resolve('resolved');
        resolve("answered");
      }, 2000);
    }).then(mes => {
    if(mes){
            // console.log(mes);
            return mes;
        }
    });
}
  
async function asyncCall() {
   console.log('calling');
   const result = await resolveAfter2Seconds();
   console.log(result);
   setTimeout(()=>console.log("Hello"),2000)
    
    // expected output: "resolved"
}
  
asyncCall();