import { Router } from 'express';

import { createLoyalty, getLoyalty, updateLoyalty } from '../controllers';

const router = Router();

router.post('/', createLoyalty);

router.route('/:userId').get(getLoyalty).put(updateLoyalty);

export default router;
