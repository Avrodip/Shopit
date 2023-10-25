const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2/promise');

const dbConfig = {
  user: "root",
  host: "localhost",
  password: "admin",
  database: "shopit"
};

app.use(express.json());
app.use(cors());

app.get('/admin', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("Select * from admins");
    
    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/suppliers', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("Select * from suppliers");

    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("Select * from users");

    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    
    const connection = await mysql.createConnection(dbConfig);
    const tableName = (role === 'admin') ? 'admins' : (role === 'supplier') ? 'suppliers' : 'users';

    const [rows] = await connection.execute(`SELECT * FROM ${tableName} WHERE email = ? AND password = ?`, [email, password]);

    connection.end();
    
    if (rows.length === 1) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/signup', async (req, res) => {
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

    if(role==="admin"){
    await connection.execute(
      `INSERT INTO admins (first_name, last_name, position, hire_date, phone, address)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, address, phoneNumber, email, username, password, position, hireDate]
    );
    }

    connection.end();
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const port = 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
