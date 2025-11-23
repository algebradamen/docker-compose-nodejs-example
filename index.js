import express from 'express';
import * as mariadb from "mariadb";

// Lager vi en forbindelse til databasen:
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'example',
    database: process.env.DB_NAME || 'demo',
    connectionLimit: 5
}
console.log(dbConfig);
const pool = mariadb.createPool(dbConfig);

// Tester forbindelsen:
await pool.query('SELECT NOW()');
console.log('Connected to the database successfully!');

// Sjekk om tabellen POSTS finnes:
const tableCheck = await pool.query(`
    SELECT COUNT(*) AS table_exists
    FROM information_schema.tables
    WHERE table_schema = 'demo'
      AND table_name = 'posts';    `);
const tableCount = Number(tableCheck[0].table_exists);
console.log({tableCheck, tableCount});
if (tableCount !== 1) {
    // Lager tabellen hvis den ikke finnes:
    await pool.query(`
        CREATE TABLE demo.posts
        (
            id      integer primary key auto_increment,
            title   VARCHAR(255),
            content TEXT
        )`);
    console.log('Table "posts" created successfully!');
} else {
    console.log('Table "posts" already exists.');
}

// Deretter lager vi en ny instans av Express:
const app = express();


app.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM posts');
    console.log({result});
    let html = "<h1>posts</h1>"
    html += "<ul>"
    for (const row of result) {
        html += "<li>" + JSON.stringify(row) + "</li>"
    }
    html += "</ul>"
    res.send(html);
});

const port = process.env.PORT || 3000;
// Så starter vi serveren, som skal lytte på port 3000:
app.listen(port, () => {
    console.log(`Server listening on port ${port}: http://localhost:${port}`);
});