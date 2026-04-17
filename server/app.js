import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

// ✅ allowed origins
const allowedOrigins = [
    "http://localhost:5173",
    "https://spa-home.vercel.app",
    "https://spa-home.vercel.app/",
    process.env.FRONTEND_URL?.replace(/\/$/, ""),
].filter(Boolean);

app.use(
    cors({
        origin: function (origin, callback) {
            // allow requests with no origin (Postman, mobile apps)
            if (!origin) return callback(null, true);

            const isAllowed = allowedOrigins.includes(origin) || 
                              origin.includes("spa-home.vercel.app") || 
                              origin.includes("localhost");

            if (isAllowed) {
                callback(null, true);
            } else {
                console.error(`CORS Blocked for origin: ${origin}`);
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