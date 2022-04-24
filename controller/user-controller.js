const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")
const JWT_SECRET = "skdvosakncwnefienoienv";
const jwt = require('jsonwebtoken');    


//add

module.exports.addUser = function (req, res) {
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password

    let encPassword = bcrypt.hashSync(password, 10)

    let user = new UserModel({
        firstName: firstName,
        email: email,
        password: encPassword,
    })

    user.save(function (err, sucess) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "user added......", status: 200, data: req.body })
        }
    })
}


//list


module.exports.getAllUser = function (req, res) {
    UserModel.find().populate().exec(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "user retrived......", status: 200, data: data })
        }
    })
}


//delete

module.exports.deleteUser = function (req, res) {
    let userId = req.params.userId

    UserModel.deleteOne({ _id: userId }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "user removed......", status: 200, data: data })
        }
    })
}
//update

module.exports.updateUser = function (req, res) {
    let roleId = req.body._id
    let firstName = req.body.firstName

    UserModel.updateOne({ _id: roleId }, { $set: { firstName: firstName } }, function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "user updated......", status: 200, data: data })
        }
    })
}



//login
module.exports.login = function (req, res) {
    let email = req.body.email
    let password = req.body.password
    let isCorrect = false

    UserModel.findOne({ email: email }, function (err, data) {
        if(err){
            console.log(err);
        }
        if (data) {
            let ans = bcrypt.compareSync(password, data.password)
            if (ans == true) {
                isCorrect = true
            }
        }

        if (isCorrect == false) {
            res.json({ msg: "Invalid credentials pls check your email and password", status: -1, data: req.body })
        } else {
            res.json({ msg: "login sucessfull", status: 200, data: email })
        }
    })    
}

