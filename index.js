
const express = require('express')
const app = express()
const port = 3000

let todos = ["Implémenter une todo list", "Acheter du BTC", "Aller chez le coiffeur"]

app.use(express.static('public'))

/**
 * Affichage de la vue todo
 */
app.get('/', (req, res) => {
  res.render('todo.ejs', {todos:todos})
})

/**
 * Ajout d'une tâche
 */
app.get('/add', (req, res) => {
  todo = req.query.todo
  if (todo) todos.push(todo)
  res.redirect("/")
})

/**
 * Suppression d'une tâche
 */
app.get('/delete', (req, res) => {
  let idx = req.query['todo-id']
  if (idx >= 0 && idx < todos.length) {
    todos.splice(idx, 1);
  }
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`App démarée à l'adresse : http://localhost:${port}`)
})

