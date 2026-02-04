import express from 'express'

const app = express()
const port = 3333

app.use(express.json())

app.get('/', (request, response) => {
  response.json({
    message: 'Lana Del Rey é a melhor cantora do mundo'
  })
})

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})