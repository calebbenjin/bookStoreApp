if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')

// Routes
const indexRoutes = require('./routes/index')
const authorsRoutes = require('./routes/authors')

// Setup view engines
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout');
app.use(expressLayouts)
app.use(express.static('public'))

// Setting up database
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// Connect to DB
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))

// Routes
app.use('/', indexRoutes)
app.use('/authors', authorsRoutes)

app.listen(process.env.PORT || 5000)