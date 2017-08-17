-- Create tables in database

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
  funded_amount INTEGER,
  loan_amount INTEGER,
  purpose TEXT,
  category TEXT,
  lender_count INTEGER,
  origination_date DATE,
  expiration_date DATE
);

CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY,
  lender_id INTEGER REFERENCES lenders(id),
  loan_id INTEGER REFERENCES loans(id),
  amount DECIMAL NOT NULL
);

-- Drop all tables from database in this order only

-- DROP TABLE IF EXISTS transactions;

-- DROP TABLE IF EXISTS loans;

-- DROP TABLE IF EXISTS lenders;

-- DROP TABLE IF EXISTS borrowers;

-- Create Borrowers

-- INSERT INTO borrowers (name, location, image) VALUES 
-- ('Litia','Samoa',2606639),
-- ('Sulma Yaneth','El Salvador',2608011),
-- ('Gladys','Kenya',2606638),
-- ('Dorothy','Cameroon',2606636),
-- ('Joanina','Timor-Leste',2606634),
-- ('Panfilo','Bolivia',2608007),
-- ('Ivona','Vaovai',2606463),
-- ('Eleitino','Samoa',2606633),
-- ('Elber','Bogotà',2608012),
-- ('Trephina Lum','Cameroon',2606628),
-- ('Virginia','Kenya',2606629),
-- ('Fuafanua','Samoa',2606626),
-- ('Santusa','Peru',2608009),
-- ('Sergio De Jesús','El Salvador',2608006),
-- ('Maritza Esperanza','El Salvador',2325796),
-- ('Robert','Kenya',2606619),
-- ('John Suh','Cameroon',2606617),
-- ('Faru 1 Group','Tanzania',2606623),
-- ('Riu','Timor-Leste',2606611),
-- ('Lasha','Georgia',2606610);

-- Create Loans

-- INSERT INTO loans (borrower_id, status, funded_amount, loan_amount, purpous, category, lender_count, origination_date, expiration_date) VALUES 
-- (1,'fundraising',0,1425, 'to buy wheelbarrow, rake, shovel, water tank, taro roots seedling, banana tubes seedling, and hand gloves.','Agriculture',0,'2017-08-14','2017-09-13'),
-- (2,'fundraising',0,1200,'to buy clothes in all different styles, to continue selling.','Clothing',0,'2017-08-14','2017-09-13'),
-- (3,'fundraising',0,250,'to buy more stock of fruits and vegetables.','Retail',0,'2017-08-14','2017-09-13'),
-- (4,'fundraising',0,100,'rent land, labour, seedlings, other farm inputs, and transportation.','Agriculture',0,'2017-08-14','2017-09-13'),
-- (5,'fundraising',0,1000,'to buy more gasoline.','Retail',0,'2017-08-14','2017-09-13'),
-- (6,'fundraising',50,725,'to pay to invest in agricultural supplies to plant potato, and with the profits, he will build a room made of brick.','Agriculture',2,'2017-08-14','2017-09-13'),
-- (7,'fundraising',0,625,'to buy rolling materials, paint color, paint brushes, elei designs, containers, and a printing machine.','Arts',0,'2017-08-14','2017-09-13'),
-- (8,'fundraising',0,825,'to buy banana tubes seedlings, taro roots seedlings, a wheelbarrow, water tank, hand gloves, rake, shovel, and chemicals.','Agriculture',0,'2017-08-14','2017-09-13'),
-- (9,'fundraising',0,475,'Elber to buy domestic and imported liquors at wholesale price in order to improve his inventory and move his sales.','Food',0,'2017-08-14','2017-09-13'),
-- (10,'fundraising',0,375,'to rent land, labour, seedlings, other farm inputs, buy piglets, feed, drugs and transportation.','Agriculture',0,'2017-08-14','2017-09-13'),
-- (11,'fundraising',0,500,'to buy farm inputs to boost production.','Agriculture',0,'2017-08-14T18:00:04Z','2017-09-13T18:00:04Z'),
-- (12,'fundraising',0,825,'to buy taro roots seedling, banana tube seedling, a wheelbarrow, rake, shovel, water tank, and hand gloves.','Agriculture',0,'2017-08-14','2017-09-13'),
-- (13,'fundraising',0,925,'Santusa to buy building materials to give her family a safe house.','Food',0,'2017-08-14','2017-09-13'),
-- (14,'fundraising',0,250,'to buy herbicides, fertilizers and seeds for his corn crops. He will also pay the rent of the plot and the tractor that he uses to prepare the land.','Agriculture',0,'2017-08-14','2017-09-13'),
-- (15,'fundraising',100,400,'to buy ingredients for making tortillas such as corn, lime powder, and firewood, to satisfy her customers.','Food',3,'2017-08-14','2017-09-13'),
-- (16,'fundraising',75,500,'to add M-Pesa float.','Services',3,'2017-08-14','2017-09-13'),
-- (17,'fundraising',0,450,'to buy piglets, construct a pigsty, buy feed, medication and materials for his tailoring.','Agriculture',0,'2017-08-14','2017-09-13'),
-- (18,'fundraising',0,650,'to add a printer, reams of paper, envelopes, office equipment and all the school equipment.','Retail',0,'2017-08-14','2017-09-13'),
-- (19,'fundraising',0,1000,'to buy cows.','Agriculture',0,'2017-08-14','2017-09-13'),
-- (20,'fundraising',0,850,'to make a trout pool and start selling trout.','Food',0,'2017-08-14','2017-09-13');