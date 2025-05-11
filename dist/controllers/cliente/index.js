"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarCliente = exports.atualizarCliente = exports.criarCliente = exports.listarClientesPorId = exports.listarClientes = void 0;
const dbConfig_1 = __importDefault(require("../../config/dbConfig")); // PrismaClient instanciado
const listarClientes = async (req, res) => {
    try {
        console.log("aqui no cliente");
        const clientes = await dbConfig_1.default.cliente.findMany();
        res.json(clientes);
    }
    catch (error) {
        console.error('Erro ao buscar clientes:', error);
        res.status(500).send('Erro ao buscar clientes');
    }
};
exports.listarClientes = listarClientes;
const listarClientesPorId = async (req, res) => {
    const { cpf } = req.params;
    try {
        const clienteEncontrado = await dbConfig_1.default.cliente.findUnique({
            where: { cpf },
        });
        if (!clienteEncontrado) {
            res.status(404).send('Cliente não encontrado');
            return;
        }
        res.json(clienteEncontrado);
    }
    catch (error) {
        console.error('Erro ao buscar cliente:', error);
        res.status(500).send('Erro ao buscar cliente');
    }
};
exports.listarClientesPorId = listarClientesPorId;
const criarCliente = async (req, res) => {
    const { cpf, nome, email, telefone, senha } = req.body;
    try {
        const novoCliente = await dbConfig_1.default.cliente.create({
            data: { cpf, nome, email, telefone, senha },
        });
        res.status(201).json(novoCliente);
    }
    catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).send('Erro ao criar cliente');
    }
};
exports.criarCliente = criarCliente;
const atualizarCliente = async (req, res) => {
    const { cpf } = req.params;
    const { nome, email, telefone, senha } = req.body;
    try {
        const clienteAtualizado = await dbConfig_1.default.cliente.update({
            where: { cpf },
            data: { nome, email, telefone, senha },
        });
        res.json(clienteAtualizado);
    }
    catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send('Cliente não encontrado');
        }
        else {
            console.error('Erro ao atualizar cliente:', error);
            res.status(500).send('Erro ao atualizar cliente');
        }
    }
};
exports.atualizarCliente = atualizarCliente;
const deletarCliente = async (req, res) => {
    const { cpf } = req.params;
    try {
        const clienteDeletado = await dbConfig_1.default.cliente.delete({
            where: { cpf },
        });
        res.json(clienteDeletado);
    }
    catch (error) {
        if (error.code === 'P2025') {
            res.status(404).send('Cliente não encontrado');
        }
        else {
            console.error('Erro ao deletar cliente:', error);
            res.status(500).send('Erro ao deletar cliente');
        }
    }
};
exports.deletarCliente = deletarCliente;
exports.default = {
    listarClientes: exports.listarClientes,
    listarClientesPorId: exports.listarClientesPorId,
    criarCliente: exports.criarCliente,
    atualizarCliente: exports.atualizarCliente,
    deletarCliente: exports.deletarCliente,
};
