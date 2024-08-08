const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001;
const secretKey = "your_secret_key"; // Replace with a strong secret key

app.use(cors());
app.use(bodyParser.json());

const users = []; // Mock database

// Signup endpoint
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, email, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // Generate a token and send it to the client
      const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
      res.json({ message: "Login successful", token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
