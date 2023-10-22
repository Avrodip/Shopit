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
  const port = 3002;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  