const mongoose = require("mongoose")


//schema
let citySchema = new mongoose.Schema({
    cityName: {
        type: String
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state"
    }
})



//model
let cityModel = mongoose.model("city", citySchema)



module.exports = cityModel