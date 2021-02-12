const { json } = require('body-parser')
let express = require('express')
let app = express()
let bodyParser = require('body-parser')

let fs = require('fs')
let std = require('./JsonData')

app.use(express.json())
// app.use(bodyParser());

// const { domainToASCII } = require('url')


app.get('/',(req,res)=>{
    fs.readFile('./welcome.txt',(err,data)=>{
    if(err) throw err
    res.write(data)
    return res.end()
})

})
app.get('/read',(req,res)=>{
    fs.readFile('./notepad2.txt',(err,data)=>{
        if(err) throw err
        res.write(data)
        console.log(std)
        return res.end()
    })
})
app.post('/post',(req,res)=>{
    const user = {
        id: req.body.id,
        name : req.body.name
    }

    std.push(user)
    console.log(req.body)
    res.json(std)
})
app.put('/put/:id',(req,res)=>
 {   
     let id = req.params.id
//     res.send(id)
     let name = req.body.name
        
     for(let i =0;i<std.length();i++)
     {
          if()
     }
     console.log(index)

     if(index < 0 )
     {
         let stu = std[index]
         console.log(stu)
         stu.name  = name
         res.json(std) 
     }
     else{
         res.status(404)
     }
})




app.listen(3001,()=>{
    console.log('server is listening')
})
