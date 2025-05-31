import criarPagamento from "../../controllers/mercadoPago";
import express from "express";

const router = express.Router();
router.post("/criar-pagamento", criarPagamento);
