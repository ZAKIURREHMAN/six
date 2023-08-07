const mongoose = require('mongoose')
const { Schema } = mongoose;

const ConUserSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    number:{
        type:String,
        require:true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model("UserData",ConUserSchema) 