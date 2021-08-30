const add = function( a , b ){
    return a + b ;
} 

// console.log(`${add(5,6)}`);

function callTwice(func){
    func();
    func();
}

function rolldice(){
    const roll  = Math.floor(Math.random() * 6) + 1 ; 
    console.log(roll);
}

function TenTimes(func) {
    for(let i=0 ; i < 10 ;i++ ){
        func();
    }
}