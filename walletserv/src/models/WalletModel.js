import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db.js';

class WalletModel extends Model {}

WalletModel.init(
    {
        wallet_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        balanace : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        currency_code: {
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        transaction_limit : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'WalletModel',
        tableName: 'wallet',
        timestamps: false, // Disable timestamps (created_at and updated_at)
    }
);

export default WalletModel;