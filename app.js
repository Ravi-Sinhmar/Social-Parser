
const express =  require('express');
const app = express();
const path = require('path')
require('dotenv').config();
const bodyParser = require('body-parser');
const getAnswer= require('./aiModules/question');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Home
app.get('/',(req,res)=>{
res.status(200).sendFile(__dirname + "/public/ask.html");
});

// Post question to AI
app.post("/question",async(req,res)=>{
    const {question} = req.body;
    console.log(question);
    const answer = await getAnswer(question);
    console.log(answer);
  res.status(200).json({status:'success',data:{
    answer:answer
  }})
});


// Server setup
const port = process.env.port
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});