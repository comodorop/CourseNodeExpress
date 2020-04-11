require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const users = require('./app/V1/routes/users')
const clients = require('./app/V1/routes/clients')
const auth = require('./app/V1/routes/auth')
const utils = require('./app/utils/tokens')
const heart = require('./app/V1/routes/heart')
 
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use((req, resp, next)=>{
  if(req.url === '/V1/auth/' || req.url === '/V1/ping/') {
    next()
  }else {
    if (req.headers.hasOwnProperty("authorization")=== false){
      resp.status(401).send({msg: "Its require a token"})
    }
    if(req.headers.authorization === ''){
        resp.status(401).send({msg: "Token its empty"})
    }else {
      let data = utils.decodeToken(req.headers.authorization)
      if(data !== null){
        console.log(data)
        next()
      } else {
        resp.status(401).send({msg: "Token its invalid"})
      }
    }
  }
})

function middleware(req, resp, next){
  if (req.headers.hasOwnProperty("sandbox")=== false){
    resp.status(401).send({msg: "Its require a key in sandbox"})
  }
  if(req.headers.sandbox === ''){
    resp.status(401).send({msg: "Sanbox its empty"})
  }else{
    next()
  }
}



//BUENAS PRACTICAS DE LAS RUTAS ES PONER SIEMPRE VERSION
app.use('/V1/users', users)
app.use('/V1/auth', auth)
app.use('/V1/ping', heart)
app.use('/V1/clients', middleware, clients)


app.listen(process.env.PORT, ()=>{
  console.log(`Server start in port ${process.env.PORT}`)
})
