const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

//used for serving static files that is here css and javascript files.
// it is kind of middleware. excutes for every single request.
app.use(express.static(path.join(__dirname, 'public'))) // path.join reson dicussed in below comments

app.set('view engine', 'ejs'); //to accept ejs  , here we not nned require ejs , in backend express does that allready.
//by default express assumes that all the templetes are avialable in a directory called views.
//----------------------------------------------------------------
//if we execute node index.js from same directory then no issue but we run the same with differenet directory then there will be no issue
// so resolve that we use this below line. to run node index.js anywhere from outside the Templeting_demo Folder .
app.set('views', path.join(__dirname, '/views')) // setting views folder as per above description.

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})