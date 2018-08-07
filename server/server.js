require('./config/config')

const mongoose = require('mongoose');

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.use(require('./controllers/site'))
app.use(require('./controllers/api/user'))


mongoose.connect(
    'mongodb://localhost:27017/cafe', { useNewUrlParser: true },
    (err) => {
        if (err) throw new Error('Error connecting to mongodb');
    },
);


app.listen(process.env.PORT, () => console.log(`Server running on port ${ process.env.PORT }`))