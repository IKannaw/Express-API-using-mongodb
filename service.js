const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello this is a node API")
})

app.listen(3000,()=>{
      console.log("Hello world")
})