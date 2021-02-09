
const express = require('express')
const app = express()
const port = 3000



app.use(express.static('public'))
app.use(express.urlencoded())

app.get('/', (req, res) => res.render('home.ejs'))

const todoRoutes = require('./routes/todo')
app.use('/todo', todoRoutes)




app.listen(port, () => {
  console.log(`App démarée à l'adresse : http://localhost:${port}`)
})

