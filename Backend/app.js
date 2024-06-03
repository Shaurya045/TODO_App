import express from "express";
import { config } from "dotenv";
import userRoute from "./routes/user.route.js";
import taskRoute from "./routes/task.route.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors";

export const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// using route
app.use("/api/v1/users", userRoute);
app.use("/api/v1/tasks", taskRoute);

config({
  path: "./.env",
});

app.get("/", (req, res) => {
  res.send("Nice Working");
});

// using error middleware
app.use(errorMiddleware);
