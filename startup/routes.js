const genresRooter = require('../routes/generes');
const customersRooter = require('../routes/customers');
const usersRooter = require('../routes/users');
const auth = require('../routes/auth');
const bodyParser = require('body-parser');
const Error = require("../middleware/error");

module.exports = function(app){
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/v1/',genresRooter);
app.use('/api/v1/',customersRooter);
app.use('/api/v1/',usersRooter);
app.use('/api/auth/',auth);
app.use(Error)
}