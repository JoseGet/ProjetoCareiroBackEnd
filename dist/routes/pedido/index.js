"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pedido_1 = require("../../controllers/pedido");
const router = express_1.default.Router();
router.get('/', pedido_1.getPedidos);
router.get('/:id', pedido_1.getPedidoById);
router.post('/cadastro', pedido_1.createPedido);
router.put('/:id', pedido_1.updatePedido);
router.delete('/:id', pedido_1.deletePedido);
exports.default = router;
