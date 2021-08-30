const allLinks = document.querySelectorAll('a');
// query selector just give us only the first match.

// document.getElementsByTagName
// document.getElementsByClassName 
// while these two will try to give all the elements that are present in the html document. 

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

//getattribute()
//setattribure('attribute','the value over here');

///style only contain inline style(it is added inline in the main.html file) of an element from main.html files
// not from app.css file. 


//window.computedStyle(h1) gives all the style css applied to it.

//h2.calssList.add('purple') muttile calsses prperties can be added.
//h2.calssList.toggle('purple')-- to consiquently add or remove class purple.


//firstBold.parentElment

//paragraph.children to get all the children of paragraph tag.

// squareimg.previoussiblings gives text
// squareimg.nextsiblings  gives text
 // squareimg.previousElementsiblings gives the element.
 // squareimg.nextElementsiblings  gives the next element.

// TO append something in the html main file.
// let new_Element = Document.createElement('img')

// new_Element.src = "";

// document.body.appendChild(new_Element);


// //to insert in between , front , back on a selected  element
// const h2 = document.createElement('h2')

// h2.append("AANCHGC")

// const h1 = document.querySelector('h1')
// h1.insertAdjacentElement('afterend',h2)