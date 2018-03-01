// require all our dependencies
const express = require('express')
const hbs = require('hbs')
const Joke = require('./models/Joke')
const jokesController = require('./controllers/joke')
const bodyParser = require('body-parser')

// create and set up our express app
const app = express()

// configure express to use hbs
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))

// define route
// This is to see/check if it's connected to server well
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// Define our rount, render main page
//localhost:3000
app.get('/', (req, res) => {
    Joke.find({}).then(jokes => {
        res.render('index', {jokes})
    })
})


// '/jokes'를 붙여서 controllers 파일 안에 '/jokes'를 매번 쓰지 않아도됨!
app.use('/jokes', jokesController)

// start our server
app.listen(3000, () => {
    console.log('Running on 3000!')
})
