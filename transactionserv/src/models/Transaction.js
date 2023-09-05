import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db.js'; // Import the Sequelize instance from db.js

class Transaction extends Model {}

Transaction.init(
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transaction_type: {
      type: DataTypes.ENUM('Deposit', 'Withdrawal', 'Transfer'),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    source_wallet_id: {
      type: DataTypes.INTEGER,
    },
    destination_wallet_id: {
      type: DataTypes.INTEGER,
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize, // Pass the sequelize instance
    modelName: 'Transaction',
    tableName: 'WalletTransaction', // Specify the table name if it's different from the model name
    timestamps: false, // Disable timestamps (created_at and updated_at)
  }
);

export default Transaction;
