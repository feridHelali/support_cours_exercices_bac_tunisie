import { Router } from 'express'
import db from '../db.js'

const router = Router()

router.get('/', (_req, res) => {
  const bacs = db.prepare(
    `SELECT id, title, slug, year, session, level FROM bacs ORDER BY session, level, year DESC`
  ).all()
  res.json(bacs)
})

router.get('/:slug', (req, res) => {
  const bac = db.prepare(`SELECT * FROM bacs WHERE slug = ?`).get(req.params.slug)
  if (!bac) return res.status(404).json({ error: 'Not found' })
  res.json(bac)
})

export default router
