const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send({message:"Hello world"})
})

app.listen(process.env.PORT || 4040, ()=>{
  console.log("Hello world");
})