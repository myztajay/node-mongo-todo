const express = require('express');
const router = express.Router();
const db = require ('../todos_api/models')

// INDEX
router.get('/',(req,res)=>{
  db.Todo.find()
  .then((todos)=>{
    res.json(todos)
  })
  .catch(()=>{
    res.send(err)
  })
});
//POST
router.post('/', (req,res)=>{
  db.Todo.create(req.body)
  .then((newTodo)=>{
    res.status(201).json(newTodo)
  })
  .catch((err)=>{
    res.send(err)
  })
})
//SHOW
router.get('/:todoId', (req, res)=>{
  db.Todo.findById(req.params.todoId)
  .then((foundTodo)=>{
    res.json(foundTodo)
  })
  .catch((err)=>{
    res.send(err)
  })
})
//UPDATE
router.put('/:todoId', (req, res)=>{
  db.Todo.findOneAndUpdate({_id: req.params.todoId},  req.body, {new: true})
  .then((updatedTodo)=>{
    res.json(updatedTodo)
  })
  .catch((err)=>{
    res.send(err)
  })
})
//DELETE
router.delete('/:todoId', (req, res)=>{
  db.Todo.remove({_id: req.params.todoId})
  .then(()=>{
    res.send('deleted')
  })
  .catch((err)=>{
    res.send(err)
  })
})

module.exports = router;