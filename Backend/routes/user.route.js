import express from "express";
import {
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/user.controllers.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();


router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", isAuthenticated, getMyProfile)

export default router;
