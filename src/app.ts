import express from 'express';
import clienteRoutes from './routes/clientes/clientesRoute'; // Importando as rotas de clientes
import associacaoRoutes from './routes/associacao'; // Importando as rotas de associacao */
import atendeUmRoutes from './routes/atende_um'; // Importando as rotas de associado
import feiraRoutes from './routes/feira/feiraRoute'; // Importando as rotas de feira
import pedidoRoutes from './routes/pedido'; // Importando as rotas de pedido
import produtoRoutes from './routes/produto'; // Importando as rotas de produto
import vendedorRoutes from './routes/vendedor'; // Importando as rotas de vendedor
import mercadopagoRoutes from './routes/mercadoPago'; // Importando as rotas de mercadoPago
import authRoutes from './routes/authRoutes'; // Importando as rotas de autenticação
import { setupSwagger } from './swagger/swagger';
import { autenticarToken } from './controllers/auth/authMiddleware';
import cors from 'cors';

const app = express();
app.use(express.json());
const port = 3000;

app.use(cors()); // Habilitando CORS para todas as rotas
// Rota principal para verificar conexão com o banco
/* app.get('/', async (req, res) => {
  try {
    const result = await prisma.$queryRawUnsafe<{ now: string }[]>(`SELECT NOW()`);
    res.send(`Hora atual no banco: ${result[0].now}`);
  } catch (err) {
    console.error('Erro ao conectar ao banco:', err);
    res.status(500).send('Erro ao conectar ao banco de dados');
  }
});
app.get('/tables', async (req, res) => {
  try {
    const tables = await prisma.$queryRawUnsafe<{ table_name: string }[]>(
      `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`
    );
    res.json(tables.map((table) => table.table_name));
  } catch (err) {
    console.error('Erro ao listar tabelas:', err);
    res.status(500).send('Erro ao listar tabelas do banco de dados');
  }
}); */
app.get('/protegido', autenticarToken, (req, res) => { 
  res.send(`Rota protegida, você está autenticado!, acesso permitido ${req.user.email}`);
});
// Configurando as rotas de clientes
app.use('/clientes', clienteRoutes);
console.log('[INFO] Rotas de cliente carregadas');
app.use('/associacao', associacaoRoutes); // Configurando as rotas de associacao
console.log('[INFO] Rotas de atende um carregadas');
app.use('/atendeum', atendeUmRoutes); // Configurando as rotas de associado
console.log('[INFO] Rotas de associado carregadas');
app.use('/pedido', pedidoRoutes); // Configurando as rotas de clienteVendedor
console.log('[INFO] Rotas de pedidos carregadas');
app.use('/feira', feiraRoutes); // Configurando as rotas de feira
console.log('[INFO] Rotas de feira carregadas');
app.use('/produto', produtoRoutes); // Configurando as rotas de produto
console.log('[INFO] Rotas de produto carregadas');
app.use('/vendedor', vendedorRoutes); // Configurando as rotas de vendedor
console.log('[INFO] Rotas de vendedor carregadas');
app.use('/mercadopago', mercadopagoRoutes); // Configurando as rotas de mercadoPago
console.log('[INFO] Rotas de mercadoPago carregadas');
setupSwagger(app); // Configurando o Swagger
// Configurando as rotas de autenticação
app.use('/auth', authRoutes); // Configurando as rotas de autenticação
console.log('[INFO] Rotas de autenticação carregadas');
// Iniciando o servido

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
