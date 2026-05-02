import express from "express";
import isAuth from '../../shared/middlewares/isAuth';
import criarPagamentoPix from "./controllers";

const router = express.Router();

router.post("/payment/pix", criarPagamentoPix);

export default router;