import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        type: String,
        required: true,
    },
    photos: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    transmission: {
        type: String,
        enum: ['auto', 'manual'],
        required: true
    },
   
    createdAt: {
        type: Date,
        default: Date.now
    },
    modelYear:{
        type: String,
        required: true
      },
      engineCapacity:{
        type: String,
        required: true
      },
     mileage:{
        type: String,
        required: true
      },
    
     totalSeats: {
        type: Number,
        required: true
      },
      vehicleImage: {
        type: String,
    
      },


},{timestamps:true});
export const Vehicle = mongoose.model('Vehicle',vehicleSchema);

