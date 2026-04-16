import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://spa-home.vercel.app/",
        ],
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