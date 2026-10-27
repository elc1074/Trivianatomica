import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import unitsRouter from './routes/units.js'
import authRouter from './routes/auth.js'

const app = express()
const port = process.env.PORT ?? 3001

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/auth', authRouter)
app.use('/api', unitsRouter)

app.listen(port, () => {
  console.log(`trivia anatômica server listening on port ${port}`)
})
