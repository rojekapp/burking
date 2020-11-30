var express = require('express');
var router = express.Router();
const connection = require('../helpers/connection');
const query = require('../helpers/query');
const dbConfig = require('../dbConfig');
const {auth} = require('../middleware')
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
var multer  = require('multer');
var fs = require('fs-extra');
// get config vars
dotenv.config();

// access config var
const host = process.env.MYSQL_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.MYSQL_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.MYSQL_PASS || '';

// Get the Database from Environment or use default
let database = process.env.MYSQL_DB || 'burking';
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
  
    fs.mkdirsSync('./public/uploads/menu');
      cb(null, './public/uploads/menu');
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, fileName)
  }
});
let upload = multer({
  storage: storage
});
// list tenant
router.post('/list', async (req, res,next) => {
  
  const conn = await connection({ host, user, password, database }).catch(e => {});
  const results = await query(conn, 'SELECT kategori,nama,menu_id,foto,harga FROM menu ORDER BY nama ASC').catch(console.log);
  
  for(var i=0;i < results.length;i++){
    results[i].foto = "45.76.159.159:7300/uploads/"+results[i].foto
  }
  kategori = [];
  json_kategori = {}
  for(var i=0;i < results.length;i++){
    if(kategori.includes(results[i].kategori) == false){
      json_kategori[results[i].kategori] = []
      kategori.push(results[i].kategori)
      json_kategori[results[i].kategori].push(results[i])
    }else{
      json_kategori[results[i].kategori].push(results[i])
    }
  }
  res.json(json_kategori);
})

//search tenant
router.post('/search', async (req, res) => {

  var querys = req.body.query;

  
  const conn = await connection({ host, user, password, database }).catch(e => {});
  
    const results = await query(conn, "SELECT * FROM menu WHERE menu.nama LIKE '%"+querys+"%' ORDER BY nama ASC").catch(console.log);
  res.json({ results });
  
})
router.post('/add',upload.single('file'),  async (req, res) => {
  const tmp= req.file.originalname.toLowerCase().split(' ').join('-');
  const nama = req.body.nama;
  const harga = req.body.harga;
  const kategori = req.body.kategori;
  const foto = 'menu/'+tmp;

const conn = await connection({ host, user, password, database}).catch(e => {});

      const op = await query(conn,"INSERT INTO menu (nama,harga,kategori,foto) VALUES ('"+nama+"','"+harga+"','"+kategori+"','"+foto+"')").then(response=>{
        res.send('success')
    
     
      
   
    
    
  
}).catch(console.log);


 
});

      router.post('/delete', async (req,res)=>{
       
        var menu_id = req.body.menu_id;
        const conn = await connection({ host, user, password, database }).catch(e => {});
          const beb = await query(conn,"DELETE FROM menu WHERE menu_id='"+menu_id+"'")
       
        res.send("delete "+menu_id+" succeed")
      })
module.exports = router;
