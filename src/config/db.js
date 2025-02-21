const mysql = require("mysql2");
require("dotenv").config();

// Create MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Test database connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database!");
        connection.release();
    }
});

module.exports = pool.promise();


