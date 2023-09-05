import express from 'express';
import {
    createTransaction,
    getTransactionsByUser,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
} from '../controllers/transactionController.js';

const router = express.Router();

// Create a new transaction
router.post('/', createTransaction);

// Get all transactions for a user (you can add additional route handlers as needed)
router.get('/', getTransactionsByUser);

// Get a single transaction by transaction_id
router.get('/:transaction_id', getTransactionById);

// Update a transaction by transaction_id
router.put('/:transaction_id', updateTransaction);

// Delete a transaction by transaction_id
router.delete('/:transaction_id', deleteTransaction);

export default router;
