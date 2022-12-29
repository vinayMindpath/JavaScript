let fetchData = function() {
    return new Promise((res, err) => {
        setTimeout(() => {
            console.log("fetching data complete")
            res({ id: 12, message: "nice work...." });
        }, 2000);
    })
};

let parseData = function(data) {
    return new Promise(res => {
        // a = variable;
        setTimeout(() => {
            let parsedOutput = `parsed the data for id : ${data.id} with message ${data.message}`;
            res({ parsed: parsedOutput });
        }, 2000);
    })
}

let echoData = function(data) {
    return new Promise(() => {
        setTimeout(() => {
            console.log(data.parsed)
        }, 2000);
    })
}

// fetchData().then(data => {
//     parseData(data).then(res => {
//         echoData(res).then();
//     });
// })

// fetchData().then(data).then(echoData(data)).catch(() => {
//     console.log("error encounterred...");
//     // console.log(new Error)
// })

fetchData().then(data =>
    parseData(data)
).then(res => echoData(res)).then()