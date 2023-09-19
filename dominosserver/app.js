const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/welcome',(req,res)=>{
    res.status(200).send("Welcome to Dominos!")
})
app.get('/contact',(req,res)=>{
    res.status(200).send( {   phone: '18602100000',
    email: 'guestcaredominos@jublfood.com' })
})
app.get('*',(req,res)=>{
    res.status(404).send();
})

app.listen(8081,()=> console.log("server is up"))