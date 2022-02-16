// // REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
// const franc = require("franc");
// const langs = require("langs");
// const colors = require("colors")

// const input = process.argv[2];
// const langCode = franc(input);
// if (langCode === 'und') {
//     console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red)
// } else {
//     const language = langs.where("3", langCode);
//     console.log(`Our best guess is: ${language.name}`.green)
// }

// import {franc, francAll} from 'franc'


const franc = require("franc");
const langs = require('Langs');


const input = process.argv[2];
const langCode = franc(input);

if(langCode === 'und'){
    console.log("Soory Not Found try Again.");
}else{
    const language = langs.where("3",langCode);
    console.log("Language is : " + language.name)
}
// const data = franc('Alle menslike wesens word vry') // => 'afr'
// franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট') // => 'ben'
// franc('Alle menneske er fødde til fridom') // => 'nno'

// console.log(langCode);