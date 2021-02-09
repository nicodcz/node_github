
const express = require('express')
const app = express()
const port = 3000


/**
 * Middlewares
 */
app.use(express.static('public'))
app.use(express.urlencoded())

/**
 * Home routes
 */
app.get('/', (req, res) => res.render('home.ejs'))

/**
 * Todo routes
 */
const todoRoutes = require('./routes/todo')
app.use('/todo', todoRoutes)


/**
 * Start server
 */
app.listen(port, () => {
  console.log(`App démarée à l'adresse : http://localhost:${port}`)
})

