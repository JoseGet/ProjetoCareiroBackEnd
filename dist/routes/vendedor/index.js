"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vendedor_1 = require("../../controllers/vendedor");
const router = express_1.default.Router();
router.get('/', vendedor_1.getVendedores);
router.get('/:id', vendedor_1.getVendedorById);
router.post('/cadastro', vendedor_1.createVendedor);
router.put('/:id', vendedor_1.updateVendedor);
router.delete('/:id', vendedor_1.deleteVendedor);
exports.default = router;
