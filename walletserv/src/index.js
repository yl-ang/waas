import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

const walletObjects = [{
  "user_id": 123456,          // Numeric: User ID
  "balance": 1000.50,        // Numeric: Balance
  "currency": "USD",         // String: Currency
  "loyalty_points": 250,     // Numeric: Loyalty Points
  "transaction_limit": 500   // Numeric: Transaction Limit
}];

// CRUD
app.post("/wallet", (req, res) => {

  const {user_id, currency, transaction_limit} = req.body;

  if (!user_id || !currency || !transaction_limit) {
    return res.status(400).json({error: "Missing required fields"});
  }

  const newWallet = {user_id: user_id, balance: 0, currency: currency, loyalty_points: 0, transaction_limit: transaction_limit};

  walletObjects.concat(newWallet);
  res.status(201).json(newWallet);
})

app.listen(3000, () =>
  console.log('Wallet backend listening on port 3000'),
);