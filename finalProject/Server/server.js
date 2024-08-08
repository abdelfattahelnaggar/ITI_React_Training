const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Initialize Express app
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.static('public')); // To serve static files

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Endpoint to upload image
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ filePath: req.file.path });
});

// Mock database
const products = [
  // Your existing products here
];

// Endpoint to get products
app.get('/products', (req, res) => {
  res.json({ products });
});

// Endpoint to add product
app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  // Ensure uploads directory exists
  if (!fs.existsSync('public/uploads')) {
    fs.mkdirSync('public/uploads', { recursive: true });
  }
  console.log(`Server running at http://localhost:${port}`);
});
