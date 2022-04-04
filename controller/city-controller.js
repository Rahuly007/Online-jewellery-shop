const cityModel = require("../model/city-model")



module.exports.addCity = function (req, res) {
    let cityName = req.body.cityName
    let stateId = req.body.stateId

    let city = new cityModel({
        cityName: cityName,
        state: stateId
    })

    city.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "city added......", status: 200, data: sucess })
        }
    })
}


//list


module.exports.getAllcity = function (req, res) {
    cityModel.find(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "city retrived......", status: 200, data: data })
        }
    })
}


//delete

module.exports.deleteCity = function (req, res) {
    let cityId = req.params.cityId

    cityModel.deleteOne({ _id: cityId }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "city removed......", status: 200, data: data })
        }
    })
}
//update

module.exports.updateCity = function (req, res) {
    let cityId = req.body.cityId
    let cityName = req.body.cityName

    cityModel.updateOne({ _id: cityId }, { $set: { cityName: cityName } }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "city updated......", status: 200, data: data })
        }
    })

}