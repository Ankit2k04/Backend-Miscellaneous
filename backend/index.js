const express = require("express");
const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`standard get response...welcome ${user} your password is ${password}`);
})

app.post("/register",(req,res)=>{
    res.send("standard post response");
})