const stateModel = require("../model/state-model")



module.exports.addState = function (req, res) {
    let stateName = req.body.stateName


    let state = new stateModel({
        stateName: stateName, 
    })

    state.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "state added......", status: 200, data: sucess })
        }
    })
}


//list


module.exports.getAllState = function (req, res) {
    stateModel.find(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "state retrived......", status: 200, data: data })
        }
    })
}


//delete

module.exports.deleteState = function (req, res) {
    let stateId = req.params.stateId

    stateModel.deleteOne({ _id: stateId }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "state removed......", status: 200, data: data })
        }
    })
}
//update

module.exports.updateState = function (req, res) {
    let stateId = req.body.stateId
    let stateName = req.body.stateName

    stateModel.updateOne({ _id: stateId }, { stateName: stateName }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "state updated......", status: 200, data: data })
        }
    })

}