import express from 'express';
import { getAtendeUm } from '../../controllers/antende_um';

const router = express.Router();

router.get('/', getAtendeUm);

export default router;