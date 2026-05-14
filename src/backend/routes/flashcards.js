import { Router } from 'express'
import db from '../db.js'

const router = Router()

router.get('/', (req, res) => {
  const { category, difficulty } = req.query
  let sql = `SELECT * FROM flash_cards`
  const params = []
  const conditions = []

  if (category) { conditions.push(`category = ?`); params.push(category) }
  if (difficulty) { conditions.push(`difficulty = ?`); params.push(difficulty) }
  if (conditions.length) sql += ` WHERE ${conditions.join(' AND ')}`
  sql += ` ORDER BY category, topic`

  res.json(db.prepare(sql).all(...params))
})

router.get('/categories', (_req, res) => {
  const cats = db.prepare(
    `SELECT DISTINCT category FROM flash_cards ORDER BY category`
  ).all().map(r => r.category)
  res.json(cats)
})

export default router
