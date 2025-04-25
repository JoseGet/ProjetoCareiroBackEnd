import express from 'express';
import {getAssociacoes,
    getAssociacaoById,
    criarAssociacao,
    atualizarAssociacao,
    deletarAssociacao,} from '../../controllers/associacao';

const router = express.Router();

router.get('/', getAssociacoes);
router.get('/:id', getAssociacaoById);
router.put('/:id', atualizarAssociacao);
router.delete('/:id', deletarAssociacao);
router.post('/cadastro', criarAssociacao);

export default router;
