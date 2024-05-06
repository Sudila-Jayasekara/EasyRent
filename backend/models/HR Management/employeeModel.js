import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
  },
  lastName: {
    type: String,
    required: true,
  },
  nic1: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum:['car washer', 'cleaner'],
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  email1: { 
    type: String,
    required: true
  }
});

export const Employee = mongoose.model('Employee', employeeSchema);
