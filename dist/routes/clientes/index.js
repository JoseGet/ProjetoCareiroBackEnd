"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_1 = require("../../controllers/cliente");
const router = express_1.default.Router();
router.get('/', cliente_1.listarClientes);
router.get('/:cpf', cliente_1.listarClientesPorId);
router.post('/', cliente_1.criarCliente);
router.put('/:cpf', cliente_1.atualizarCliente);
router.delete('/:cpf', cliente_1.deletarCliente);
exports.default = router;
