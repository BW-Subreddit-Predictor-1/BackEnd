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


router.put('/:id',(req, res) => {
    const { title, contents } = req.body
	const id = req.params.id
        
    !title || !contents
    ? res.status(400).json({ errorMessage: 'No Title and No Contents for this Post' })
	    : Post.update(id, req.body)
				.then(post => {
                    post ? res.status(200).json(req.body) 
                        :res.status(404).json({ message: 'The post with the specified ID does not exist.' })
				})
				.catch(err => {
					res.status(500).json({
						message: 'The post information could not be modified.',
					})
				})
})

router.delete('/:id',(req, res) => {
    const id = req.params.id
    
	Post.findById(id)
		.then(post => {
			post
                ? Post.remove(id)
                      .then(post => {
							res.status(200).json({ message: 'Post was deleted'}) 
				  })
				: res.status(404).json({ message: `The Post with specified ${id} Does NOT Exist` })
		})
		.catch(err => {
			res.status(500).json({ message: 'The Post Could Not Be Removed' })
		})
})

module.exports = router