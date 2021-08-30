const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles = numbers.map(function (num) {
    return num * 2;
})

// Basically map is same like forEach but here 
// result is stored in a new array. and each element are inserted into it in each call.


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

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})
// here all tittles are stored in an array. called tittles array.

// map ka kaam ye hai ki jo v function call se value return hota hai
// usko pirr ek array mai store karte jate hai sequentally.

// let doubles = numbers.map(function(number){
//     return number*2;
// })

// let tittle = movies.map(function(movie){
//     return movie.title.toUpperCase();
// })

// tittle.forEach(function(number){
//     console.log(number);
// });