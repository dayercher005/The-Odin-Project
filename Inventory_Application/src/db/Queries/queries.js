import { pool } from "../pool.js";

/* 
Create, Read, Update, Read (CRUD) queries for querying data from PostgreSQL database. 
Inventory database consists of 2 tables: categories table and games table.
*/

// READS all existing data of video games in the games table of the inventory database (e.g. Name, Price and gameCategories of each game).
export async function GettingAllGames(){
    const { rows } = await pool.query('SELECT * FROM games');
    return rows;
}

// READS only the names of all existing data of video games in the games table of the inventory database.
export async function GettingAllGameNames(){
    const { rows } = await pool.query('SELECT name FROM games');
    return rows;
}

// CREATES a new entry of a video game and adds it as a row to the games table of the inventory database.
export async function AddingNewGame(newGameName, newGamePrice, newGameCategory){
    console.log(newGameName, newGamePrice, newGameCategory);
    if (!Array.isArray(newGameCategory)){
        await pool.query(
            'INSERT INTO games (name, price, categories) VALUES ($1, $2, $3)',
            [newGameName, newGamePrice, [newGameCategory]]
        )
    } else {
        await pool.query(
            'INSERT INTO games (name, price, categories) VALUES ($1, $2, $3)',
            [newGameName, newGamePrice, newGameCategory]
        )
    }
}

// READS the existing categories in the categories table of the inventory database.
export async function GettingCategories(){
    const { rows } = await pool.query(
        'SELECT * FROM categories;'
    );
    return rows;
}


// DELETE individual category categories table of the inventory database.
export async function DeletingCategories(){
    await pool.query(
        'DELETE FROM categories'
    )
}


// UPDATES individual game in the games table of the inventory database.
export async function UpdateGame(updatedName, updatedPrice, updatedCategories, id){
    await pool.query('UPDATE games SET name = $1, price = $2, categories = $3 WHERE id = $4;',
        [updatedName, updatedPrice, updatedCategories, id]
    );
    console.log(updatedName, updatedPrice, updatedCategories, id);
}


// READS individual game details in the game table of the inventory database.
export async function getIndividualGameDetails(gameID){
    const { rows } = await pool.query('SELECT * FROM games WHERE id = $1;', [gameID]);
    return rows;
}

// READS individual category details in the categories table in the inventory database.
export async function getIndividualCategory(categoryID){
    const { rows } = await pool.query('SELECT * FROM categories WHERE id = $1', [categoryID]);
    return rows;
}


// DELETES game details in the game table of the inventory database.
export async function DeletingGameQuery(gameID){
    await pool.query('DELETE FROM games WHERE id = $1;', 
        [gameID]);
}

// READS every game that contains the category in the categories array of the games table in the inventory database.
export async function getGamesFromCategory(categoryName){
    const { rows } = await pool.query('SELECT name FROM games WHERE $1 = ANY(categories);', [categoryName]);
    return rows;
}

// DELETES category in the categories table of the inventory database.
export async function DeletingCategory(categoryID){
    await pool.query('DELETE FROM categories WHERE id = $1', 
        [categoryID]);
}

//
export async function DeletingCategoryFromGame(categoryName){
    await pool.query('UPDATE games SET categories = ARRAY_REMOVE(categories, $1);', [categoryName]);
}