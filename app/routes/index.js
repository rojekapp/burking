var express = require('express');
var router = express.Router();
const connection = require('../helpers/connection');
const query = require('../helpers/query');
const dbAdmin = require('../dbAdmin');
const dbHost = require('../db');
const {auth} = require('../middleware')
const jwt = require('jsonwebtoken')
var mysql = require('mysql');
const dotenv = require("dotenv")
var fs = require('fs-extra');
 
dotenv.config();
/* GET home page. */
router.get('/adddev', async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  const conn = await connection(dbAdmin).catch(e => {});
  const beb = await query(conn,"SELECT * FROM user WHERE username='"+username+"'").then(response=>{
    if(response.length == 0){
      const user = {
        username : username,
        password : password
      }
      var token;
      jwt.sign({user},'secretkey',(err,token)=>{
        const op = query(conn,"INSERT INTO user (username,password,token) VALUES ('"+username+"','"+password+"','"+token+"')").then(response=>{
          res.json({token})
      
        })
      })
      
      
    }else{
      res.send("Username not unique")
    }
  }).catch()
  
 
});
router.get('/login',async (req,res)=>{
  var username = req.body.username;
  var password = req.body.password;
  const conn = await connection(dbAdmin).catch(e => {});
  const beb = await query(conn,"SELECT * FROM user WHERE username='"+username+"' AND password='"+password+"'").then(response=>{
    if(response.length == 0){
      
      
      res.send("Login failed")
    }else{
      res.json(response[0])
    }
  }).catch()
})

router.get('/deldb',auth,function (req,res){
  var dbname = req.body.dbname;
  var con = mysql.createConnection({
    host:  process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || ''
  });
    con.query("DROP DATABASE "+dbname, function (err, result) {
      if (err) throw err;
      res.send("Database "+dbname+" successfully deleted")
    })
  })

router.get('/createdb',auth,function (req,res){
  var dbname = req.body.dbname;
  var con = mysql.createConnection({
    host:  process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || ''
  });
  
  
    con.query("CREATE DATABASE "+dbname, function (err, result) {
      if (err) throw err;
      setTimeout(function(){
        var con2 = mysql.createConnection({
          host:  process.env.MYSQL_HOST || 'localhost',
          user: process.env.MYSQL_USER || 'root',
          password: process.env.MYSQL_PASS || '',
          database: process.env.ADMIN_DB || dbname
        });
        var sql_menu = fs.readFileSync('./database/menu.sql').toString();
        var sql_tenant = fs.readFileSync('./database/tenant.sql').toString();
        var sql_transaction = fs.readFileSync('./database/transaction.sql').toString();
        var sql_user = fs.readFileSync('./database/user.sql').toString();
        con2.connect(function(err2) {
          if (err2) throw err2;
          console.log("Connected db");
          con2.query(sql_menu, function (err3, result3) {
            if (err3) throw err3;
            console.log("Table created");
          });
          con2.query(sql_tenant, function (err3, result3) {
            if (err3) throw err3;
            console.log("Table created");
          });
          con2.query(sql_transaction, function (err3, result3) {
            if (err3) throw err3;
            console.log("Table created");
          });
          con2.query(sql_user, function (err3, result3) {
            if (err3) throw err3;
            res.send("Database "+dbname+" successfully created")
          });
          con.end()
          con2.end()
        });
      },2000);
    });
  });
  const host = process.env.MYSQL_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.MYSQL_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.MYSQL_PASS || '';

// Get the Database from Environment or use default
let database = process.env.MYSQL_DB || 'pazel';


  router.get('/adduser', auth, async (req, res) => {
    database = req.body.dbname
    const username = req.body.username;
    const passwords = req.body.password;
    const type= req.body.type;
  const conn = await connection({ host, user, password, database}).catch(e => {});
  const results = await query(conn, "SELECT * FROM user WHERE username ='"+username+"'").then(response=>{
    if(response.length == 0){
      const user = {
        username : username,
        password : passwords
      }
      var token;
      jwt.sign({user},'secretkey',async (err,token)=>{
        const op = await query(conn,"INSERT INTO user (username,password,token,type) VALUES ('"+username+"','"+passwords+"','"+token+"','"+type+"')").then(response=>{
          res.json({token})
      
        })
        
      })
      
      
    }else{
      res.send("Username not unique")
    }
  }).catch(console.log);
  
  
   
  });

  router.get('/updatedev',auth, async (req,res)=>{
    const passwords = req.body.password;
    const token = req.body.token;
    const username = req.body.username;
    const subscription = req.body.subscription;
    const conn = await connection(dbAdmin).catch(e => {});
    if(passwords != '' && passwords != undefined){
      const beb = await query(conn,"UPDATE user SET password='"+passwords+"' WHERE username='"+username+"'")
    }
    if(token != '' && token != undefined){
      const beb = await query(conn,"UPDATE user SET token='"+token+"' WHERE username='"+username+"'")
    }if(subscription != '' && subscription != undefined){
      const beb = await query(conn,"UPDATE user SET subscription='"+subscription+"' WHERE username='"+username+"'")
    }
    res.send("update "+username+" succeed")
  })

  router.get('/deldev',auth, async (req,res)=>{
    
    const username = req.body.username;
    const conn = await connection(dbAdmin).catch(e => {});
      const beb = await query(conn,"DELETE FROM user WHERE username='"+username+"'")
   
    res.send("delete "+username+" succeed")
  })

  router.get('/updateuser',auth, async (req,res)=>{
    database = req.body.dbname
    const passwords = req.body.password;
    const token = req.body.token;
    const username = req.body.username;
    const subscription = req.body.subscription;
    const conn = await connection({ host, user, password, database }).catch(e => {});
    if(passwords != '' && passwords != undefined){
      const beb = await query(conn,"UPDATE user SET password='"+passwords+"' WHERE username='"+username+"'")
    }
    if(token != '' && token != undefined){
      const beb = await query(conn,"UPDATE user SET token='"+token+"' WHERE username='"+username+"'")
    }if(subscription != '' && subscription != undefined){
      const beb = await query(conn,"UPDATE user SET subscription='"+subscription+"' WHERE username='"+username+"'")
    }
    res.send("update "+username+" succeed")
  })

  router.get('/deluser',auth, async (req,res)=>{
    database = req.body.dbname
    const username = req.body.username;
    const conn = await connection({ host, user, password, database }).catch(e => {});
      const beb = await query(conn,"DELETE FROM user WHERE username='"+username+"'")
   
    res.send("delete "+username+" succeed")
  })
  
module.exports = router;
