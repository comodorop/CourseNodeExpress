require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const users = require('./app/V1/routes/users')
const clients = require('./app/V1/routes/clients')
 
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//BUENAS PRACTICAS DE LAS RUTAS ES PONER SIEMPRE VERSION
app.use('/V1/users', users)
app.use('/V1/clients', clients)


app.listen(process.env.PORT, ()=>{
  console.log(`Server start in port ${process.env.PORT}`)
})
