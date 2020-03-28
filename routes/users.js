const express = require('express')
const routes =express.Router()
let lstUsers = []


//ENDPOINT 
// RULES
// No usar verbos
// Usar sustantivos
// Tiene que ser en plural
// Utilizar el protocolo http correspondiente a tu accion
// Regresar el status correspondiente

// == Hace un parseo a cadena y convierte
// === Verifica el tipo de dato y valor para comparar

routes.get('/', (req, resp)=>{
  let {asc, limit} = req.query
  console.log(limit)
  if(parseInt(asc) === 1) {
    lstUsers.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
  } else {
    lstUsers.sort(function (a, b) {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  }
  let newLstUsers = lstUsers.slice(0, limit);
  resp.status(200).send({status: 200, data: newLstUsers, rows: newLstUsers.length})
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