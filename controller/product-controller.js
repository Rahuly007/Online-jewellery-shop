const ProductModel = require("../model/product-model")


//add

module.exports.addProduct = function (req, res) {
    let ProductName = req.body.ProductName
    let category = req.body.categoryId
    // let subCategory = req.body.subCategoryId
    let brand = req.body.brandId
    let basePrice = req.body.basePrice



    let product = new ProductModel({
        ProductName: ProductName,
        category: category,
        // subCategory: subCategory,
        brand: brand,
        basePrice: basePrice
    })

    product.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "product added......", status: 200, data: req.body })
        }
    })
}


//list


module.exports.getAllProduct = function (req, res) {
    ProductModel.find().populate("category").populate("brand").exec(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "product retrived......", status: 200, data: data })
        }
    })
}


module.exports.getOneProduct = function (req, res) {
    let id = req.params.id
    ProductModel.findOne({ _id: id }).populate("category").populate("brand").exec(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "product retrived......", status: 200, data: data })
        }
    })
}

module.exports.deleteProduct = function (req, res) {
    let productId = req.params.productId

    ProductModel.deleteOne({ _id: productId }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "product removed......", status: 200, data: data })
        }
    })
}
//update

module.exports.updateProduct = function (req, res) {
    let productId = req.body.productId
    let ProductName = req.body.ProductName
    let category = req.body.category
    let brand = req.body.brand
    let basePrice = req.body.basePrice

    ProductModel.updateOne({ _id: productId }, { $set: { ProductName: ProductName, category: category, brand: brand, basePrice: basePrice } }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "product updated......", status: 200, data: data })
        }
    })

}

