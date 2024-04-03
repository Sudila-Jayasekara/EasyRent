import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
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
    phoneno:{
        type:Number,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    }
    


},{timestamps:true});

const RenterModel=mongoose.model("Renter",userSchema)

export  {RenterModel as Renter};