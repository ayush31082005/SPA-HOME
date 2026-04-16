import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
    try {
        const {
            fullName,
            phoneNumber,
            location,
            serviceType,
            serviceLocation,
            dateTime,
            specialRequest,
        } = req.body;

        if (
            !fullName ||
            !phoneNumber ||
            !location ||
            !serviceType ||
            !serviceLocation ||
            !dateTime
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        const booking = await Booking.create({
            fullName,
            phoneNumber,
            location,
            serviceType,
            serviceLocation,
            dateTime,
            specialRequest,
        });

        return res.status(201).json({
            success: true,
            message: "Booking saved successfully",
            booking,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};