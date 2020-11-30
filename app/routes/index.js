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
router.post('/adddev', async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  const conn = await connection(dbAdmin).catch(e => {});
  const beb = await query(conn,"SELECT * FROM admin WHERE username='"+username+"'").then(response=>{
    if(response.length == 0){
      const user = {
        username : username,
        password : password
      }
      var token;
      jwt.sign({user},'secretkey',(err,token)=>{
        const op = query(conn,"INSERT INTO admin (username,password,endpoint) VALUES ('"+username+"','"+password+"','"+token+"')").then(response=>{
          res.json({token})
      
        })
      })
      
      
    }else{
      res.send("Username not unique")
    }
  }).catch()
  
 
});



  const host = process.env.MYSQL_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.MYSQL_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.MYSQL_PASS || '';

// Get the Database from Environment or use default
let database = process.env.MYSQL_DB || 'burking';


  router.post('/adduser',  async (req, res) => {
    const username = req.body.username;
    const passwords = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;

  const conn = await connection({ host, user, password, database}).catch(e => {});
  const results = await query(conn, "SELECT * FROM user WHERE username ='"+username+"'").then(response=>{
    if(response.length == 0){
      const user = {
        username : username,
        password : passwords
      }
      var token;
      jwt.sign({user},'secretkey',async (err,token)=>{
        const op = await query(conn,"INSERT INTO user (username,password,email,phone) VALUES ('"+username+"','"+passwords+"','"+email+"','"+phone+"')").then(response=>{
          res.json({token})
      
        })
        
      })
      
      
    }else{
      res.send("Username not unique")
    }
  }).catch(console.log);
  
  
   
  });

  router.post('/updatedev', async (req,res)=>{
    const passwords = req.body.password;
    const token = req.body.endpoint;
    const username = req.body.username;
    const conn = await connection(dbAdmin).catch(e => {});
    if(passwords != '' && passwords != undefined){
      const beb = await query(conn,"UPDATE admin SET password='"+passwords+"' WHERE username='"+username+"'")
    }
    if(token != '' && token != undefined){
      const beb = await query(conn,"UPDATE admin SET endpoint='"+token+"' WHERE username='"+username+"'")
    }
    res.send("update "+username+" succeed")
  })

  router.post('/deldev', async (req,res)=>{
    
    const username = req.body.username;
    const conn = await connection(dbAdmin).catch(e => {});
      const beb = await query(conn,"DELETE FROM user WHERE username='"+username+"'")
   
    res.send("delete "+username+" succeed")
  })

  

  
module.exports = router;
