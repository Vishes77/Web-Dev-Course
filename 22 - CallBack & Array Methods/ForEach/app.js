const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// forEach accepts a callback function. calls the function once per e;ement in the array.
numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})
//it this it not only calling the function but also calling the function each & every time.


// for (let el of numbers) {
//     console.log(el);
// }

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

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

