import { Router } from 'express'
import db from '../db.js'

const router = Router()

router.get('/', (_req, res) => {
  const sheets = db.prepare(
    `SELECT id, title, slug, category FROM cheat_sheets ORDER BY category, title`
  ).all()
  res.json(sheets)
})

router.get('/:slug', (req, res) => {
  const sheet = db.prepare(`SELECT * FROM cheat_sheets WHERE slug = ?`).get(req.params.slug)
  if (!sheet) return res.status(404).json({ error: 'Not found' })
  res.json(sheet)
})

export default router
