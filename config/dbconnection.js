var mysql = require('mysql');

var connmysql = function (){
    return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1965',
    database: 'portal_noticias',
});
}

module.exports = function () {
    return connmysql;
    }