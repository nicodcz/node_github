const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.get('/', todoController.todoList);
router.post('/add', todoController.todoAdd);
router.post('/delete', todoController.todoDelete);

module.exports = router