require('dotenv').config()

const express = require('express')
const app = express()

const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

const users = []
const port = process.env.PORT

app.get('/users', (req, res) => {
  res.json({
    count: users.length,
  })
})

io.on('connection', socket => {
  users.push(socket.id)

  console.log('a user connected', socket.id)
  console.log('total users: ', users.length)

  socket.on('disconnect', () => {
    users.splice(users.indexOf(socket.id), 1)

    console.log('user disconnected', socket.id)
    console.log('total users: ', users.length)
  })
})

httpServer.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`)
})
