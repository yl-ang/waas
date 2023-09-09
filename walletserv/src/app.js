import express from 'express';
import walletRoutes from './routes/walletRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Include the transaction routes
app.use('/wallet', walletRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});