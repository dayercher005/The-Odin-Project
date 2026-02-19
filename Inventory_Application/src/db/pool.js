import { Pool } from "pg";
import dotenv from 'dotenv'

dotenv.config()

const ConnectionString = process.argv[2] === "LocalDatabase" ? process.env.DATABASE : process.env.PRODUCTION_DATABASE

export const pool = new Pool({
    connectionString: ConnectionString
})