import { Router } from "express";
import { getChapters } from "../controllers/chapter";

export const router = Router();

router.get("/chapters" , getChapters);

