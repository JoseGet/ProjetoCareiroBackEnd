import express from 'express';
import { getProdutos,
    getProdutoById,
    createProduto,
    updateProduto,
    deleteProduto } from '../../controllers/produto';

const router = express.Router();

router.get('/', getProdutos);
router.get('/:id', getProdutoById);
router.post('/cadastro', createProduto);
router.put('/:id', updateProduto);
router.delete('/:id', deleteProduto);

export default router;
