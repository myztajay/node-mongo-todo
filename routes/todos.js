const express = require('express');
const router = express.Router();
const db = require ('../todos_api/models');
const helpers = require('../todos_api/helpers/todos');

router.route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo);

router.route('/:todoId')
  .get(helpers.showTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)

module.exports = router;