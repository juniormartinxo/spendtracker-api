import { Router } from 'express'

const index = Router()

index.get('/', (req, res) => {
  res.json({
    message: 'API Spendtracker',
  })
})

index.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
  })
})

export default index
