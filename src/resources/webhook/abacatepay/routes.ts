import { Router } from "express";
import { webhookPixPago } from "./controllers";

const router = Router();

router.post("/pix-pago", webhookPixPago);

export default router;