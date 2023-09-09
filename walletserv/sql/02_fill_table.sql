-- Setting the session parameter test_wallet_number to '5'
SET session param.test_wallet_number = '5';

-- Populating the db with test wallets
INSERT INTO wallets (user_id, balance, currency_code, transaction_limit)
SELECT id, 0, 'SGD', 5000
FROM GENERATE_SERIES(1, current_setting('param.test_wallet_number')::int) as id;