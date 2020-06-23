const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secret.js')

module.exports = (req, res, next) => {
  // const token = req.headers.authorization
  const token = req.headers.authorization.split(' ')[1];
  if (token) {
    console.log(token)
    console.log(req.headers)
    jwt.verify(token, jwtSecret,(error, decodedToken) =>{
      if (error){
        console.log(error)
        res.status(401).json({ you: 'shall not pass!' })
      } else {
        req.decodedToken = decodedToken
        next()
      }
    })
  } else {
    res.status(500).json({message: 'You are not logged in, please try logging in'})
  }
};
