const express = require('express');
const cors = require('cors');
const fs = require('fs'); // ✅ Missing import added here
const Path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Farm Input Data (your JSON)
function loadFarmData() {
  const filePath = Path.join(__dirname, '../data', 'data.json');
  try {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
  } catch (err) {
    console.error("❌ Failed to load data.json:", err.message);
    return {};
  }
}

// Base route
app.get('/', (req, res) => {
  res.send('🌾 Farmart API is running!');
});

// Routes
app.get('/fertilizer', (req, res) => {
  const data = loadFarmData();
  res.json(data["Fertilizer types"] || []);
});

app.get('/pesticides', (req, res) => {
  const data = loadFarmData();
  res.json(data["Pesticides"] || []);
});

app.get('/manure', (req, res) => {
  const data = loadFarmData();
  res.json(data["Manure types"] || []);
});

app.get('/seeds', (req, res) => {
  const data = loadFarmData();
  res.json(data["Seed types"] || []);
});

app.get('/irrigation', (req, res) => {
  const data = loadFarmData();
  res.json(data["Irrigation methods"] || []);
});

app.get('/harvest', (req, res) => {
  const data = loadFarmData();
  res.json(data["Harvest crops"] || []);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
