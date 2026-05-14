import express from 'express'
import cors from 'cors'
import bacsRouter from './routes/bacs.js'
import cheatsheetsRouter from './routes/cheatsheets.js'
import flashcardsRouter from './routes/flashcards.js'
import mindmapsRouter from './routes/mindmaps.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api/bacs', bacsRouter)
app.use('/api/cheatsheets', cheatsheetsRouter)
app.use('/api/flashcards', flashcardsRouter)
app.use('/api/mindmaps', mindmapsRouter)
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => console.log(`🚀 API → http://localhost:${PORT}`))
