const express = require('express');
const cors = require('cors');
const helmet = require('helmet')

const authentication = require('../auth/authenticate-middleware.js')
const PostRouter = require('../router/PostRouter')
const authRouter = require('../auth/auth-router.js')
const userRouter = require('../User/user-router.js')

const server = express()

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/posts',PostRouter)
server.use('/api/auth',authRouter)
server.use('/api/user', authentication,userRouter)

server.get('/', (req, res) => {
	res.send(`
      <h2> This is Build Week </h>
    `)
})

module.exports = server