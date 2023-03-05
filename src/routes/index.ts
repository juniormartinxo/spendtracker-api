import { Router } from 'express'

export const router = Router()

router.get('/', (req, res) => {
  res.json({
    message: 'API Spendtracker',
  })
})

router.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
  })
})
