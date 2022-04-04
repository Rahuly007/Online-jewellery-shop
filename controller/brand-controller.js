const BrandModel = require("../model/brand-model")



module.exports.addBrand = function (req, res) {
    let brandName = req.body.brandName

    let brand = new BrandModel({
        brandName: brandName
    })

    brand.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "brand added......", status: 200, data: req.body })
        }
    })
}



module.exports.getAllBrands = function (req, res) {
    BrandModel.find(function (err, sucess) {
        if (err) {
            console.log(err);
            res.json({ msg: "error while finding brands", status: -1, data: res.err })
        } else {
            res.json({ msg: "retriving all brands", status: 200, data: sucess })
        }
    })
}

module.exports.deleteBrands = function (req, res) {
    let brandId = req.params.brandId
    BrandModel.deleteOne({ _id: brandId }, function (err, sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while deleting brands", status: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully brand is deletes", status: 200, data: sucess })
        }
    })
}

module.exports.updateBrand = function (req, res) {
    let brandId = req.body.brandId
    let brandName = req.body.brandName

    BrandModel.updateOne({ _id: brandId }, { $set: { brandName: brandName } }, function (err, sucess) {
        if (err) {
            console.log(err)
            res.json({ msg: "error while updating brands", status: -1, data: res.err })
        } else {
            res.json({ msg: "sucessfully brand is updated", status: 200, data: sucess })
        }
    })
}