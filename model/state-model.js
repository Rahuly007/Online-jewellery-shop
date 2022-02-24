const mongoose = require("mongoose")




//schema
let stateSchema = new mongoose.Schema({
    stateName:{
        type:String
    }
})


//model
let stateModel = mongoose.model("state",stateSchema)


module.exports = stateModel
