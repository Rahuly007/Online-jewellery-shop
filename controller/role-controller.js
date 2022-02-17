const RoleModel = require("../model/role-model")



module.exports.addRole = function (req, res) {
    console.log(req.body.roleName)
    
    let role=new RoleModel({
        roleName:req.body.roleName
    })

    role.save(function(err,sucess){
        if(err){
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg:"error",status:-1,data:res.err})
        }else{
            res.json({msg:"sucess",status:200,data:req.body})
        }
    })
}


module.exports.getAllRoles = function (req,res) {
        RoleModel.find(function(err,roles){
                if(err){
                    res.json({msg:"error",status:-1})
                }else{
                    res.json({msg:"sucess",status:200,data:roles}) 
                }
        })    
}


module.exports.deleteRole = function(req,res){
    let roleId = req.params.roleId

    RoleModel.deleteOne({"_id":roleId},function(err,sucess){
        if(err){
            res.json({msg:"error",status:-1})
        }else{
            res.json({msg:"sucess",status:200,data:sucess}) 
        }
    })
}