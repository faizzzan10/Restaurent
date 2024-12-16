import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./error.js";
import reservationRouter from "./reservationRoute.js";
import { dbConnection } from "./dbConnection.js";

// Initialize the express app
const app = express();

// Load environment variables from config.env
dotenv.config({ path: "./config/config.env" });

// Connect to the database
dbConnection();

// Enable CORS with specific settings
app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend origin
    methods: ["POST"], // Allowed methods
    credentials: true, // Allows cookies or authentication headers
    allowedHeaders: ["Content-Type", "Authorization"], // Headers allowed in the request
  })
);

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes
app.use("/api/v1/reservation", reservationRouter);

// A test route to ensure server is running
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

// Error handling middleware (should be the last middleware)
app.use(errorMiddleware);

// Export the app for server startup
export default app;
