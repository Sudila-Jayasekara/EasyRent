import mongoose from "mongoose";

const payrollSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  hoursworked: {
    type: String,
    required: true,
  },
  hourlyrate: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  }
});

export const Payroll = mongoose.model('Payroll', payrollSchema);
