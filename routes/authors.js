const { Router } = require('express')

const router = Router()

// All authors routers
router.get('/', (req, res) => {
  res.render('authors/index')
})

// New Athours Routes
router.get('/new', (req, res) => {
  res.render('authors/new')
})

// Create Author Route
router.post('/', (req, res) => {
  res.send('Create')
})

module.exports = router