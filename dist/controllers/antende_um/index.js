"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAtendeUm = void 0;
const dbConfig_1 = __importDefault(require("../../config/dbConfig"));
const getAtendeUm = async (req, res) => {
    try {
        const dados = await dbConfig_1.default.atende_um.findMany({
            include: {
                pedido: true, // Certifique-se de que o relacionamento "pedido" existe no schema.prisma
                vendedor: true // Certifique-se de que o relacionamento "vendedor" existe no schema.prisma
            }
        });
        console.log("Dados de atende_um recuperados com sucesso");
        res.status(200).json(dados);
    }
    catch (error) {
        console.error('Erro ao buscar dados de atende_um:', error);
        res.status(500).json({ error: 'Erro ao buscar dados de atende_um' });
    }
};
exports.getAtendeUm = getAtendeUm;
exports.default = {
    getAtendeUm: exports.getAtendeUm,
};
