const express = require('express')
const bodyParser = require('body-parser')
const users = require('./routes/users')
 
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//BUENAS PRACTICAS DE LAS RUTAS ES PONER SIEMPRE VERSION
app.use('/V1/users', users)



app.listen(3001, ()=>{
  console.log("Server start in port 3001")
})
