import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

// ✅ allowed origins
const allowedOrigins = [
    "http://localhost:5173",
    "https://spa-home.vercel.app"
];

app.use(
    cors({
        origin: function (origin, callback) {
            // allow requests with no origin (Postman, mobile apps)
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
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