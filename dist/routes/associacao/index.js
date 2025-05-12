"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const associacao_1 = require("../../controllers/associacao");
const router = express_1.default.Router();
router.get('/', associacao_1.getAssociacoes);
router.get('/:id', associacao_1.getAssociacaoById);
router.put('/:id', associacao_1.atualizarAssociacao);
router.delete('/:id', associacao_1.deletarAssociacao);
router.post('/cadastro', associacao_1.criarAssociacao);
exports.default = router;
