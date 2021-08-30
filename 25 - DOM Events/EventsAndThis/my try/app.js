const buttons = document.querySelectorAll('button');

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

for(let button of buttons){
    button.addEventListener('click',colorize)
}
// loop on acutal data on array html format.
function colorize(){
    this.style.backgroundColor = makeRandColor() ;
    this.style.color = makeRandColor() ;
}
//use of this keyword here


// for(let i in buttons){
//     console.log(i);
// }
// for..in goes through the properties..