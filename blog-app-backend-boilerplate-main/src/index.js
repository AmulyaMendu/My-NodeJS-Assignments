const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Blog");
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get('*', (req, res) => {
    res.status(404).json({
        status: "Failed",
        message: "API NOT FOUND"
    })
})
app.listen(3000, () => console.log('Server running......'));

