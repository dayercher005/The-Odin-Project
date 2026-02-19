import dotenv from 'dotenv'
import { Pool } from 'pg';

dotenv.config();

const ConnectionString = process.argv[2] === "LocalDatabase" ? process.env.LOCAL_DATABASE_URL : process.env.PRODUCTION_DATABASE_URL;

export const pool = new Pool({
    connectionString: ConnectionString
})