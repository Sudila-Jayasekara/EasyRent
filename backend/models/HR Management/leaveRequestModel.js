import mongoose from 'mongoose';

const leaveRequestSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
  },
  leaveFrom: {
    type: Date,
    required: true,
  },
  leaveTo: {
    type: Date,
    required: true,
  },
  actionPlan: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
  },
});

export const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);
