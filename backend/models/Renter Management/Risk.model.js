import mongoose from "mongoose";

const riskSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        
    },
    nic:{
        type:String,
        required:true,
        
    },
    phoneNumber:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
    },
    accidentAddress:{
        type:String,
        required:true,
    },
    accidentDate:{
        type:String,
        required:true,
    },
    accidentTime:{
        type:String,
        required:true,
    },
    accidentDescription:{
        type:String,
        required:true,
    },
    accidentPhotos:{
        type:Array,
        default:[],
    },
    injuries:{
        type:String,
        required:true,
    },
    legalAndInsuranceInfo:{
        type:String,
        required:true,
    },
    vehiclenumber:{
        type:String,
        required:true,
    },
    },
    {timestamps:true});

    const RiskModel = mongoose.model("Risk", riskSchema);
    export { RiskModel as Risk };