const express = require("express")
const ConUser = require("./ConUser")
const router = express.Router()

router.post('/',(req,res)=>{
    console.log(req.body)
    const conuser = ConUser(req.body)
    conuser.save()
    res.send(req.body)
    
})
module.exports = router