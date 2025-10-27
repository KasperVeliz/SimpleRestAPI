const bodyParser = require('body-parser')
const db = require('./queries')
var express = require('express')
var cors = require('cors')

var app = express()
const port = 3000

app.use(cors())

app.use((req, res, next) => {
    const error = new Error('Something went wrong')
    next(error)
})

app.use((err, req, res, next) => {
    console.error('Error: ', err.message)
    res.status(500).send('Internal Server Error')
})
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, ()=> {
    console.log(`App running on port ${port}.`)
})
