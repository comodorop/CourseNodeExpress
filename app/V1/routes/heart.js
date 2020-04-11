
const express = require('express')
const routes =express.Router()


routes.get('/', async (req, resp)=>{
  resp.status(200).send({msg: "pong"})
})

module.exports = routes