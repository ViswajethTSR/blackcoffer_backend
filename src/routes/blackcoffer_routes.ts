import { Router } from 'express';
import { getAllBlackcofferPaged } from '../controllers/blackcoffer_controller';

const router: Router = Router();

router.get('/fetch_blackcoffer', getAllBlackcofferPaged);

export default router;
