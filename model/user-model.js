const mongoose = require("mongoose")




//schema
let UserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }
})



//model
let UserModel = mongoose.model("user",UserSchema)


module.exports = UserModel