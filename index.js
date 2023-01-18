require('dotenv').config();
const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require("cors");
app.use(cors());app.use(express.json());
const port = process.env.PORT || 19007

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect(function(err) {
    if (err) throw err;
    console.log("Succesfully connected to PlanetScale!");
  });

  // Login user
  app.get('/login', (req, res) => {

    const email = req.query.user_email; 
    const password = req.query.user_password;
    connection.query("SELECT user_email, user_password, user_fname FROM user WHERE ? AND ?",
    [email, password], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  // Register user
  app.post("/createuser", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;
  
    connection.query(
      "INSERT INTO user (user_fname, user_lname, user_age, user_email, user_password) VALUES (?,?,?,?,?)",
      [fname, lname, age, email, password],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(req.body);
        }
      }
    );
  });

// getting all fruit
app.get('/fruits', (req, res) => {
  connection.query("SELECT `item_img` AS img, `item_name` AS Name  FROM `item` WHERE category_id = 1;",(err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  });
})

//getting all animals
app.get('/animals', (req, res) => {
  connection.query("SELECT `item_img` AS img, `item_name` AS Name  FROM `item` WHERE category_id = 2;",(err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  });
})

//getting all random
app.get('/random', (req, res) => {
  connection.query("SELECT `item_img` AS img, `item_name` AS Name  FROM `item` WHERE category_id = 3;",(err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  });
})

app.listen(port, () => {
  console.log(`Node server listening`)
})

