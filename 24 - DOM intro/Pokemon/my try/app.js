const container = document.querySelector('#container');
const BaseURl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for(let i=1;i<=151;i++){
    const div = document.createElement('div');
    div.classList.add('pokemon');
    const span = document.createElement('span');
    const newImg = document.createElement('img');
    newImg.src=`${BaseURl}`+`${i}`+".png";
    span.innerText=`#${i}`;
    div.appendChild(newImg)
    div.appendChild(span)
    container.appendChild(div)

}