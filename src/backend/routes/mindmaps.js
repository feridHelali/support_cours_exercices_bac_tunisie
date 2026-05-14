import { Router } from 'express'
import db from '../db.js'

const router = Router()

router.get('/', (req, res) => {
  const { category } = req.query
  let sql = `SELECT id, title, slug, category FROM mind_maps`
  const params = []
  if (category) { sql += ` WHERE category = ?`; params.push(category) }
  sql += ` ORDER BY category, title`
  res.json(db.prepare(sql).all(...params))
})

router.get('/:slug', (req, res) => {
  const map = db.prepare(`SELECT * FROM mind_maps WHERE slug = ?`).get(req.params.slug)
  if (!map) return res.status(404).json({ error: 'Not found' })
  res.json(map)
})

export default router
