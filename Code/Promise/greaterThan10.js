let val = 9
let promise  = new Promise((res, rej)=> {
	if(val > 10){
				res("good choice.");
	}
	else{
			rej("greater value required");
	}
});

promise.then(mes => console.log(mes)).catch(err=> console.log(err));