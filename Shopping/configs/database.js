const db = {
    connect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER_DATABASE,
    password: process.env.DB_PASSWORD,
};

module.exports = { db };
