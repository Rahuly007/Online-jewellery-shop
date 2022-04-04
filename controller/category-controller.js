const CategoryModel = require("../model/category-model")


module.exports.addCategory = function (req, res) {
    let categoryName = req.body.categoryName
    let isActive = 1

    let category = new CategoryModel({
        categoryName: categoryName,
        isActive: isActive
    })

    category.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "category added......", status: 200, data: req.body })
        }
    })
}


module.exports.getAllCategory = function (req, res) {
    CategoryModel.find(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "category retrived......", status: 200, data: sucess })
        }
    })
}

module.exports.findOneCategory = function (req, res) {
    let id = req.params.id
    CategoryModel.findOne({ _id: id }, function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "category fetched......", status: 200, data: sucess })
        }
    })
}

module.exports.deleteCategory = function (req, res) {
    let categoryId = req.params.categoryId

    CategoryModel.deleteOne({ _id: categoryId }, function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "category removed......", status: 200, data: sucess })
        }
    })
}


module.exports.updateCategory = function (req, res) {
    let categoryId = req.body.categoryId
    let categoryName = req.body.categoryName
    let isActive = req.body.isActive

    CategoryModel.updateOne({ _id: categoryId }, { $set: { categoryName: categoryName,isActive: isActive } }, function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "category updated......", status: 200, data: sucess })
        }
    })
}

