const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dbConfig = {
  user: "root",
  host: "localhost",
  password: "admin",
  database: "shopit"  
};

app.use(express.json());
app.use(cors());

app.get("/admin", verify, async (req, res) => {
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

app.get("/ordersconfirm", verify, async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("Select * from orders where Order_status='not confirmed'");

    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/orderconfirm/:orderId", verify, async (req, res) => {
  try {
    const { orderId } = req.params;

    const connection = await mysql.createConnection(dbConfig);

    const [result] = await connection.execute(
      "UPDATE orders SET Order_status = 'confirmed' WHERE Orders_id = ?",
      [orderId]
    );

    connection.end();

    if (result.affectedRows === 1) {
      res.status(200).json({ message: "Order is now set to 'confirmed'" });
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.get("/confirmedorders", verify, async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("Select * from orders where Order_status='confirmed'");

    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




app.get("/suppliers", async (req, res) => {
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

app.get("/users", verify, async (req, res) => {
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

app.get("/orderconfirm", verify, async (req, res) => {
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


app.get("/orderconfirm", verify, async (req, res) => {
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

      jwt.sign({ user }, secretKey, (err, token) => {
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
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//Adding Suppliers
app.post("/addSupplier", verify, async (req, res) => {

  const {
    Company_name,
    Supplier_name,
    Email,
    Phone,
    Address,
    Admin_id,
    Username,
    password,
  } = req.body;

  const connection = await mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
  })

  const query = `
      INSERT INTO suppliers (Company_name, Supplier_name, Email, Phone, Address, Admin_id, Username, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  const [result] = connection.query(query, [
    Company_name,
    Supplier_name,
    Email,
    Phone,
    Address,
    Admin_id,
    Username,
    password,
  ], (err, result) => {
    if (err) {
      res.send({ err: err })
    }
    else {
      res.send({ msg: "Successfully data inserted" })
    }
  });

  connection.end();
  res.status(200).json({ message: "Supplier added successfully" });

});




function verify(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  const secretKey = "ABCDZYX";
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}
app.get("/products", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("Select * from products");

    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
