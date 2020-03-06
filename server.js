const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "letravel_authgo"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('kn thanh cong!');
});

module.exports = connection;
