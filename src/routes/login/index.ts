import { Router } from "express";
import { login } from "../../controllers/auth/authController";

const router = Router();

router.post("/login", login);

export default router;
// Compare this snippet from src/routes/feira/index.ts: