CREATE TABLE IF NOT EXISTS Wallets (
    wallet_id SERIAL PRIMARY KEY,
    user_id INT,
    balance INT NOT NULL,
    currency_code VARCHAR(3) NOT NULL,
    transaction_limit INT NOT NULL
);