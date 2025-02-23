const connection = require('../config/db');

const createUsersTable = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      age INT,
      city VARCHAR(100),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error creating users table:', err);
            return;
        }
        console.log('Users table ensured');
    });
};

module.exports = { createUsersTable };