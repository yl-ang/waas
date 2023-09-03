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

app.get("/wallet/:id", (req, res) => {
  
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({error: "Missing user id field"});
  }

  const foundWallet = walletObjects.find(wallet => wallet.user_id === parseInt(id));

  if (!foundWallet) {
    return res.status(404).json({ error: "Wallet not found" });
  }

  res.json(foundWallet);
})

app.delete("/wallet/:id", (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: "Missing user id field" });
  }

  // Find the index of the wallet with the matching user_id
  const index = walletObjects.findIndex(wallet => wallet.user_id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Wallet not found" });
  }

  // Remove the wallet at the found index
  walletObjects.splice(index, 1);

  res.status(204).send();
});

app.listen(3000, () =>
  console.log('Wallet backend listening on port 3000'),
);