// require all our dependencies
const express = require('express')


// create and set up our express app
const app = express()





// define route
// This is to see/check if it's connected to server well
app.get('/', (req, res) => {
    res.send('Hello World!')
})


// start our server
app.listen(3000, () => {
    console.log('Running on 3000!')
})
