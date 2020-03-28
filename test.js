const pool = require('./app/repository/connection')

async function getClients(){
  let cn = await pool.connection()
  let sql = `SELECT * FROM clients`
  try {
    const [rows,  fields] = await cn.query(sql)
    console.log(rows)
  } catch (error) {
    console.log(error)
  } finally {
    cn.end()
  }
}

getClients()
