require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()


// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    // res.send('Hello REST')
    res.json('Hello REST')
})


// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function(req, res) {
    if (!req.body) return res.sendStatus(400)
        // create user in req.body
})


app.listen(process.env.PORT, () => console.log(`Server running on port ${ process.env.PORT }`))