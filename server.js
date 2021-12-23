const express = require('express')
const app = express();
const port = 8080;
const cors = require('cors')()
const bp = require('body-parser')
const fetch = require('cross-fetch')

const pets = require('./data/pets.json')



app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
    //public folder
app.use(express.static('public')) //images,css,custom js

app.get('/', (req, res) => {
    res.status(200);
    res.render('home', { data: pets });
})

app.get('/about', (req, res) => {
    res.status(200);
    res.render('about');
})


app.get('/hello/:name/:lastname', (req, res) => {

    res.status(200);
    res.send(`Welcome ${req.params.name} ${req.params.lastname}`);
})

app.get('/hello', (req, res) => {
    //http://localhost:3000/hello?fn=Carl&ls=Verrier
    res.status(200);
    res.send(`Welcome ${req.query.fn} ${req.query.ls}`);
})



// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
})


// POST method route
app.get('/data', (req, res) => {
    //res.json({ name: 'POST request to the homepage' })
    res.json(pets)
})




app.get('/pets', (req, res) => {
    //res.json({ name: 'POST request to the homepage' })
    // res.json(pets)
})

app.get('/addcat', (req, res) => {
    res.render('addcat');
})

app.get('/addbreed', (req, res) => {
    res.render('addbreed');
})

async function loadPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

app.get('/posts', async (req, res) => {
    const posts = await loadPosts();
    res.render('posts', { data: posts });
})

app.listen(port, () => console.log(`Express running on port: ${port}...`));