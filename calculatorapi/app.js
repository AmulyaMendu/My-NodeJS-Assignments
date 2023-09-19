const express=require('express')
var bodyParser=require('body-parser')

const app= express();
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/cal',(req,res)=>{
    res.render("cal.ejs");

   
})
app.post('/add',(req,res)=>{
    let value=Number(req.body.num1)+Number(req.body.num2)
    if(value<1000000){
        res.status(200).send({

            status: "success",
            message: "the sum of given two numbers",
            sum:value
        })
       

    }else if(value>1000000){
        res.status(400).send({

            status: "error",
            message: "Overflow",
        })

    }else{
        res.status(400).send({

            status: "error",
            message: "Underflow",
        })

    }
    

})
app.post('/sub',(req,res)=>{
    res.status(200).send({
        status: "success",
        message: "the difference of given two numbers",
        difference:Number(req.body.num1)-Number(req.body.num2)
    })
})
app.post('/mul',(req,res)=>{
    res.status(200).send({
        status: "success",
        message: "the product of given two numbers",
        result:Number(req.body.num1)*Number(req.body.num2)
    })
})
app.post('/div',(req,res)=>{
    if(Number(req.body.num2)===0){
         res.status(400).send({
           status: "error",
        message: "Cannot divide by zero",
         })

    }else{
         res.status(200).send({
        status: "success",
        message: "the division of given two numbers",
        result:Number(req.body.num1)/Number(req.body.num2)
    })

    }
   
})
app.listen(5000,()=>{
    console.log("server is created");
})