// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// whereas
// for..of loop is not for object literals it is for iterating over iterable objects, including: built-in String, Array,
// array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set,



const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================
// for..of loop is not for object literals.

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

let total = 0;
let scores = Object.values(testScores);
// above lines return a array of scores.
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)

