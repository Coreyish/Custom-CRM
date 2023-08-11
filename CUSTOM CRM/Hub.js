const mysql = require('mysql2');
//require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'Zero CRM',
    // Your MySQL password
    password: 'Zer0!',
    database: 'employee_tracker_db'
});

module.exports = db;
