CREATE TABLE IF NOT EXISTS lenders (
  id SERIAL PRIMARY KEY,
  authId TEXT NOT NULL,
  profileName TEXT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL,
  countryCode TEXT,
  picture TEXT
);

CREATE TABLE IF NOT EXISTS borrowers (
  id SERIAL PRIMARY KEY,
  name TEXT,
  location TEXT,
  image INTEGER
);

CREATE TABLE IF NOT EXISTS loans (
  id SERIAL PRIMARY KEY,
  borrower_id INTEGER REFERENCES borrowers(id),
  status TEXT,
  funded_amount MONEY,
  loan_amount MONEY,
  purpous TEXT,
  category TEXT,
  lender_count INTEGER,
  origination_date DATE,
  expiration_date DATE
);

CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY,
  lender_id INTEGER REFERENCES lenders(id),
  loan_id INTEGER REFERENCES loans(id),
  amount MONEY NOT NULL
);

-- DROP TABLE IF EXISTS lenders;

-- DROP TABLE IF EXISTS borrowers;

-- DROP TABLE IF EXISTS transactions;

-- DROP TABLE IF EXISTS loans;






