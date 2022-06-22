const mysql = require('mysql');
const express = require('express');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "logindata"
})

const app = express();

con.connect((err) => {
    if(err) throw err;
    console.log('connected');
    
    let queryCreated = "CREATE DATABASE logindata"
    con.query(queryCreated, (err, result) => {
        if(err) throw err;

        console.log('Database created');
    })
})