import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        type: String,
        required: true,
    },
    photos: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    transmission: {
        type: String,
        enum: ['auto', 'manual'],
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // status: {
    //     type: String,
    //     enum: ['available', 'Not available'],
    //     default: 'available'
    // },
});

export const Vehicle = mongoose.model('Vehicle',vehicleSchema);

