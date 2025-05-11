"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const dbConfig_1 = __importDefault(require("./dbConfig"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', async (req, res) => {
    try {
        // Executa uma consulta bruta para pegar o horário atual
        const result = await dbConfig_1.default.$queryRawUnsafe(`SELECT NOW()`);
        res.send(`Hora atual no banco: ${result[0].now}`);
    }
    catch (error) {
        console.error('Erro ao conectar ao banco:', error);
        res.status(500).send('Erro ao conectar ao banco de dados');
    }
});
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
});
