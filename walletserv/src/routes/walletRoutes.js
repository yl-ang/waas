import express from 'express';
import { createWallet, getWalletByUserId, updateWalletByUserId, deleteWalletByUserId }from '../controllers/walletController.js';

const router = express.Router();

// Create a new wallet
router.post('/', createWallet);

// Get wallet by user id
router.get('/:userId', getWalletByUserId);

// // Update wallet by wallet id
router.put('/:userId', updateWalletByUserId);

// Delete a wallet by wallet id
router.delete('/:userId', deleteWalletByUserId);

export default router;