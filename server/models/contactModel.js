const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    subject: {
        type:String,
    },
    query: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model("contact",contactSchema);