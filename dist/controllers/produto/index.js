"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduto = exports.updateProduto = exports.createProduto = exports.getProdutoById = exports.getProdutos = void 0;
const dbConfig_1 = __importDefault(require("../../config/dbConfig")); // Importe o cliente Prisma corretamente
const getProdutos = async (req, res) => {
    try {
        // Utilizando o Prisma com a tipagem explícita
        const result = await dbConfig_1.default.produto.findMany();
        console.log("aqui no produtos");
        res.json(result);
    }
    catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send('Erro ao buscar produtos');
    }
};
exports.getProdutos = getProdutos;
const getProdutoById = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        // Tipando a resposta como 'produto'
        const result = await dbConfig_1.default.produto.findUnique({
            where: {
                id_produto: id.toString(),
            },
        });
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).send('Produto não encontrado');
        }
    }
    catch (error) {
        console.error('Erro ao buscar produto:', error);
        res.status(500).send('Erro ao buscar produto');
    }
};
exports.getProdutoById = getProdutoById;
const createProduto = async (req, res) => {
    const { nome, categoria, preco, qntd, vendedorId, pedidoId } = req.body;
    try {
        const result = await dbConfig_1.default.produto.create({
            data: {
                nome,
                categoria,
                preco,
                qntd, // Provide a default value or retrieve it from req.body
                data_coleta: new Date(), // Provide a default value or retrieve it from req.body
                vendedor: {
                    connect: { id_vendedor: vendedorId },
                },
                pedido: {
                    connect: { pedido_id: pedidoId },
                },
            },
        });
        res.status(201).json(result);
    }
    catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).send('Erro ao criar produto');
    }
};
exports.createProduto = createProduto;
const updateProduto = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { nome, categoria, unidade, preco } = req.body;
    try {
        const result = await dbConfig_1.default.produto.update({
            where: {
                id_produto: id.toString(),
            },
            data: {
                nome,
                categoria,
                preco,
            },
        });
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).send('Produto não encontrado');
        }
    }
    catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).send('Erro ao atualizar produto');
    }
};
exports.updateProduto = updateProduto;
const deleteProduto = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const result = await dbConfig_1.default.produto.delete({
            where: {
                id_produto: id.toString(),
            },
        });
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).send('Produto não encontrado');
        }
    }
    catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).send('Erro ao deletar produto');
    }
};
exports.deleteProduto = deleteProduto;
exports.default = {
    getProdutos: exports.getProdutos,
    getProdutoById: exports.getProdutoById,
    createProduto: exports.createProduto,
    updateProduto: exports.updateProduto,
    deleteProduto: exports.deleteProduto,
};
