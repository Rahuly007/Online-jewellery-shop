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
            res.json({ msg:"error",status:-1,data:req.body})
        }else{
            res.json({msg:"sucess",status:200,data:req.body})
        }
    })
}