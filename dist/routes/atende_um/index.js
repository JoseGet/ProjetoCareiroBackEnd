"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const antende_um_1 = require("../../controllers/antende_um");
const router = express_1.default.Router();
router.get('/', antende_um_1.getAtendeUm);
exports.default = router;
