const connection = require('../config/db');

exports.createUser = (req, res) => {
    const { name, email, age, city } = req.body;

    const query = 'INSERT INTO users (name, email, age, city) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, email, age, city], (err, results) => {
        if (err) {
            console.error('Error creating user:', err);
            return res.status(500).json({ error: 'Error creating user' });
        }
        res.status(201).json({
            message: 'User created successfully',
            userId: results.insertId
        });
    });
};

exports.getUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Error fetching users' });
        }
        res.json(results);
    });
};