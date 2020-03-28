//IMPORTAMOS LA LIBRERIA MYSQL2/PROMISE YA QUE LA MYSQL2 NO SOPORTA ASYNC Y AWAIT YA QUE ESTA UN 
//POCO ANTIGUA
const mysql = require('mysql2/promise');

async function connection(){
  let pool = null
  //CREAMOS UN POOL YA QUE EL VA SER EL ENCARGADO DE GESTIONAR TODAS LA CONECCIONES QUE SE REQUIERAN
 if(process.env.ENV=== 'development'){
   console.log("Es desarrollo")
   pool = mysql.createPool({
      host:  process.env.HOST_DEV,
      password:  process.env.PASSWORD_DEV,
      user:  process.env.USER_DEV,
      database:  process.env.DATABASE_DEV,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  } if(process.env.ENV=== 'production'){
   pool = mysql.createPool({
    host:  process.env.HOST,
    password:  process.env.PASSWORD,
    user:  process.env.USER_PROD,
    database:  process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
 }
  return pool
}

module.exports ={
  connection
}