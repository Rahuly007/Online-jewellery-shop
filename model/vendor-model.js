const mongoose = require("mongoose")

const vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    contactNumber: {
        type: String,
        require: true
    },
    pincode: {
        type: Number,
        require: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role"
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state"
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "city"
    }


})

const vendorModel = mongoose.model("vendor", vendorSchema)

module.exports = vendorModel