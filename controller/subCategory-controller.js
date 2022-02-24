const subCategoryModel = require("../model/subCategory-model")


module.exports.addSubCategory = function (req, res) {
    let subCategoryName = req.body.subCategoryName
    let isActive = 1
    let category = req.body.category



    let Category = new subCategoryModel({
        subCategoryName: subCategoryName,
        isActive: isActive,
        category: category
    })

    Category.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "subCategory added......", status: 200, data: sucess })
        }
    })
}


//list


module.exports.getAllSubCategory = function (req, res) {
    subCategoryModel.find(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "subCategory retrived......", status: 200, data: data })
        }
    })
}


//delete

module.exports.deleteSubCategory = function (req, res) {
    let subCategoryId = req.params.subCategoryId

    subCategoryModel.deleteOne({ _id: subCategoryId }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "subCategory removed......", status: 200, data: data })
        }
    })
}
//update

module.exports.updateSubcategory = function (req, res) {
    let subCategoryId = req.body.subCategoryId
    let isActive = req.body.isActive

    subCategoryModel.updateOne({ _id: subCategoryId }, { isActive: isActive }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "subCategory updated......", status: 200, data: data })
        }
    })

}
