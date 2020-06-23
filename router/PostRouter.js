const express = require('express')

const Post = require('./PostRouter-mode.js')

const router =  express.Router()


router.get('/', ( req, res ) => {
    Post.find()
      .then( info => {
          res.status(200).json(info)
      })
      .catch( err => {
          res.status(500).json({ Erro:' err retrieving info '})
      })
})

router.get('/:id',( req, res ) => {
    const { id } = req.params
    Post.findById(id)
      .then(info => {
          res.status(200).json(info)
      })
      .catch( err => {
        res.status(500).json({ Erro:' err retrieving info '})
    })
})

router.post('/',(req, res) => {
    const { title , contents } = req.body
      !title || !contents?
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." }):
          Post.insert(req.body)
            .then( post => {
                res.status(201).json(req.body)
            })
            .catch( err => {
                res.status(500).json({ error: "There was an error while saving the post to the database" })
            })

})


router.put('/:id',(req, res) => {})

router.delete('/:id',(req, res) => {})

module.exports = router