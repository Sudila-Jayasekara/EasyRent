import mongoose from 'mongoose'

// Create model
const ownerVehicleSchema = new mongoose.Schema({

 brand: {
    type: String,
    required: true
  },
 model:{
    type: String,
    required: true
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

const OwnerVehicleModel=mongoose.model("OwnerVehicle",ownerVehicleSchema)
export  {OwnerVehicleModel as OwnerVehicle};