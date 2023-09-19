const express = require('express')
const app = express()
// const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// your code goes here
app.get("/mario", async (req, res) => {
    const Character = await marioModel.find();

    res.json({
        status: "success",
        Character
    })
})
app.get("/mario/:id", async (req, res) => {
    try{
   const Character = await marioModel.find({_id:req.params.id});

    res.json({
        status: "success",
        Character
    })
    }catch(e){
         res.status(400 ).json({
            status: "failed",
            message: e.message
        })

    }
 
})
app.post("/mario",async (req, res) => {
    try {
      
        const Character = await marioModel.create(req.body);
        res.status(201 ).json({
            status: "success",
            Character
        })

    } catch (e) {
        res.status(400 ).json({
            status: "failed",
            message: e.message
        })
    }

})
app.patch("/mario/:id", async (req, res) => {
    try {
        const Character = await marioModel.updateOne({_id:req.params.id},{weight:req.body.weight});
        res.json({
            status: "success",
            Character
        })

    } catch (e) {
        res.status(400 ).json({
            status: "failed",
            message: e.message
        })
    }

})
app.delete("/mario/:id", async (req, res) => {
    try {
        const Character = await marioModel.deleteOne({_id:req.params.id});
        res.status(200).json({
            status: "success",
            message: 'character deleted',
            Character
        })

    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }

})
app.get('*', (req, res) => {
    res.status(404).json({
        status: "Failed",
        message: "API NOT FOUND"
    })
})
module.exports = app;