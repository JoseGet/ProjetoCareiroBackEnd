"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVendedor = exports.updateVendedor = exports.createVendedor = exports.getVendedorById = exports.getVendedores = void 0;
const dbConfig_1 = __importDefault(require("../../config/dbConfig"));
// Função para obter todos os vendedores
const getVendedores = async (req, res) => {
    try {
        const result = await dbConfig_1.default.vendedor.findMany();
        console.log("aqui no vendedores");
        res.json(result);
    }
    catch (error) {
        console.error('Erro ao buscar vendedores:', error);
        res.status(500).send('Erro ao buscar vendedores');
    }
};
exports.getVendedores = getVendedores;
// Função para obter um vendedor por ID
const getVendedorById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await dbConfig_1.default.vendedor.findUnique({
            where: { id_vendedor: id },
        });
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).send('Vendedor não encontrado');
        }
    }
    catch (error) {
        console.error('Erro ao buscar vendedor:', error);
        res.status(500).send('Erro ao buscar vendedor');
    }
};
exports.getVendedorById = getVendedorById;
// Função para criar um novo vendedor
const createVendedor = async (req, res) => {
    const { nome, tipo_vendedor, telefone, endereco_venda, tipo_documento, numero_documento, fk_associacao, senha } = req.body;
    try {
        const result = await dbConfig_1.default.vendedor.create({
            data: {
                id_vendedor: crypto.randomUUID(),
                nome,
                tipo_vendedor,
                telefone,
                endereco_venda,
                tipo_documento,
                numero_documento: numero_documento || null,
                fk_associacao: fk_associacao || null,
                senha
            },
        });
        res.status(201).json(result);
    }
    catch (error) {
        console.error('Erro ao criar vendedor:', error);
        res.status(500).send('Erro ao criar vendedor');
    }
};
exports.createVendedor = createVendedor;
// Função para atualizar um vendedor
const updateVendedor = async (req, res) => {
    const id = req.params.id;
    const { nome, tipo_vendedor, telefone, endereco_venda, tipo_documento, numero_documento, fk_associacao, senha } = req.body;
    try {
        const result = await dbConfig_1.default.vendedor.update({
            where: { id_vendedor: id },
            data: {
                nome,
                tipo_vendedor,
                telefone,
                endereco_venda,
                tipo_documento,
                numero_documento,
                fk_associacao,
                senha
            },
        });
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).send('Vendedor não encontrado');
        }
    }
    catch (error) {
        console.error('Erro ao atualizar vendedor:', error);
        res.status(500).send('Erro ao atualizar vendedor');
    }
};
exports.updateVendedor = updateVendedor;
// Função para deletar um vendedor
const deleteVendedor = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await dbConfig_1.default.vendedor.delete({
            where: { id_vendedor: id },
        });
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).send('Vendedor não encontrado');
        }
    }
    catch (error) {
        console.error('Erro ao deletar vendedor:', error);
        res.status(500).send('Erro ao deletar vendedor');
    }
};
exports.deleteVendedor = deleteVendedor;
exports.default = {
    getVendedores: exports.getVendedores,
    getVendedorById: exports.getVendedorById,
    createVendedor: exports.createVendedor,
    updateVendedor: exports.updateVendedor,
    deleteVendedor: exports.deleteVendedor,
};
