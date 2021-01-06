require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect:  process.env.DB_DIALECT,
        JWTPRIVATEKEY: process.env.JWT_KEY,
        logging: false
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT,
        JWTPRIVATEKEY: process.env.JWT_KEY,
        logging: false
    }
}