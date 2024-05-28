import express from "express";
import { config } from "dotenv";
import userRoute from "./routes/user.route.js";

export const app = express();

// middleware
app.use(express.json());
app.use("/user", userRoute);

config({
  path: "./.env",
});

app.get("/", (req, res) => {
  res.send("Nice Working");
});
