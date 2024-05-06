import mongoose from 'mongoose';

// Create model
const driverReportSchema = new mongoose.Schema({
  driverName: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  noOfDates: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
}, { timestamps: true });


const DriverReportModel = mongoose.model("DriverReport", driverReportSchema)

export { DriverReportModel as DriverReport };

