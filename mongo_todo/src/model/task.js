const { Schema, isObjectIdOrHexString } = require("mongoose")
const { v4: uuidv4 } = require('uuid');
//const{Schema, model} = require("mongoose")
const mongoose = require('mongoose')
const userSchema=new mongoose.Schema({   
    _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, ""),
    },
    username: {
        type: String,
        required:true,
        minlength:3,
        maxlength:20

    },
    email: {
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:20
    },
    age:{
        type: Number,
        default:null,
    },
    isUser: {
        type:Boolean,
        default:true,

    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{ timestamps:true}
);

const taskModel=mongoose.model("tasks",userSchema);
module.exports=taskModel;
