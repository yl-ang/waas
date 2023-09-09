import express from 'express';
import { createWallet, getWalletByUserId }from '../controllers/walletController.js';

const router = express.Router();

// Create a new wallet
router.post('/', createWallet);

// Get wallet by user id
router.get('/:id', getWalletByUserId);

// // Update wallet by wallet id
// router.put('/:wallet_id', updateWallet);

// // Delete a transaction by wallet id
// router.delete('/:wallet_id', deleteTransaction);

export default router;