const customerAddressModel = require("../model/cutomerAddress-model")



module.exports.addCustomerAddress = function (req, res) {
    let userId = req.body.userId
    let address = req.body.address
    let stateId = req.body.stateId
    let cityId = req.body.cityId
    let pincode = req.body.pincode
    let isDefault = 1


    let customerAddress = new customerAddressModel({
        userId: userId,
        address: address,
        stateId: stateId,
        cityId: cityId,
        pincode: pincode,
        isDefault: isDefault
    })

    customerAddress.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "customer address added......", status: 200, data: sucess })
        }
    })
}


//list


module.exports.getAllCustomerAddress = function (req, res) {
    customerAddressModel.find().populate().exec(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "customer address retrived......", status: 200, data: data })
        }
    })
}


//delete

module.exports.deleteCustomerAddress = function (req, res) {
    let customerAddressId = req.params.customerAddressId

    customerAddressModel.deleteOne({ _id: customerAddressId }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "customer Address removed......", status: 200, data: data })
        }
    })
}
//update

module.exports.updateCustomerAddress = function (req, res) {
    let customerAddressId = req.body.customerAddressId
    let isDefault = req.body.isDefault

    customerAddressModel.updateOne({ _id: customerAddressId }, { $set: { isDefault: isDefault } }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "customer address updated......", status: 200, data: data })
        }
    })

}