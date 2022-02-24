const mongoose = require("mongoose")


//schema
let subCategorySchema = new mongoose.Schema({
    subCategoryName: {
        type: String
    },
    isActive: {
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
})


//model
let subCategoryModel = mongoose.model("subcategory", subCategorySchema)



module.exports = subCategoryModel