let express = require('express');
let os = require("os");
let app = express();

let fs = require('fs') 
var bodyParser = require('body-parser');
const { response } = require('express');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

 
// var PORT = 3000; 
let obj=[]
let naming=[
    {id:"1",name:"krishna"}
]

app.get('/',(req,res)=>{
    // res.send(`welcome to note pad app`)
    fs.readFile('./welcome.txt',(err,data)=>{
        if (err) throw err
        
        res.write(data.toString())
        return res.end()
    })
})

app.get('/read',(req,res)=>{
    // res.send("this is test file")
    console.log(naming)
    fs.readFile('./notepad.txt', function(err, data) {
        if (err) throw err
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data.toString());
        return res.end();
    
})
})
app.get('/post', function (req, res) {
    res.sendFile( __dirname + "/" + "post.html" );
 })
 

app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    let response = {
       _name:req.body._name
    };
    console.log(response);
    let val = response
    obj += val
    let val1 = val._name
    // naming.push(response);
    fs.appendFile("notepad.txt",os.EOL+val1 , (err) => { 
        if (err) { 
          console.log(err); 
        } 
        else { 
          // Get the file contents after the append operation 
          console.log(fs.readFileSync("notepad.txt","utf-8")); 
        } 
       }); 
    res.end(JSON.stringify(response));
 })

 console.log(obj)

 app.get('/delete',()=>{
    
 })

 app.delete('/delete',function(req,res){
    const path = 'C:/express js/firstFolder/notepad.txt'

    try {
      fs.unlinkSync(path)
      //file removed
    } catch(err) {
      console.error(err)
    }
	res.send("file has been removed");
});

app.listen(8080,()=>{
    console.log('port: 8080 is listening')
});