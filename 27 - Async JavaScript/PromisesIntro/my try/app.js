const fakerequest  = (url) => {
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random()*4500) + 500;
        setTimeout(()=>{
            if(delay > 4000){
                reject('connection TimeOut :')
            }else {
                resolve(`${url}`)
            }
        },delay)
    })
}


fakerequest('ax/csc/cssssf')
    .then(()=>{
        console.log("worked")
            .then(()=>{
                console.log("Yehh");
            })
            .catch(()=>{
                console.log("Oh NO");
            })
    })
    .catch(()=>{
        console.log("Did't worked");
    })