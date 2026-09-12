import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import unitsRouter from './routes/units.js'

const app = express()
const port = process.env.PORT ?? 3001

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api', unitsRouter)

app.listen(port, () => {
  console.log(`trivia anatômica server listening on port ${port}`)
})
