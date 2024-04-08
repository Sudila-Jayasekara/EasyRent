import mongoose from "mongoose";

const mongoose =require ("mongoose");
const schema=mongoose.schema;

const ComplainSchema =new schema({
    vehicle_id:{
        type:String,
        required:true,
    },
    trip_id:{
        type:String,
        required:true,
    },
    complains_for:{
        type:String,
        required:true,
    },
    explain:{
        type:String,
        required:true,
    }

});
module.exports=mongoose.model(
    "ComplainsModel",//filename
    ComplainSchema//function schema
)
