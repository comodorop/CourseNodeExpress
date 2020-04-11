
const utils = require('../../utils/tokens')
const express = require('express')
const routes =express.Router()

routes.post('/', async (req, resp)=>{
  try {
      let {body} = req
      let token =  utils.generateToken(body.sandbox)
      resp.status(200).send({status: 201, data: token})
  } catch (error) {
    console.log(error)
    resp.status(500).send({status: 500, data: "There is an error in the server"})
  }
})

module.exports = routes

//SOLID