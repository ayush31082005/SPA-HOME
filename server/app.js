import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Spa Booking API Running...");
});

app.use("/api/bookings", bookingRoutes);

export default app;