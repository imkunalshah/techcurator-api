const {createPool} = require("mysql");
const connection = createPool({
    host:"us-cdbr-east-03.cleardb.com",
    user:"b3919a308628eb",
    password:"60f903c2",
    database:"heroku_ba9f8c247340546"
});

module.exports = connection;