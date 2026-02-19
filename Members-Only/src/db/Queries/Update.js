import { pool } from '../pool.js';

export async function UpdateMembership(admin, id){
    await pool.query('UPDATE members SET membership = $1 WHERE id = $2', [admin, id]);
}