import { pool } from '../pool.js';

export async function DeleteMessages(id){
    await pool.query('DELETE FROM messages WHERE id = $1', [id])
}