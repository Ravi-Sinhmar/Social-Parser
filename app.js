
const express =  require('express');
const app = express();
const path = require('path')
require('dotenv').config();
const bodyParser = require('body-parser');
const getAnswer= require('./aiModules/question');


// Middlewares
// For URL-encoded data
app.use(express.urlencoded({ extended: false }));
// For JSON data
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
res.status(200).sendFile(__dirname + "/public/ask.html");

});
app.post("/question",async(req,res)=>{
    const {question} = req.body;
    console.log(question);
    const answer = await getAnswer(question);
    console.log(answer);
  res.status(200).json({status:'success',data:{
    answer:answer
  }})
});



app.listen(5000, ()=>{
    console.log("server is listening on port 5000");
});