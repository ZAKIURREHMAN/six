const db = require('./db')
db()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000;
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use('/register',require('./register/register.js'))
app.use('/login',require('./login/Login'))
app.use('/conferm',require("./Confermorder/Confroute"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})