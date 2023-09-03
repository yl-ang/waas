import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

const walletObjects = [{
  "user_id": 123456,          // Numeric: User ID
  "balance": 1000.50,        // Numeric: Balance
  "currency": "USD",         // String: Currency
  "loyalty_points": 250,     // Numeric: Loyalty Points
  "transaction_limit": 500   // Numeric: Transaction Limit
}];

app.post("/wallet", (req, res) => {
  const { user_id, currency, transaction_limit } = req.body;

  if (!user_id || !currency || !transaction_limit) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newWallet = {
    user_id,
    balance: 0,
    currency,
    loyalty_points: 0,
    transaction_limit,
  };

  walletObjects.push(newWallet);

  res.status(201).json(newWallet);
});

app.listen(3000, () =>
  console.log('Wallet backend listening on port 3000'),
);