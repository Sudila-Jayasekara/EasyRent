import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
    {
        // User details
        renter_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Renter',
            type: String,
            required: true,
          },

        // Vehicle information
        vehicle_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehicle',
            type: String,
            required: true,
        },

        driver_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Driver',
            type: String,
        },
        // Booking details
        serviceType: {
            type: String,
            enum: ['rent', 'hire'],
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected', 'cancelled', 'completed'],
            default: 'pending',
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        description: { //reject Reason
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Booking = mongoose.model('Booking',bookingSchema);