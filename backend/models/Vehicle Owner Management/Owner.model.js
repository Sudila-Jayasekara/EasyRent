import mongoose  from "mongoose";

const ownerSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    },
    nic: {
        type: String,
        required: true,
        unique:true,
    },
    

},{timestamps:true});

const OwnerModel=mongoose.model("Owner",ownerSchema)
export  {OwnerModel as Owner};