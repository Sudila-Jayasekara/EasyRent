import mongoose from "mongoose";

const ComplainsSchema = mongoose.Schema(
    {
        // Vehicle details
        trip_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'trip_id',
            type: String,
            required: true,
          },

        // Vehicle information
        vehicle_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehicle',
            type: String,
            required: true,
        },

        // complains details
        Driver_description: {
            type: String,
            ref:'DDescription',
            required: true,
        },

        Vehicle_description:{
            type:String,
            ref:'VDescription',
            required:true
        }
       
    }
);

export const Complains = mongoose.model('complains',ComplainsSchema); 