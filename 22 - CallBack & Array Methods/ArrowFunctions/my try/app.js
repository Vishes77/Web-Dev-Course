// const add = function(x,y) {
//     return x + y;
// }


// const add = (x,y) => {
//     console.log(x+y);
// }


// const square = (x) => {
//     console.log(x**2);
// }

// in above if we have only one value to pass in function then we can discard
// the bracket as example.
// const square = x =>{
//     console.log(x**2);
// }

// const rolldie = () =>{
//     console.log(Math.floor(Math.random()* 6 ) + 1);
// }



//Implicit Return  && and work only for single line return.
// const rollDie = () => (
//     console.log(Math.floor(Math.random()*6) + 1)
// )

let val = 5;
const rollDie = () =>(
    //  val = 4 more the one line don't work in implicit return.
    Math.floor(Math.random() * 6) + 1
)



const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const movieinfo = movies.map((movie) => (`${movie.title} - ${(movie.score)/10}`))

console.log(movieinfo.forEach())