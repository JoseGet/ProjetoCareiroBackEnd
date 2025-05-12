"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarAssociacao = exports.atualizarAssociacao = exports.criarAssociacao = exports.getAssociacaoById = exports.getAssociacoes = void 0;
const dbConfig_1 = __importDefault(require("../../config/dbConfig"));
const getAssociacoes = async (req, res) => {
    try {
        console.log("aqui no associacao");
        const associacoes = await dbConfig_1.default.associacao.findMany();
        res.json(associacoes);
    }
    catch (error) {
        console.error('Erro ao buscar associações:', error);
        res.status(500).send('Erro ao buscar associações');
    }
};
exports.getAssociacoes = getAssociacoes;
const getAssociacaoById = async (req, res) => {
    const { id } = req.params;
    try {
        const associacao = await dbConfig_1.default.associacao.findUnique({
            where: { id_associacao: id },
        });
        if (!associacao) {
            res.status(404).send('Associação não encontrada');
            return;
        }
        res.json(associacao);
    }
    catch (error) {
        console.error('Erro ao buscar associação:', error);
        res.status(500).send('Erro ao buscar associação');
    }
};
exports.getAssociacaoById = getAssociacaoById;
const criarAssociacao = async (req, res) => {
    const { id_associacao, nome, descricao, vendedor } = req.body;
    try {
        const novaAssociacao = await dbConfig_1.default.associacao.create({
            data: { id_associacao, nome, descricao, vendedor },
        });
        res.status(201).json(novaAssociacao);
    }
    catch (error) {
        console.error('Erro ao criar associação:', error);
        res.status(500).send('Erro ao criar associação');
    }
};
exports.criarAssociacao = criarAssociacao;
const atualizarAssociacao = async (req, res) => {
    const { id } = req.params;
    const { id_associacao, nome, descricao } = req.body;
    try {
        const associacaoAtualizada = await dbConfig_1.default.associacao.update({
            where: { id_associacao: id },
            data: { id_associacao, nome, descricao },
        });
        res.json(associacaoAtualizada);
    }
    catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send('Associação não encontrada');
        }
        else {
            console.error('Erro ao atualizar associação:', error);
            res.status(500).send('Erro ao atualizar associação');
        }
    }
};
exports.atualizarAssociacao = atualizarAssociacao;
const deletarAssociacao = async (req, res) => {
    const { id } = req.params;
    try {
        const associacaoRemovida = await dbConfig_1.default.associacao.delete({
            where: { id_associacao: id },
        });
        res.json(associacaoRemovida);
    }
    catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send('Associação não encontrada');
        }
        else {
            console.error('Erro ao deletar associação:', error);
            res.status(500).send('Erro ao deletar associação');
        }
    }
};
exports.deletarAssociacao = deletarAssociacao;
exports.default = {
    getAssociacoes: exports.getAssociacoes,
    getAssociacaoById: exports.getAssociacaoById,
    criarAssociacao: exports.criarAssociacao,
    atualizarAssociacao: exports.atualizarAssociacao,
    deletarAssociacao: exports.deletarAssociacao,
};
