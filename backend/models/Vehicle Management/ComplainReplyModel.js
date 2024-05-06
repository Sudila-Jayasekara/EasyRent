// models/complainreply.js
import mongoose from "mongoose";

const complainReplySchema = new mongoose.Schema({
  complainId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Complain', // assuming your complain model is named 'Complain'
    required: true
  },
  reply: {
    type: String,
    required: true
  },
  vehicleReview: {
    type: String,
    required: true
  },
  driverReview: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ComplainReply = mongoose.model('ComplainReply', complainReplySchema);

export default ComplainReply;
