import pg from 'pg';

const pool = new pg.Pool({
  user: 'user',
  host: 'localhost',
  database: 'waas',
  password: 'pass',
  port: 35432
});

export default pool;
