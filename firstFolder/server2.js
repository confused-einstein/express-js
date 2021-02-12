let express = require('express');
let app = express();
let fs = require('fs') 
 
// var PORT = 3000; 

app.get('/',(req,res)=>{
    fs.readFile('demo.html',(err,data)=>{
     if(err) throw err;
     res.write(data);
     return res.end();
    })
})

app.post('/postText',(req,data)=>
{
    

})
  
app.listen(8080);