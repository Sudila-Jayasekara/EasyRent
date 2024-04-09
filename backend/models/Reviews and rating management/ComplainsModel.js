import mongoose from "mongoose";

const ComplainsSchema = mongoose.Schema(
    {
        // Vehicle details
        TripId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TripId',
            type: String,
            required: true,
          },

        // Vehicle information
        vehicleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehicle',
            type: String,
            required: true,
        },

        // complains details
        ComlpainsFor: {
            type: String,
            enum: ['Driver', 'Vehicle'],
            required: true,
        },

        Description:{
            type:String,
            ref:'Description',
            required:true
        }
       
    }
);

export const Complains = mongoose.model('complains',ComplainsSchema); 