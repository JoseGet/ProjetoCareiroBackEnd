import express from "express";
import isAuth from '../../shared/middlewares/isAuth';
import {criarPagamentoPix, listarPagamentoPix} from "./controllers";

const router = express.Router();

router.get("/payment/done/pix", listarPagamentoPix)

router.post("/payment/pix", isAuth, criarPagamentoPix);

export default router;