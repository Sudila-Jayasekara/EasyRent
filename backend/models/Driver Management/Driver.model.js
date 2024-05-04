import mongoose from 'mongoose';

// Create model
const driverSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  profilePicture: {
    type: String,

  },
  address: {
    type: String,
    required: true,
  },
  comment: {
    type: String,

  },
  license: {
    type: String,

  },
  licenseType: {
    type: String,

  },
  nic: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,

  },
  userType:{
    type:String,
    required:true,
},
  licensePhoto: {
    type: String,
    default: "",

  },
  profilePicture: {
    type: String,
    default: "",
  },

}, { timestamps: true });
const DriverModel = mongoose.model("Driver", driverSchema)

export { DriverModel as Driver };

