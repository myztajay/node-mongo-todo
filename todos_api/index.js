const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
})

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT || 4040, ()=>{
  console.log("server");
})