let express = require('express');
let app = express();

let fs = require('fs') 
 
// var PORT = 3000; 

app.get('/',(req,res)=>{
    // res.send("this is test file")
    fs.readFile('D:/first/firstFolder/notepad.txt', function(err, data) {
        // if (err) throw err
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    
})
})


  
app.listen(8080,()=>{
    console.log('port: 8080 is listening')
});