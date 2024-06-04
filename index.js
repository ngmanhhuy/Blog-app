import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

let posts = [];

app.get('/', function(req, res){
    res.render('index.ejs', {posts: posts});
});

app.post('/create', function(req, res){
    let post = {
        id: posts.length,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(post);
    res.redirect('/');
});

app.post('/delete', function(req, res){
    const postId = Number(req.body['postId']); // Convert postId to a number
    posts = posts.filter(post => post.id !== postId);
    res.redirect('/');
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});
