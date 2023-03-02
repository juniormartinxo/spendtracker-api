import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import router from './routes'
import expenses from './routes/expenses'

export class App {
  public express: express.Application

  constructor() {
    this.express = express()
    this.middleware()
  }

  private middleware(): void {
    this.express.use(cors())
    this.express.use(logger('dev'))
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use('/', router)
    this.express.use('/expenses/', expenses)
  }
}
