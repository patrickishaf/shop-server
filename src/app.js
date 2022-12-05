import { config } from 'dotenv'
config()

import express from "express"
import productsRouter from './products/router.js'
import Commerce from "@chec/commerce.js"
import logger from './logger.js'

const app = express()
app.use(express.json())
app.use(logger);

export const commerce = new Commerce(process.env.API_KEY_TEST, true)

app.get('/', (req, res) => {
  res.status(200).send('welcome to our shop')
})

app.use('/products', productsRouter)

export default app