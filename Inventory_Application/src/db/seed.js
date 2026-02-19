#! /usr/bin/env node

import { Client } from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  price DECIMAL(10, 2),
  categories TEXT[]
);


INSERT INTO categories (category)
VALUES
  ('Competitive'),
  ('Action'),
  ('Shooter'),
  ('FPS'),
  ('Free to Play'),
  ('MOBA'),
  ('Strategy'),
  ('eSports'),
  ('Extraction Shooter'),
  ('PvP'),
  ('PvE'),
  ('Cats'),
  ('Clicker'),
  ('Hack and Slash'),
  ('Action RPG'),
  ('Hero Shooter'),
  ('Survival'),
  ('Battle Royale'),
  ('Looter Shooter'),
  ('Crafting'),
  ('Open World'),
  ('Adventure'),
  ('Arcade'),
  ('Magic'),
  ('Physics'),
  ('Roguelite'),
  ('Funny'),
  ('Party'),
  ('Management'),
  ('Casual');


INSERT INTO games (name, price, categories) 
VALUES
  ('Counter Strike 2', '0.00', ARRAY['Competitive', 'Action', 'Shooter', 'FPS', 'Free to Play']),
  ('Dota 2', '0.00', ARRAY['Free to Play', 'MOBA', 'Strategy', 'eSports']),
  ('Arc Raiders', '54.00', ARRAY['Extraction Shooter', 'PvP', 'PvE']),
  ('Bongo Cat', '0.00', ARRAY['Free to Play', 'Cats', 'Clicker']),
  ('Path of Exile 2', '40.44', ARRAY['Action RPG', 'Hack and Slash']),
  ('Marvel Rivals', '0.00', ARRAY['Free to Play', 'Hero Shooter']),
  ('PUBG: BATTLEGROUNDS', '0.00', ARRAY['Survival', 'Shooter', 'Free to Play', 'Battle Royale', 'FPS']),
  ('Warframe', '0.00', ARRAY['Free to Play', 'Looter Shooter', 'Action RPG']),
  ('Rust', '20.00', ARRAY['Survival', 'Crafting', 'Open World']),
  ('Tomb Raider', '2.39', ARRAY['Adventure', 'Action']),
  ('Shell Diver', '3.93', ARRAY['Casual', 'Arcade', 'Management']),
  ('MageQuit', '5.80', ARRAY['Magic', 'Physics', 'Funny', 'Party', 'PvP']),
  ('Hades', '6.60', ARRAY['Hack and Slash', 'Roguelite']);

`;

const ConnectionString = process.argv[2] === "LocalDatabase" ? process.env.DATABASE : process.env.PRODUCTION_DATABASE;

async function DatabaseLoader(){
  console.log("Populating database via script");
  const client = new Client({
    connectionString: ConnectionString
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

DatabaseLoader();

