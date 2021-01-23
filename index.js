const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// const db = require('./db')

app.get('/', (request, response) => {
    response.json({ info: `Node.js, Express, and Postgres API ${port}` })
  })

//   app.get('/users', db.getUsers)
// app.get('/users/:id', db.getUserById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)



  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  