const express = require("express");
const mongoose = require("mongoose")
const sessionController=require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const res=require("express/lib/response")

//midleware
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database
mongoose.connect('mongodb://localhost:27017/ecom',function (err) {
    if (err) {
        console.log("db is not connected");
    }else{
        console.log("db is connected sucessfully");
    }
});

app.get("/",function (req,res) {
    res.write("Welcome")
    res.end()
})


//role
app.post("/roles",roleController.addRole)


//urls
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)


//server
app.listen(3000,function(){
    console.log("server is running at 3000")    
})