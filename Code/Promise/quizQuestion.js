function f1(){
    console.log('f1');
}
function f2(){
    console.log('f2');
}
function f3() {
    console.log('f3');
}


function main(){
    console.log('main');
    setTimeout(f1, 50);
    setTimeout(f3, 30);

    new Promise((res) => res("I got called after f1 and f3")).then(res => console.log(res));
    new Promise((res)=> res("I got after after first promise.")).then(res => console.log(res));

    f2()
}

main()