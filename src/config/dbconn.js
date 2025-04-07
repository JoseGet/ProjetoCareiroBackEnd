import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,          // exemplo: 'postgres'
  host: process.env.DB_HOST,            // ou IP do servidor
  database: process.env.DB_NAME,    // nome do seu banco
  password: process.env.DB_PASSWORD, // senha do banco
  port: process.env.DB_PORT,                   // porta padrão do PostgreSQL
});

export default pool;