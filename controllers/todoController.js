const Todo = require('../models/Todo')

let todos = [new Todo("Implémenter une todo list"), new Todo("Acheter du BTC"), new Todo("Aller chez le coiffeur")]


/**
 * Affichage de la vue todo.
 */
exports.todoList = (req, res) => {
    res.render('todo.ejs', {todos:todos})
}

/**
 * Ajout d'une tâche
 */
exports.todoAdd = (req, res) => {
    todo = req.body.todo
    if (todo) todos.push(new Todo(todo))
    res.redirect("/todo")
}

/**
 * Suppression d'une tâche
 */
exports.todoDelete = (req, res) => {
    let idx = req.body['todo-id']
    if (idx >= 0 && idx < todos.length) {
        todos.splice(idx, 1);
    }
    res.redirect("/todo")
}