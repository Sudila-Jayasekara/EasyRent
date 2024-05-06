import mongoose from "mongoose";

const ComplainsSchema = mongoose.Schema(
    {
       
        // Vehicle information
        vehicle_id:{
            type: String,
            ref: 'Vehicle',
            required: true,
      },
        // complains details
        id:{
            type: String,
            required: true,
        },


        // complains details
        Driver_description:{
            type: String,
            required: true,
        },

        Vehicle_description:{
            type:String,
            required:true
        },
        rating:{
            type:String,
            required:true
        },
        reply:{
            type:String
        }
       
    },
    {
        timestamps:true,
    }
);

export const Complains = mongoose.model('complains',ComplainsSchema); 