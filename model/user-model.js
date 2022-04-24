const mongoose = require("mongoose")




//schema
let UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}
    
)



//model
let UserModel = mongoose.model("user", UserSchema)


module.exports = UserModel