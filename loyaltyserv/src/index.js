import express from 'express';
import cors from 'cors';

import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 8000;
const allowedOrigins = [
  'http://alb-peerprep-2137662650.ap-southeast-1.elb.amazonaws.com',
  'http://localhost:3000'
];

// only allows requests coming in from allowed origins
app.use(
  cors({
    credentials: true,
    // origin: true,
    origin: function (origin, callback) {
      console.log(origin);
      console.log({ origin });
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);

app.use(express.json());

app.get('/service-status', (_, res) => {
  res.json({
    loyalty_service: 'OK'
  });
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Loyalty Service started on port ${port}`);
});
