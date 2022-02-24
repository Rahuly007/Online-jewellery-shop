const express = require("express");
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const res = require("express/lib/response")

//midleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//database
mongoose.connect('mongodb://localhost:27017/ecom', function (err) {
    if (err) {
        console.log("db is not connected");
    } else {
        console.log("db is connected sucessfully");
    }
});

app.get("/", function (req, res) {
    res.write("Welcome")
    res.end()
})



//urls   session
//app.get("/login", sessionController.login)
//app.get("/signup", sessionController.signup)
//app.post("/saveuser", sessionController.saveuser)

//role
app.post("/roles", roleController.addRole)
app.get("/roles", roleController.getAllRoles)
app.delete("/roles/:roleId", roleController.deleteRole)
app.put("/roles", roleController.updateRole)


//user
app.post("/users", userController.addUser)
app.get("/users",userController.getAllUser)
app.delete("/users",roleController.deleteRole)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)

//server
app.listen(3000, function () {
    console.log("server is running at 3000")
})