const req = require("express/lib/request")
const fs=require("fs")

function login(req,res){
    res.write("login")
    res.end()
}

function signup(req,res) {
    let signupHtml=fs.readFileSync("./view/form.html")
    res.write(signupHtml)
    res.end()
}

function saveuser(req,res){
   console.log(req.body.user);
    res.json({
        msg:"done danadone....",
        status:200,
        data:req.body
    })
}


module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveuser