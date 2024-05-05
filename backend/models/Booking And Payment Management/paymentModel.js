import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
    {
        // Booking details
        booking_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'booking_id',
            required: true,
          },

        //payment detials
        estimatePrice: {
            type: Number,
            // required: true,
        },
        additionalCost: {
            type: Number,
            // required: true,
        },
        totalCost: {
            type: Number,
            // required: true,
        },
        tirpStart: {
            type: Date,
        },
        tripEnd: {
            type: Date,
        },
        paymentStatus: {
            enum: ['pending','completed'],
            default: 'pending',
            type: String,
         },
    },
    {
        timestamps: true,
    }
);

export const Payment = mongoose.model('Payment',paymentSchema);