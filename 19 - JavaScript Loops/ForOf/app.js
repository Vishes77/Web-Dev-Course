const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];
// for of is for array iteration i think.
// iterating over iterable objects, including: built-in String, Array, array-like objects 
// (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables



// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}



// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char)
// } 
//output of above is        h   e   l   l   o   w   o   r   l   d

