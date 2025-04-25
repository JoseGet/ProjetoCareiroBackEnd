// src/index.ts
import express from 'express';
import prisma from './dbconn';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Executa uma consulta bruta para pegar o horário atual
    const result = await prisma.$queryRawUnsafe(`SELECT NOW()`) as { now: Date }[];
    res.send(`Hora atual no banco: ${result[0].now}`);
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
    res.status(500).send('Erro ao conectar ao banco de dados');
  }
});

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
