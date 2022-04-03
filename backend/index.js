const express = require('express')
const cors = require('cors')
const app = express()

const users = [
  {
    id: 1,
    username: "user1",
    email: "email@email.com",
    profilepic: "./images/cat1.jpg",
  },
  {
    id: 2,
    username: "user2",
    email: "email@email.com",
    profilepic: "./images/cat2.jpg",
  }
]

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(cors())

app.use(express.json())

app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

const generateId = () => {
  const maxId = users.length > 0
    ? Math.max(...users.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/users', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const user = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  users = users.concat(user)

  response.json(user)
})

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.delete('/api/users/:id', (request, response) => {
  const id = Number(request.params.id)
  users = users.filter(user => user.id !== id)

  response.status(204).end()
})

app.get('/api/users/:id', (request, response) => {
  const id = Number(request.params.id)
  const user = users.find(user => user.id === id)

  if (user) {
    response.json(user)
  } else {
    response.status(404).end()
  }
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})