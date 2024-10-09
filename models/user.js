const { string, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userShcema = new Schema({
    email:{
        type:String,
        required:true
    },
});

userShcema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userShcema);