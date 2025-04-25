import express from 'express';
import {
  listarClientes,
  listarClientesPorId,
  criarCliente,
  atualizarCliente,
  deletarCliente,
} from '../../controllers/cliente';

const router = express.Router();

router.get('/', listarClientes);
router.get('/:cpf', listarClientesPorId);
router.post('/', criarCliente);
router.put('/:cpf', atualizarCliente);
router.delete('/:cpf', deletarCliente);

export default router;