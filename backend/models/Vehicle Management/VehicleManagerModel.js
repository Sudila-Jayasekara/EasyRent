import mongoose from "mongoose";
const vehiclemanagerSchema=new mongoose.Schema({
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
    userType:{
        type:String,
        required:true,
    },
    profilePicture: {
        type: String,
    
      },
   
    nic:{
        type:String,
        required:true,
        unique:true,
    },
    

},{timestamps:true});

const VehiclemanagerModel=mongoose.model("Vehiclemanager",vehiclemanagerSchema)

export  {VehiclemanagerModel as Vehiclemanager};