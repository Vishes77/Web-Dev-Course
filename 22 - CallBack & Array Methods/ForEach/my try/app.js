const numbers = [1,2,3,4,5,6,7,8,9];

// function print(print){
//     console.log(print);
// }

// numbers.forEach(print);

// numbers.forEach(function(number){
//     if(el % 2 == 0 ){
//         console.log(el);
//     }
// })

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

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`);
})