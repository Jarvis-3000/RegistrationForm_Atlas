const express = require("express")
const path = require("path")
const bodyParser=require("body-parser")
const createDocument=require("./app/create")
const fetchData=require("./app/data")

const app=express()

const PORT=process.env.PORT || 1000

// const data=[];

app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/",(req,res)=>{
    res.send("index.html")
})

app.get("/register",(req,res)=>{
    res.sendFile("register.html")
})

//if you wanna use GET method 
// app.get("/home",(req,res)=>{
//     console.log(req.query)
//     res.sendFile(__dirname+"/public/index.html")
// })

app.post("/",(req,res)=>{
    // console.log(req.body)
    // data.push(req.body)
    //sending the data to createDocument file to insert the document into MongoDB 
    createDocument(req.body)
    res.sendFile(__dirname+"/public/index.html")
})


app.get("/data",(req,res)=>{
    fetchData().then(response=>res.send(response))
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
