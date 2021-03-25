//
const Images = document.getElementsById('img');
const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// const links = document.querySelector('p');
// gives the first occrance of p only.

const links = document.querySelectorAll('p a'); // achor tag inside paragraph

for (let link of links) {
    console.log(link.href)
}