import { pool } from '../pool.js';

export async function AddSignUpMembers(fullName, email, password, membership){
    await pool.query('INSERT INTO members (name, email, password, membership) VALUES ($1, $2, $3, $4)', [fullName, email, password, membership]);
}

export async function AddMessage(name, message){
    await pool.query('INSERT INTO messages (name, message) VALUES ($1, $2)', [name, message]);
}