import express from 'express';
import { getFeiras, getFeiraById, createFeira, updateFeira, deleteFeira } from '../../controllers/feira';

const router = express.Router();

router.get('/', getFeiras);
router.get('/:id', getFeiraById);
router.post('/', createFeira);
router.put('/:id', updateFeira);
router.delete('/:id', deleteFeira);

export default router;
