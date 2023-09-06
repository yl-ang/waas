import { Router } from 'express';

import HttpStatusCode from '../constants/httpStatusCode';

const router = Router();

router.get('/', (req, res, next) => {
  res
    .status(HttpStatusCode.OK)
    .send('<h1 style="color: #407BFF;">Loyalty Service</h1>');
});

export default router;
