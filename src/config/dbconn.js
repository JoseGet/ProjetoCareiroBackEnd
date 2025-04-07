import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',          // exemplo: 'postgres'
  host: 'localhost',            // ou IP do servidor
  database: 'Test-Agriconnect',    // nome do seu banco
  password: '237171',
  port: 5432,                   // porta padrão do PostgreSQL
});

export default pool;