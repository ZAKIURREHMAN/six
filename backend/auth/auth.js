const express = require('express')
const router = express.Router.use();
const User = require('../user/User')
const {validationResult, body } = require('express-validator');
router.post ('/',[
    body('name',"Your name must be five characters").isLength({min:3}),
    body('email',"Please Enter A valid email").isEmail(),
    body('password',"Your password must be 5 characters").isLength({min:5}),
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body)
    const {name,email,password} = req.body;
    User.findOne({email,},(err,user)=>{

        if(user){
            return res.status(400).json({error:"This user is already register"})
        }
        else{
             User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }).then(user => res.json(user));  
            // return res.status(200).json({message:"User successfulll register"})
        }
    })


})
module.exports = router

