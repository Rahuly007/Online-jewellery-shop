const mongoose = require("mongoose")




//schema
let ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brand"
    },
    basePrice: {
        type: Number
    }
})



//model
let ProductModel = mongoose.model("product", ProductSchema)


module.exports = ProductModel