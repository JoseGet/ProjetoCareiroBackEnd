"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feira_1 = require("../../controllers/feira");
const router = express_1.default.Router();
router.get('/', feira_1.getFeiras);
router.get('/:id', feira_1.getFeiraById);
router.post('/cadastro', feira_1.createFeira);
router.put('/:id', feira_1.updateFeira);
router.delete('/:id', feira_1.deleteFeira);
exports.default = router;
