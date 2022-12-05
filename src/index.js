import { config } from 'dotenv'
config()
import app from './app.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('server is listening on port', PORT)
})