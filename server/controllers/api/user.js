const express = require('express')
const app = express()


// GET /api/user 
app.get('/api/user', function(req, res) {
    res.json('get user');
})


// POST /api/user
app.post('/api/user', function(req, res) {
    if (!req.body) return res.sendStatus(400)
    res.json('create user');
})


// PUT /api/user
app.put('/api/user/:id', function(req, res) {
    if (!req.body) return res.sendStatus(400)
    res.json(`update user with ID ${ req.params.id }`)
})


// DELETE /api/user
app.delete('/api/user/:id', function(req, res) {
    if (!req.body) return res.sendStatus(400)
    res.json(`remove user with ID ${req.params.id}`)
})




module.exports = app