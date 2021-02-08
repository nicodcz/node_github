const express = require('express')
const router = express.Router()

let todos = ["Implémenter une todo list", "Acheter du BTC", "Aller chez le coiffeur"]

/**
 * Affichage de la vue todo.
 */
router.get('/', (req, res) => {
    res.render('todo.ejs', {todos:todos})
})

/**
 * Ajout d'une tâche
 */
router.post('/add', (req, res) => {
    todo = req.body.todo
    if (todo) todos.push(todo)
    res.redirect("/todo")
})

/**
 * Suppression d'une tâche
 */
router.post('/delete', (req, res) => {
    let idx = req.body['todo-id']
    if (idx >= 0 && idx < todos.length) {
        todos.splice(idx, 1);
    }
    res.redirect("/todo")
})

module.exports = router