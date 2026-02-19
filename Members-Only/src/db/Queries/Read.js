import { pool } from '../pool.js';

export async function GetAllMessages(){
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}