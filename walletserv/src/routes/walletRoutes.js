import express from 'express';
import { createWallet, getWalletByUserId, deleteWalletById }from '../controllers/walletController.js';

const router = express.Router();

// Create a new wallet
router.post('/', createWallet);

// Get wallet by user id
router.get('/:id', getWalletByUserId);

// // Update wallet by wallet id
// router.put('/:wallet_id', updateWallet);

// Delete a transaction by wallet id
router.delete('/:id', deleteWalletById);

export default router;