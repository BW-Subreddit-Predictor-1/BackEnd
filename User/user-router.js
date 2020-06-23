const express = require('express')

const Users = require('./user-models.js')

const router =  express.Router()


router.get('/', ( req, res ) => {
    Users.find()
      .then( info => {
          res.status(200).json(info)
      })
      .catch( err => {
          res.status(500).json({ Erro:' err retrieving info '})
      })
})


module.exports = router