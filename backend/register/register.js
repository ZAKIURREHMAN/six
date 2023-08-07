
const express = require("express")
const router = express.Router()
const User = require('../User/User')
const {validationResult, body } = require('express-validator');

router.post('/',[
    body('name',"Your name must be five characters").isLength({min:5}),
    body('email',"Please Enter A valid email").isEmail(),
    body('password',"Your password must be 5 characters").isLength({min:5}),
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {name,email,password} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            return res.send({message:"This User is already register "})
        }
        else{
            const user = User(req.body)
            res.send(req.body)
            user.save(err=>{
                if(err){
                    res.send(err)
                }
            })
        }
    }
    )
}
)
module.exports= router;