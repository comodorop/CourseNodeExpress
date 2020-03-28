const pool = require('../repository/connection')

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

module.exports = {
  getClients
}