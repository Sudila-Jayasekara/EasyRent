import mongoose from "mongoose";
const renterSchema=new mongoose.Schema({
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
    profilePicturePath:{
        type:String,
        default:""
    },
    wishList: {
        type: Array,
        default: [],
      },
    nic:{
        type:String,
    }
    

},{timestamps:true});

const RenterModel=mongoose.model("Renter",renterSchema)

export  {RenterModel as Renter};