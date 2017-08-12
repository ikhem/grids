CREATE TABLE IF NOT EXISTS lenders (
  id SERIAL PRIMARY KEY,
  authId TEXT NOT NULL,
  firstName VARCHAR(40) NOT NULL,
  lastName VARCHAR(40) NOT NULL,
  email VARCHAR(80) NOT NULL,
  profileName VARCHAR(40)
);

CREATE TABLE IF NOT EXISTS borrowers (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(40) NOT NULL,
  lastName VARCHAR(40) NOT NULL,
  country VARCHAR(80) NOT NULL
);

CREATE TABLE IF NOT EXISTS loans (
  id SERIAL PRIMARY KEY,
  loanAmount MONEY NOT NULL,
  loanLength VARCHAR(40) NOT NULL,
  amountFunded FLOAT NOT NULL,
  category VARCHAR(40) NOT NULL,
  fieldPartner VARCHAR(40) NOT NULL,
  borrowers_id INTEGER REFERENCES borrowers(id)
);

CREATE TABLE IF NOT EXISTS investments (
  id SERIAL PRIMARY KEY,
  project_Id INTEGER REFERENCES projects(id),
  borrowers_id INTEGER REFERENCES borrowers(id)
);






