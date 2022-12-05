import { config } from 'dotenv'
config()

import express from "express"
import { commerce } from '../app.js';
import { ensureUserIsAdmin } from '../auth/ensure-auth-state.js';

const productsRouter = express.Router()

productsRouter.use(ensureUserIsAdmin);

productsRouter.get('/', async (req, res) => {
  const products = await commerce.products.list()

  console.log({ products: products.data })

  res.status(200).send({ products: products.data })
})

productsRouter.post('/new', async (req, res) => {
  console.log('this is the new request', req.url);
})

export default productsRouter