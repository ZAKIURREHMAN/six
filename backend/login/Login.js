const express = require("express")
const User = require("../User/User")
const router = express.Router()

router.post('/',(req,res)=>{
    const {email,password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Losing successfully",user:user})
            }
            else{
                res.send({message:"Please Enter A VALID Password"})
            }
        }
        else{
            res.send({message:"This user are not register"})
        }
    })
})
module.exports = router;