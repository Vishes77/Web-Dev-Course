const express = require('express');
const app = express();

// app.use((req,res)=>{
//     console.log("We Got a New Request");
//     res.send('<h1>YALOOOO</h1>');
// })

app.get('/',(req,res) => {
    res.send('Initial Page is established.');
})

app.get('/r/:value',(req,res) => {
    console.log(req.params);
    const va = req.params.value;
    res.send(`${va} page is called.`);
})


app.get('/dogs',(req,res) => {
    res.send('DOgs Page is established.');
})

app.get('/search',(req,res) => {
    const  { q }  = req.query;
    if(!q){
        res.send("Nothing is Searched")
    }
    res.send(`Searched Value ${q}`);
    // console.log(`Query Value is ${q}`);
    // res.send('DOgs Page is established.');
})



app.get('*',(req,res)=>{
    res.send('Page For Unnecessary Request.');
})



app.listen(8080, ()=>{
    console.log('App Started');
})