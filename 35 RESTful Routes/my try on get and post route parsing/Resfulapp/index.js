const express = require('express');//attached express
const {v4: uuid} = require('uuid');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.set('view engine','ejs');//attached embeded javascript + html .
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}));//for parsing post request middleware
app.use(express.json());//for json data parsing as middleware
app.use(methodOverride('_method'))



let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]


app.get('/comments',(req,res)=>{
    res.render('comments/index', { comments });
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})

app.post('/comments',(req,res)=>{
    const {username , comment } = req.body;
    comments.push({username,comment,id : uuid()});
    // res.render("comments/index", { comments });
    res.redirect('/comments');
})

app.get('/comments/:id',(req,res)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    // console.log(comment)
    res.render('comments/show',{ comment });
})



app.patch('/comments/:id',(req,res)=>{
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.get('/comments/:id/edit',(req,res)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment } )
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})


app.listen(3000,()=>{
    console.log("App Started");
})