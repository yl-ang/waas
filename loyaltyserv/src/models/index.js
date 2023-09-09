import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

class Loyalty extends Model {}

Loyalty.init(
  {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    sequelize,
    modelName: 'Loyalty',
    tableName: 'Loyalty',
    timestamps: false
  }
);

export default Loyalty;
