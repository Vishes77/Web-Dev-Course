const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


// innertext-- gives all the text only. 
//and textContent() give the way it written with the pragraph change and spaces
//innerHtml -- text + tags aslo given.

///style only contain inline style of an element.


//window.computedStyle(h1) gives all the style css applied to it.

//h2.calssList.add('purple') muttile calsses prperties can be added.

//firstBold.parentElment

//paragraph.children to get all the children of paragraph tag.

// squareimg.previoussiblings gives text
// squareimg.nextsiblings  gives text
 // squareimg.previousElementsiblings gives the element.
 // squareimg.nextElementsiblings  gives the next element.