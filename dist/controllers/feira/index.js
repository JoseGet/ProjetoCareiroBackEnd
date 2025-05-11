"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeira = exports.updateFeira = exports.createFeira = exports.getFeiraById = exports.getFeiras = void 0;
const dbConfig_1 = __importDefault(require("../../config/dbConfig"));
// Buscar todas as feiras
const getFeiras = async (req, res) => {
    try {
        const feiras = await dbConfig_1.default.feira.findMany();
        console.log("Feiras entrando no banco de dados");
        res.json(feiras);
    }
    catch (error) {
        console.error('Erro ao buscar feiras:', error);
        res.status(500).send('Erro ao buscar feiras');
    }
};
exports.getFeiras = getFeiras;
// Buscar feira por ID
const getFeiraById = async (req, res) => {
    const { id } = req.params;
    try {
        const feira = await dbConfig_1.default.feira.findUnique({
            where: { id_feira: parseInt(id) },
        });
        if (!feira) {
            res.status(404).send('Feira não encontrada');
            return;
        }
        res.json(feira);
    }
    catch (error) {
        console.error('Erro ao buscar feira:', error);
        res.status(500).send('Erro ao buscar feira');
    }
};
exports.getFeiraById = getFeiraById;
// Criar nova feira
const createFeira = async (req, res) => {
    const { nome, endereco } = req.body;
    try {
        const novaFeira = await dbConfig_1.default.feira.create({
            data: { nome, endereco },
        });
        res.status(201).json(novaFeira);
    }
    catch (error) {
        console.error('Erro ao criar feira:', error);
        res.status(500).send('Erro ao criar feira');
    }
};
exports.createFeira = createFeira;
// Atualizar feira
const updateFeira = async (req, res) => {
    const { id_feira, nome, endereco } = req.body;
    try {
        const feiraAtualizada = await dbConfig_1.default.feira.update({
            where: { id_feira: parseInt(id_feira) },
            data: { nome, endereco },
        });
        res.json(feiraAtualizada);
    }
    catch (error) {
        console.error('Erro ao atualizar feira:', error);
        res.status(500).send('Erro ao atualizar feira');
    }
};
exports.updateFeira = updateFeira;
// Deletar feira
const deleteFeira = async (req, res) => {
    const { id } = req.params;
    try {
        const feiraDeletada = await dbConfig_1.default.feira.delete({
            where: { id_feira: parseInt(id) },
        });
        res.json(feiraDeletada);
    }
    catch (error) {
        console.error('Erro ao deletar feira:', error);
        res.status(500).send('Erro ao deletar feira');
    }
};
exports.deleteFeira = deleteFeira;
exports.default = {
    getFeiras: exports.getFeiras,
    getFeiraById: exports.getFeiraById,
    createFeira: exports.createFeira,
    updateFeira: exports.updateFeira,
    deleteFeira: exports.deleteFeira,
};
