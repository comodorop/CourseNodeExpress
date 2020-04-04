const pool = require('../repository/connection')
const {Clients} =  require('../../models')
// PRINCIPIOS SOLID

async function getClients(){
  let cn = await pool.connection()
  let sql = `SELECT * FROM clients`
  try {
    const [rows,  fields] = await cn.query(sql)
    return rows
  } catch (error) {
    throw error
  } finally {
    cn.end()
  }
}

async function post(body){
  try {
    let data = await Clients.create(body)
    return data
  } catch (error) {
    throw error
  }
}

async function get(){
  try {
    let data = await Clients.findAll()
    return data
  } catch (error) {
    throw error
  }
}


async function getById(id){
  try {
    let data = await Clients.findAll({
      where: {
        id: id
      }
    })
    return data
  } catch (error) {
    throw error
  }
}

async function put(obj){
  try {
    let data = await Clients.update(obj, {
      where:{
        id: obj.id
      }
    })
    return data
  } catch (error) {
    throw error
  }

}


module.exports = {
  getClients, 
  post,
  get,
  getById,
  put
}