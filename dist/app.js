"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const clientes_1 = __importDefault(require("./routes/clientes")); // Importando as rotas de clientes
const associacao_1 = __importDefault(require("./routes/associacao")); // Importando as rotas de associacao */
const atende_um_1 = __importDefault(require("./routes/atende_um")); // Importando as rotas de associado
const feira_1 = __importDefault(require("./routes/feira")); // Importando as rotas de feira
const pedido_1 = __importDefault(require("./routes/pedido")); // Importando as rotas de pedido
const produto_1 = __importDefault(require("./routes/produto")); // Importando as rotas de produto
const vendedor_1 = __importDefault(require("./routes/vendedor")); // Importando as rotas de vendedor
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Rota principal para verificar conexão com o banco
app.get('/', async (req, res) => {
    try {
        const result = await dbConfig_1.default.$queryRawUnsafe(`SELECT NOW()`);
        res.send(`Hora atual no banco: ${result[0].now}`);
    }
    catch (err) {
        console.error('Erro ao conectar ao banco:', err);
        res.status(500).send('Erro ao conectar ao banco de dados');
    }
});
app.get('/tables', async (req, res) => {
    try {
        const tables = await dbConfig_1.default.$queryRawUnsafe(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`);
        res.json(tables.map((table) => table.table_name));
    }
    catch (err) {
        console.error('Erro ao listar tabelas:', err);
        res.status(500).send('Erro ao listar tabelas do banco de dados');
    }
});
// Configurando as rotas de clientes
app.use('/clientes', clientes_1.default);
console.log('[INFO] Rotas de cliente carregadas');
app.use('/associacao', associacao_1.default); // Configurando as rotas de associacao
console.log('[INFO] Rotas de atende um carregadas');
app.use('/atendeum', atende_um_1.default); // Configurando as rotas de associado
console.log('[INFO] Rotas de associado carregadas');
app.use('/pedido', pedido_1.default); // Configurando as rotas de clienteVendedor
console.log('[INFO] Rotas de pedidos carregadas');
app.use('/feira', feira_1.default); // Configurando as rotas de feira
console.log('[INFO] Rotas de feira carregadas');
app.use('/produto', produto_1.default); // Configurando as rotas de produto
console.log('[INFO] Rotas de produto carregadas');
app.use('/vendedor', vendedor_1.default); // Configurando as rotas de vendedor
console.log('[INFO] Rotas de vendedor carregadas');
// Iniciando o servido
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
});
