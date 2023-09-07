import { Sequelize } from 'sequelize';

// Create and configure your Sequelize instance
const sequelize = new Sequelize({
  // Your database configuration here
  dialect: 'postgres',
  host: 'your-host',
  username: 'your-username',
  password: 'your-password',
  database: 'your-database',
});

// Export the Sequelize instance
export { sequelize };