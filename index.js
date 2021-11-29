const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : 'northwind'
});

//Connect to MySql
db.connect(err => {
    if(err) {
        throw err;
    }
    console.log("MySQL Connected");
});
    
const app = express();


//select 
app.get('/select', (req, res) => {
    let sql = 'SELECT lastname, firstname FROM employees limit 10 '
    let query =  db.query(sql, (err, results) => {
        if(err) {
            throw err
        }
        console.log(results)
        res.send('Success')
    })
})

//localhost:8080
app.listen('3000', () => {
    console.log('Server Started on port 3000')
})