import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        serviceType: {
            type: String,
            required: true,
            trim: true,
        },
        serviceLocation: {
            type: String,
            required: true,
            enum: ["Home", "Hotel"],
        },
        dateTime: {
            type: String,
            required: true,
        },
        specialRequest: {
            type: String,
            default: "",
            trim: true,
        },
    },
    { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;