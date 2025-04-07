import express from 'express';
import pool from './dbconn.js'; // Importando a conexão com o banco de dados

const app = express();

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Hora atual no banco: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao conectar ao banco de dados');
  }
});
/* const res = await pool.query(`
  SELECT table_name 
  FROM information_schema.tables 
  WHERE table_schema = 'public';
`);
console.log('Tabelas no banco:', res.rows); */

app.listen(3000);
console.log('Server está rodando em http://localhost:3000');
