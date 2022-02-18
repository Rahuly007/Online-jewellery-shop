const UserModel = require("../model/user-model")




//add

module.exports.addUser = function (req,res){
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    let user = new UserModel({
         firstName : firstName,
         email : email,
         password : password,
         role : role
    })

    user.save(function(err,sucess){
        if(err){
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg:"error",status:-1,data:res.err})
        }else{
            res.json({msg:"user added......",status:200,data:req.body})
        }
    })
}


//list


module.exports.getAllUser = function (req,res) {
    UserModel.find().populate().exec(function(err,data){
        if(err){
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg:"error",status:-1,data:res.err})
        }else{
            res.json({msg:"user retrived......",status:200,data:data})
        }
    })
}


//delete

module.exports.deleteUser = function (req,res){
    let userId = req.params.userId

    UserModel.deleteOne({_id:userId},function(err,data){
        if(err){
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg:"error",status:-1,data:res.err})
        }else{
            res.json({msg:"user removed......",status:200,data:data})
        }
    })
}
//update

module.exports.updateUser = function(req,res) {
         let roleId = req.body.roleId
         let firstName = req.body.firstName

         UserModel.updateOne({_id:roleId},{firstName:firstName},function(err,data){
            if(err){
                console.log(err);
                //sendMailtoDev(err)
                res.json({ msg:"error",status:-1,data:res.err})
            }else{
                res.json({msg:"user updated......",status:200,data:data})
            }
        })
         
}


