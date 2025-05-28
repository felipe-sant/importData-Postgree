import { Router } from 'express';
import CidadesController from '../controllers/cidades.controller';

const router = Router();
const cidadesController = new CidadesController();

router.get('/cidades', cidadesController.getAll.bind(cidadesController));
router.get('/cidades/:id', cidadesController.readInsidence.bind(cidadesController));

export default router;