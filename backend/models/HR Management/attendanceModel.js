import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  selectedDate: {
    type: Date,
    required: true,
  },
  signInTime: {
    type: String,
    required: true,
  },
  signOutTime: {
    type: String,
    required: true,
  },
  workingHours: {
    type: Number,
    required: true,
  },
});

export const Attendance = mongoose.model('Attendance', attendanceSchema);
