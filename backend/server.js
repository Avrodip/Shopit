const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const dbConfig = {
  user: "root",
  host: "localhost",
  password: "admin",
  database: "shopit"  
};

app.use(express.json());
app.use(cors());

app.get('/admin', verify_admin1 ,async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("Select * from admins");

    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/suppliers',verify_admin1, async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("Select * from suppliers");

    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/users',verify_admin1, async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("Select * from users");

    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const connection = await mysql.createConnection(dbConfig);
    const tableName =
      role === "admin" ? "admins" : role === "supplier" ? "suppliers" : "users";

    const [rows] = await connection.execute(
      `SELECT * FROM ${tableName} WHERE Username = ? AND password = ?`,
      [username, password]
    );

    connection.end();

    if (rows.length === 1) {
      const user = { username, role };
      const secretKey = "ABCDZYX";

      jwt.sign({ user }, secretKey, { expiresIn: '30d' },(err, token) => {
        if (err) {
          console.error("JWT Error:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          console.log(token);
          res.status(200).json({ token, message: "Login successful" });
        }
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/signup", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      phoneNumber,
      email,
      username,
      password,
      role,
      position,
      hireDate,
    } = req.body;

    const connection = await mysql.createConnection(dbConfig);

    if (role === "admin") {
      await connection.execute(
        `INSERT INTO admins (first_name, last_name, position, hire_date, phone, address)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          firstName,
          lastName,
          address,
          phoneNumber,
          email,
          username,
          password,
          position,
          hireDate,
        ]
      );
    }

    connection.end();
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
function verify_admin1(req, res, next) {
 

  const token_admin1="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYXZyb18yNSIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2OTgzMDU0ODksImV4cCI6MTcwMDg5NzQ4OX0.MteX9-KhRmq2xAXBHRZBEbMn5RMGiB9Dkm4g3Ov-cZM"
  
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  console.log(token);
  if(token==token_admin1){
  const secretKey = 'ABCDZYX';
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      console.error('JWT Verification Error:', err);
      return res.sendStatus(403);
    }
    
    req.user = user;
    next(); 
  });
}

else{
  return res.sendStatus(400);
}

}

function verify_admin2(req, res, next) {

  
  const token_admin2="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicmFodWxfMzQiLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjk4MzA0MTY1fQ.lpkY22-wd6mm0X9MqgOt13c4SW8-GZq29ojcqsuqke0"
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  if(token==token_admin2){
  const secretKey = 'ABCDZYX';
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      console.error('JWT Verification Error:', err);
      return res.sendStatus(403);
    }
    
    req.user = user;
    next(); 
  });
}
}

app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
