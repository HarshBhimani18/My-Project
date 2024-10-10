const mongoose = require('mongoose');

const schema = mongoose.Schema({
    NumberID:Number,
    Name:String,
    MobileNumber:Number,
    Address:String,
    Relation:String,    
    Image:String
});

module.exports = mongoose.model("UserData",schema,"Userdatas");