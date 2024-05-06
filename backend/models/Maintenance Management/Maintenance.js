
import mongoose from "mongoose";

const MaintenanceSchema = mongoose.Schema(
    {
       
        vehicle_id:{
            type: String,
            required: true,
        },
        Vehicle:{
            type: String,
            required: true,
        },

        Vehicle_No:{
            type:String,
            required:true
        },
        Tire_Condition:{
            type:String,
            required:true
        },
        Oil_level:{
            type: String,
            required: true,
        },
        Breck:{
            type: String,
            required: true,
        },

        Shockets:{
            type:String,
            required:true
        },
        Engine_Repaired:{
            type:String,
            required:true
        },
        Oil_Changed:{
            type: String,
            required: true,
        },

        Description:{
            type:String,
            required:true

       
    },
    /*{
        timestamps:true,
    }*/
    }
);

export const Maintenance = mongoose.model('Maintenance',MaintenanceSchema); 