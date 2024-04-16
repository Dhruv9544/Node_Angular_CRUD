const UserModel = require('../Model/UserModel')

module.exports.getUser = function(req,res){

        email = req.body.email

        UserModel.findOne({email:email}).then((data)=>{

            res.json({data:data,msg:"user retrived",rcode:200})
        }).catch((err)=>{

            res.json({data:err,msg:"smw",rcode:-9})
        })

}

