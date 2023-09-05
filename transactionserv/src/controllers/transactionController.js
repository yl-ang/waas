import Transaction from '../models/Transaction.js';

// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    const {
      user_id,
      transaction_type,
      amount,
      currency_code,
      source_wallet_id,
      destination_wallet_id,
      transaction_date,
    } = req.body;

    // Validate the request body here if needed

    const transaction = await Transaction.create({
      user_id,
      transaction_type,
      amount,
      currency_code,
      source_wallet_id,
      destination_wallet_id,
      transaction_date,
    });

    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all transactions for a user
const getTransactionsByUser = async (req, res) => {
  try {
    const user_id = req.query.user_id; // Assuming you want to filter transactions by user

    const transactions = await Transaction.findAll({
      where: { user_id },
    });

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single transaction by transaction_id
const getTransactionById = async (req, res) => {
  try {
    const transaction_id = req.params.transaction_id;

    const transaction = await Transaction.findByPk(transaction_id);

    if (!transaction) {
      res.status(404).json({ error: 'Transaction not found' });
    } else {
      res.json(transaction);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a transaction by transaction_id
const updateTransaction = async (req, res) => {
  try {
    const transaction_id = req.params.transaction_id;
    const {
      user_id,
      transaction_type,
      amount,
      currency_code,
      source_wallet_id,
      destination_wallet_id,
      transaction_date,
    } = req.body;

    // Validate the request body here if needed

    const transaction = await Transaction.findByPk(transaction_id);

    if (!transaction) {
      res.status(404).json({ error: 'Transaction not found' });
    } else {
      await transaction.update({
        user_id,
        transaction_type,
        amount,
        currency_code,
        source_wallet_id,
        destination_wallet_id,
        transaction_date,
      });

      res.json(transaction);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a transaction by transaction_id
const deleteTransaction = async (req, res) => {
  try {
    const transaction_id = req.params.transaction_id;

    const transaction = await Transaction.findByPk(transaction_id);

    if (!transaction) {
      res.status(404).json({ error: 'Transaction not found' });
    } else {
      await transaction.destroy();
      res.json({ message: 'Transaction deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export {
  createTransaction,
  getTransactionsByUser,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};
