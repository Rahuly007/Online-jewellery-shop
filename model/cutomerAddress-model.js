const mongoose = require("mongoose")




//schema
let customerAddressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    address: {
        type: String
    },
    stateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state"
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "city"
    },
    pincode: {
        type: Number
    },
    isDefault: {
        type: Number
    }
})



//model
let customerAddressModel = mongoose.model("customerAddress", customerAddressSchema)


module.exports = customerAddressModel