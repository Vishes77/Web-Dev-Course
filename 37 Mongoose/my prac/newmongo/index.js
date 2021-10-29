const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movie')
    .then(()=>{
        console.log("Connection Open");
    })
    .catch(err =>{
        console.log("Error Occured");
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title : String,
    year : Number,
});

const Movie = mongoose.model('Movie',movieSchema);

// const blah =  new Movie();
// blah.save();     one way to save the data.

Movie.insertMany([
    {title:'Amelie',year:2001,},
    {title: 'B',year:999}
    ])
    .then((data)=>{
        console.log();
    })

 console.log(Movie.find({yaer :{$gte : 1000}}));