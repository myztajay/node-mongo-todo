const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser');
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
  res.send({message:"Hello from root"})
})

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT || 4040, ()=>{
  console.log("server");
})