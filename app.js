const express = require('express')
const app = express()
const port = 3000
const index = require('./index')
const users = require('./users')
const students = require('./students')

const db = require('./mongomodule')
db.connectToServer("lab03", function(err) {
  console.log(err)
})

app.use('/index', index)
app.use('/users', users)
app.use('/students', students)

app.get('/', index)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = { app };