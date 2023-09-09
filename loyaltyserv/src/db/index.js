import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL;

console.log('databaseUrl: ' + databaseUrl);

// Create and configure your Sequelize instance
const sequelize = new Sequelize(databaseUrl);

try {
  await sequelize.authenticate();
  console.log(
    `DB Connection to ${databaseUrl} has been established successfully`
  );
} catch (error) {
  console.error(`Unable to connect to the database ${databaseUrl}:`, error);
}

// Export the Sequelize instance
export { sequelize };
