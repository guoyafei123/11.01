var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'g123456789',
    database: 'new'
})
/* GET home page. */
router.get('/title', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    connection.query('SELECT * FROM xinwen', function(err, rows, fields) {
        res.send(rows);
    })
});
router.post('/work', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    var inp = req.body.title;
    connection.query(`SELECT * FROM xinwen WHERE navName like '%${inp}%'
        OR title like '%${inp}%'`, function(err, rows, fields) {
            res.send(rows);
        })
});
module.exports = router;