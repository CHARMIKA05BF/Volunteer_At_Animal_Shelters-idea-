const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();   // <-- define app BEFORE using app.get/app.post etc
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "details"
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    process.exit(1);
  }
  console.log("✅ Connected to MySQL Database!");
});

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Server is running");
});

// --- Registration routes (your existing) ---

app.post("/register", (req, res) => {
  const {
    firstName, lastName,
    email, phone,
    password, dateOfBirth,
    interests, terms, newsletter
  } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  const sql = `
    INSERT INTO users
      (firstName, lastName, email, phone, password, dateOfBirth, interests, terms, newsletter)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      firstName, lastName,
      email, phone,
      password, dateOfBirth,
      interests,
      terms ? 1 : 0,
      newsletter ? 1 : 0
    ],
    (err, result) => {
      if (err) {
        console.error("❌ Registration Error:", err);
        return res.status(500).json({ message: "Server error, try again later" });
      }
      res.json({ message: "Registration successful 🎉" });
    }
  );
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("❌ Login Error:", err);
      return res.status(500).json({ message: "Server error, try again later" });
    }
    if (results.length > 0) {
      res.json({ message: "Login successful ✅" });
    } else {
      res.status(401).json({ message: "Invalid credentials ❌" });
    }
  });
});

// --- Volunteer CRUD routes ---

// Get all volunteers
app.get("/volunteers", (req, res) => {
  const sql = "SELECT * FROM volunteers";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching volunteers:", err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json(results);
  });
});

// Create new volunteer
app.post("/volunteers", (req, res) => {
  const {
    fullName, email, phone, address,
    activity, date, skills, availability, notes
  } = req.body;

  if (!fullName) {
    return res.status(400).json({ message: "Name is required" });
  }

  const sql = `
    INSERT INTO volunteers
      (fullName, email, phone, address, activity, date, skills, availability, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      fullName,
      email,
      phone,
      address,
      activity,
      date,
      skills,
      availability ? 1 : 0,
      notes
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting volunteer:", err);
        return res.status(500).json({ message: "Server error" });
      }
      res.json({ message: "Volunteer added", id: result.insertId });
    }
  );
});

// Update volunteer by ID
app.put("/volunteers/:id", (req, res) => {
  const { id } = req.params;
  const {
    fullName, email, phone, address,
    activity, date, skills, availability, notes
  } = req.body;

  const sql = `
    UPDATE volunteers
    SET fullName = ?, email = ?, phone = ?, address = ?, activity = ?, date = ?, skills = ?, availability = ?, notes = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      fullName,
      email,
      phone,
      address,
      activity,
      date,
      skills,
      availability ? 1 : 0,
      notes,
      id
    ],
    (err, result) => {
      if (err) {
        console.error("Error updating volunteer:", err);
        return res.status(500).json({ message: "Server error" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Volunteer not found" });
      }
      res.json({ message: "Volunteer updated" });
    }
  );
});

// Delete volunteer by ID
app.delete("/volunteers/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM volunteers WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting volunteer:", err);
      return res.status(500).json({ message: "Server error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json({ message: "Volunteer deleted" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server started at http://localhost:${PORT}`);
});
