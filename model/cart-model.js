const mongoose = require("mongoose")


let cartSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },

    vendorProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendorProduct"
    },
    qty: {
        type: String,
    }
})

let cartModel = mongoose.model("cart", cartSchema)

module.exports = cartModel