const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    total: {
        type: String,
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customerAddress"
    }
})

const OrderModel = mongoose.model("order", OrderSchema)

module.exports = OrderModel