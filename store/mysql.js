const mysql = require('mysql');

const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

// connect to DB !

let connection;

function handleCon() {
    connection = mysql.createConnection(dbconfig);

    connection.connect((err) => {
        if (err) {
            console.error('db err' , err)
            setTimeout (handleCon, 2000);
        } else {
            console.log('DB connected!')
        }
    });
    connection.on('error', err => {
        console.error('db err' , err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        } else {
            throw err;
        }
    })
}

handleCon();
