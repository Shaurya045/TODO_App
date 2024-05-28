import express from "express";
import { createUsers, getAllUsers, getUserById } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/new", createUsers);

router.get("/all", getAllUsers);

router.get("/userid/:id", getUserById);

export default router;
