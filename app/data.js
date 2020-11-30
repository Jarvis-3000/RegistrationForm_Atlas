const mongoose = require("mongoose");
const Student = require("../app/student");
const connectDB=require("../app/connection")


async function fetchData(){

    connectDB()

    var Data=[];
    console.log("nop")
    await Student.find({},(err,data)=>{
        Data=data;
        // console.log(data)
        console.log("okkkkkkk")
    })
    return Data
  
}

module.exports=fetchData