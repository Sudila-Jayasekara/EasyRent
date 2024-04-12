import mongoose from "mongoose";

const ComplainsSchema = mongoose.Schema(
    {
       

        // Vehicle information
        vehicle_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehicle',
            type: String,
            required: true,
        },

        // complains details
        Driver_description:{
            type: String,
            ref:'DDescription',
            required: true,
        },

        Vehicle_description:{
            type:String,
            ref:'VDescription',
            required:true
        },
       
    },
    {
        timestamps:true,
    }
);

export const Complains = mongoose.model('complains',ComplainsSchema); 