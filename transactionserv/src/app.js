import express from 'express';
import transactionRoutes from './routes/transactions.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Include the transaction routes
app.use('/transactions', transactionRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});