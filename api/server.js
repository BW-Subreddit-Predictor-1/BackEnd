const express = require('express')
const PostRouter = require('../router/PostRouter')
const server = express()

server.use(express.json())
server.use('/api/posts',PostRouter)

server.get('/', (req, res) => {
	res.send(`
      <h2> This is Build Week </h>
    `)
})

module.exports = server