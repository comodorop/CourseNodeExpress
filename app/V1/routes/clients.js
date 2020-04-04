const express = require('express')
const routes =express.Router()
//TDD
const services = require('../../services/clients')

routes.get('/', async (req, resp)=>{
  try {
      let lstClients = await services.get()
      resp.status(200).send({status: 201, data:lstClients })
  } catch (error) {
    console.log(error)
    resp.status(500).send({status: 500, data: "There is an error in the server"})
  }
})

routes.get('/:id', async (req, resp)=>{
  let {id}  = req.params
  try {
    let objClient = await services.getById(id)
    resp.status(200).send({status: 201, data: objClient})
  } catch (error) {
    console.log(error)
    resp.status(500).send({status: 500, data: "There is an error in the server"})
  }
})

routes.post('/', async (req, resp)=>{
  let {body} = req
  try {
    await services.post(body)  
    resp.status(201).send({status: 201, data: "New record avaliabled"})
  } catch (error) {
    console.log(error)
    resp.status(500).send({status: 500, data: "There is an error in the server"})
  }
})

routes.put('/', async (req, resp)=>{
  let {body} = req
  try {
    await services.put(body)  
    resp.status(201).send({status: 201, data: "New record updated"})
  } catch (error) {
    console.log(error)
    resp.status(500).send({status: 500, data: "There is an error in the server"})
  }
})



module.exports = routes