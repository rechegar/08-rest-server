const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })



app.get('/', (req, res) => {
    // res.send('Hello REST')
    res.json('Hello REST')
})


// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('Welcome, ' + req.body.username)
})




module.exports = app