#! /usr/bin/env node

import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();


const SQL = `
CREATE TABLE IF NOT EXISTS members(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    email VARCHAR ( 255 ),
    password VARCHAR ( 255 ),
    membership VARCHAR ( 255 ) DEFAULT 'member'
);

CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    date TIMESTAMP DEFAULT NOW(),
    message VARCHAR ( 255 )
);

INSERT INTO messages(name, message) VALUES 
    ('Annonymous', 'I like trains');
`

const ConnectionString = process.argv[2] === "LocalDatabase" ? process.env.LOCAL_DATABASE_URL : process.env.PRODUCTION_DATABASE_URL;

async function DatabaseLoader(){
  console.log("Populating database via script");

  const client = new Client({
      connectionString: ConnectionString
  })
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

DatabaseLoader();