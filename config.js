module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'db',
        port: process.env.MYSQL_PORT || '3306',
        user: process.env.USER || 'root',
        password: process.env.PASSWORD || 'admin',
        database: process.env.DATABASE || 'mysqldb',
    }
}