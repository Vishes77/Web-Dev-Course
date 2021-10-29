const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));// help to parse post request data genrally it give a undefined Value.
app.use(express.json())//parese middleware as json also.

app.get('/',(req,res)=>{
    res.send("This is the Home Page.");
});



app.get('/tacos',(req,res)=>{
    res.send("This is the Respond");
})

app.post('/tacos',(req,res)=>{
    const {meat,qty} = req.body;
    res.send(`your have requested ${qty} number of ${meat}`);
})


app.listen(3000,()=>{
    console.log("App Starterd");
})