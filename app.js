const express = require('express')
const app = express();
const port = 3000;

app.get('/add',(req,res)=>{
    const {num1,num2} = req.query;
    
    if(!num1 || num2){
        return res.status(400).json({error:"Both numbers are"})
    }
    
    const res = parseFloat(num1) + parseFloat(num2);
    res.json(res);
})

app.listen(port,()=>{
    console.log("Listening at port 3000");
})