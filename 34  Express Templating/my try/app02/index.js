const express = require('express');
const app = express();

const path = require('path');

app.set('view engine', 'ejs'); // this code requires the ejs by the compailer in the backend.
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res) => {
    res.render('home.ejs');
})

app.listen(3000,()=>{
    console.log("App Started");
})