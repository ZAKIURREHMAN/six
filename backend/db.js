const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const URL = "mongodb+srv://zaki:11223344@cluster0.bqtefmi.mongodb.net/FinelProj?retryWrites=true&w=majority";

const connecttoMongo = (()=>{
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },()=>{
        console.log("Successfully  connected ")
    })
})
module.exports = connecttoMongo;