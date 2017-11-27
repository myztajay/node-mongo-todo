const express = require('express');
const router = express.Router();
const db = require ('../todos_api/models')


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

module.exports = router;