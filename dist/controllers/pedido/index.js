"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePedido = exports.updatePedido = exports.createPedido = exports.getPedidoById = exports.getPedidos = void 0;
const dbConfig_1 = __importDefault(require("../../config/dbConfig"));
// GET: Buscar todos os pedidos
const getPedidos = async (req, res) => {
    try {
        console.log("aqui no pedido");
        const pedidos = await dbConfig_1.default.pedido.findMany({
            include: {
                cliente: true,
                feira: true,
                atende_um: true,
                produto: true
            }
        });
        res.json(pedidos);
    }
    catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.status(500).send('Erro ao buscar pedidos');
    }
};
exports.getPedidos = getPedidos;
// GET: Buscar pedido por ID
const getPedidoById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const pedido = await dbConfig_1.default.pedido.findUnique({
            where: { pedido_id: id },
            include: {
                cliente: true,
                feira: true,
                atende_um: true,
                produto: true
            }
        });
        if (!pedido) {
            res.status(404).send('Pedido não encontrado');
            return;
        }
        res.json(pedido);
    }
    catch (error) {
        console.error('Erro ao buscar pedido:', error);
        res.status(500).send('Erro ao buscar pedido');
    }
};
exports.getPedidoById = getPedidoById;
// POST: Criar novo pedido com produtos
const createPedido = async (req, res) => {
    const { data_pedido, fk_feira, fk_cliente, produtos } = req.body;
    try {
        const novoPedido = await dbConfig_1.default.pedido.create({
            data: {
                data_pedido: new Date(data_pedido),
                fk_feira,
                fk_cliente,
                produto: {
                    connect: produtos.map((produtoId) => ({ id_produto: produtoId }))
                }
            },
            include: {
                produto: true
            }
        });
        res.status(201).json(novoPedido);
    }
    catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).send('Erro ao criar pedido');
    }
};
exports.createPedido = createPedido;
// PUT: Atualizar pedido
const updatePedido = async (req, res) => {
    const id = parseInt(req.params.id);
    const { data_pedido, fk_feira, fk_cliente, produtos } = req.body;
    try {
        const pedidoAtualizado = await dbConfig_1.default.pedido.update({
            where: { pedido_id: id },
            data: {
                data_pedido: new Date(data_pedido),
                fk_feira,
                fk_cliente,
                produto: {
                    set: produtos.map((produtoId) => ({ id_produto: produtoId }))
                }
            },
            include: {
                produto: true
            }
        });
        res.json(pedidoAtualizado);
    }
    catch (error) {
        console.error('Erro ao atualizar pedido:', error);
        res.status(500).send('Erro ao atualizar pedido');
    }
};
exports.updatePedido = updatePedido;
// DELETE: Deletar pedido
const deletePedido = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const pedidoDeletado = await dbConfig_1.default.pedido.delete({
            where: { pedido_id: id }
        });
        res.json(pedidoDeletado);
    }
    catch (error) {
        console.error('Erro ao deletar pedido:', error);
        res.status(500).send('Erro ao deletar pedido');
    }
};
exports.deletePedido = deletePedido;
exports.default = {
    getPedidos: exports.getPedidos,
    getPedidoById: exports.getPedidoById,
    createPedido: exports.createPedido,
    updatePedido: exports.updatePedido,
    deletePedido: exports.deletePedido
};
