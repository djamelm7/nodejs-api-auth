const Sequelize = require("sequelize");
const db = require('../config/database');
const GenereModel = require('./Genere');
const CustomerModel = require('./Customer');
const UserModel = require('./User');
//create models
const Genere = GenereModel(db, Sequelize);
const Customer = CustomerModel(db, Sequelize);
const User  = UserModel(db, Sequelize);
//generate tables in DB 
db.sync({ force: false }).then(() => {
    console.log('tables created ...');
})
.catch((err)=> console.log(err.message));
module.exports = {
    Genere,
    Customer,
    User
}

