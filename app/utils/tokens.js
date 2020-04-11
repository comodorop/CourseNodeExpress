const jwt = require('jsonwebtoken')
const keySecret = '123456'

function generateToken(info){
  let token = jwt.sign({
    exp: Math.floor((Date.now()/1000) + 60),
    data: info
  }, keySecret)
  return token
}

function decodeToken(token){
  let data = null
  jwt.verify(token, keySecret, (err, info)=>{
    if(err){
    }else{
      data = info
    }
  })
  return  data
}

module.exports = {
  generateToken,
  decodeToken
}