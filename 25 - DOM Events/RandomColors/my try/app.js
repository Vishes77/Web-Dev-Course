const button = document.querySelector('button')
const title = document.querySelector('h1')
let random_color;
button.addEventListener('click',function(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const Blue = Math.floor(Math.random()*255);
    random_color = `rgb(${red},${green},${Blue})`;
    title.innerText = random_color;
    document.body.style.backgroundColor = random_color;
}) 
