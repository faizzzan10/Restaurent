import express from "express";
import send_reservation from "./reservation2.js";

const router = express.Router();

router.post("/send", send_reservation);

export default router;