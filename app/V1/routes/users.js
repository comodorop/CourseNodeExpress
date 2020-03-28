const express = require('express')
const routes =express.Router()
let lstUsers = []
const services = require('../../services/clients')


//ENDPOINT 
// RULES
// No usar verbos
// Usar sustantivos
// Tiene que ser en plural
// Utilizar el protocolo http correspondiente a tu accion
// Regresar el status correspondiente

// == Hace un parseo a cadena y convierte
// === Verifica el tipo de dato y valor para comparar

routes.get('/', async (req, resp)=>{
  try {
    let lstUsers = await services.getClients()
    resp.status(200).send({status: 200, data: lstUsers})
  } catch (error) {
    console.log(error)
    resp.status(500).send({status: 500, msg: "Ocurrio un error"})
  }
})

routes.get('/:id', (req, resp)=>{
  let {id} = req.params
  let user = lstUsers.filter(obj=>{
    if(obj.id == id){
      return obj
    }
  })
  resp.status(200).send({status: 200, data: user})
})

routes.post('/', (req, resp)=>{
  let {body} = req
  lstUsers.push(body)
  resp.status(201).send({status: 201, data: "New record avaliabled"})
})

//http GET, POST, PUT, DELETE
//CRUD: CREATE, READ, UPDATE, DELETE





module.exports = routes