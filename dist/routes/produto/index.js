"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produto_1 = require("../../controllers/produto");
const router = express_1.default.Router();
router.get('/', produto_1.getProdutos);
router.get('/:id', produto_1.getProdutoById);
router.post('/cadastro', produto_1.createProduto);
router.put('/:id', produto_1.updateProduto);
router.delete('/:id', produto_1.deleteProduto);
exports.default = router;
