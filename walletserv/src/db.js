import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL;

console.log("databaseUrl: " + databaseUrl);

// Create and configure your Sequelize instance
const sequelize = new Sequelize(databaseUrl);

// Export the Sequelize instance
export { sequelize };