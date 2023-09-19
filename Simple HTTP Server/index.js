const fs=require("fs");
const http=require("http");
http.createServer(function(req,res){
    fs.readFile('index.html',function(error,data){
        if(data){
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data)
        }else{
            console.log(error)
        }
        return res.end();

      
    })
}).listen(5000)
