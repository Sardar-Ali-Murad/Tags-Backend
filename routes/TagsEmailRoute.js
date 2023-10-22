import express from "express";
let router = express.Router();
import { createEmail } from "../controllers/TagsEmailController.js";

router.route("/").post(createEmail);

export default router;
