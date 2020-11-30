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
 
const host = process.env.MYSQL_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.MYSQL_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.MYSQL_PASS || '';

// Get the Database from Environment or use default
let database = process.env.MYSQL_DB || 'burking';
router.post('/login',async (req,res)=>{
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


router.post('/update', async (req,res)=>{
  const passwords = req.body.password;
  const email = req.body.email;
  const phone = req.body.phone;
  const alamat = req.body.alamat;
  const username = req.body.username;
  const conn = await connection({ host, user, password, database }).catch(e => {});
  if(passwords != '' && passwords != undefined){
    const beb = await query(conn,"UPDATE user SET password='"+passwords+"' WHERE username='"+username+"'")
  }
  if(email != '' && email != undefined){
    const beb = await query(conn,"UPDATE user SET email='"+email+"' WHERE username='"+username+"'")
  }if(phone != '' && phone != undefined){
    const beb = await query(conn,"UPDATE user SET phone='"+phone+"' WHERE username='"+username+"'")
  }if(alamat != '' && alamat != undefined){
    const beb = await query(conn,"UPDATE user SET alamat='"+alamat+"' WHERE username='"+username+"'")
  }
  res.send("update "+username+" succeed")
})


router.post('/delete', async (req,res)=>{
  const username = req.body.username;
  const conn = await connection({ host, user, password, database }).catch(e => {});
    const beb = await query(conn,"DELETE FROM user WHERE username='"+username+"'")
 
  res.send("delete "+username+" succeed")
})

router.post('/addalamat',  async (req, res) => {
  const user_id  = req.body.user_id;
   const atas_nama = req.body.atas_nama;
   const phone = req.body.phone;
   const jalan = req.body.jalan;
   
 
 const conn = await connection({ host, user, password, database}).catch(e => {});
 
       const op = await query(conn,"INSERT INTO alamat (user_id,atas_nama,phone,jalan) VALUES ('"+user_id+"','"+atas_nama+"','"+phone+"','"+jalan+"')").catch(console.log);
       const beb = await query(conn,"UPDATE user SET alamat='"+op.insertId+"' WHERE user_id='"+user_id+"'")
  res.send("success")
  
 });
 router.post('/updatealamat',  async (req, res) => {
  const alamat_id  = req.body.alamat_id;
   const atas_nama = req.body.atas_nama;
   
   const phone = req.body.phone;
   const jalan = req.body.jalan;
   const detail_alamat = req.body.detail_alamat;
   const latitude = req.body.latitude;
   const longitude = req.body.longitude;
 const conn = await connection({ host, user, password, database}).catch(e => {});
 if(atas_nama != '' && atas_nama != undefined){
  const beb = await query(conn,"UPDATE alamat SET atas_nama='"+atas_nama+"' WHERE alamat_id='"+alamat_id+"'")
}if(phone != '' && phone != undefined){
  const beb = await query(conn,"UPDATE alamat SET phone='"+phone+"' WHERE alamat_id='"+alamat_id+"'")
}if(jalan != '' && jalan != undefined){
  const beb = await query(conn,"UPDATE alamat SET jalan='"+jalan+"' WHERE alamat_id='"+alamat_id+"'")
}if(detail_alamat != '' && detail_alamat != undefined){
  const beb = await query(conn,"UPDATE alamat SET detail_alamat='"+detail_alamat+"' WHERE alamat_id='"+alamat_id+"'")
}if(latitude != '' && latitude != undefined){
  const beb = await query(conn,"UPDATE alamat SET latitude='"+latitude+"',longitude='"+longitude+"' WHERE alamat_id='"+alamat_id+"'")
}
       
  res.send("success")
  
 });
 router.post('/deletealamat', async (req,res)=>{
  const alamat_id  = req.body.alamat_id;
  const conn = await connection({ host, user, password, database }).catch(e => {});
    const beb = await query(conn,"DELETE FROM alamat WHERE alamat_id='"+alamat_id+"'")
 
  res.send("delete "+alamat_id+" succeed")
})
module.exports = router;
