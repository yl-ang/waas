import { Router } from 'express';

import HttpStatusCode from '../constants/httpStatusCode';
import pool from '../db';

const router = Router();

router.get('/:userId', (req, res, _) => {
  const userId = parseInt(req.params.userId);
  pool.query(
    'SELECT * FROM loyalty WHERE user_id = $1',
    [userId],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(HttpStatusCode.OK).json(results.rows);
    }
  );
  pool.end();
});

router.post('/', (req, res, _) => {
  const userId = parseInt(req.body.userId);
  pool.query(
    'INSERT INTO loyalty (user_id, points) VALUES ($1, 0)',
    [userId],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(HttpStatusCode.CREATED).json(results.rows);
    }
  );
});

router.put('/:userId', (req, res, _) => {
  const userId = parseInt(req.params.userId);
  const points = parseInt(req.body.points);
  pool.query(
    'UPDATE loyalty SET points = points + $1 WHERE user_id = $2',
    [points, userId],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(HttpStatusCode.CREATED).json(results.rows);
    }
  );
});

export default router;
