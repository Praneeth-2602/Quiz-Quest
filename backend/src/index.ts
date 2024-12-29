import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
// Load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req: Request, res: Response) => {
  res.send("Quiz Quest Backend is running!");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
