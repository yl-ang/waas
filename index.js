import express from 'express';

const app = express();

app.listen(3000, () =>
  console.log('Wallet backend listening on port 3000'),
);