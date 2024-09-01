// server/index.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = './data.json';

// Route to handle form submission
app.post('/submit', (req, res) => {
  const newData = req.body;

  fs.readFile(DATA_FILE, (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    jsonData.push(newData);

    fs.writeFile(DATA_FILE, JSON.stringify(jsonData), (err) => {
      if (err) throw err;
      res.status(200).send('Data saved successfully');
    });
  });
});

// Route to get the count of submitted data
app.get('/count', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    res.status(200).json({ count: jsonData.length });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Initialize data.json if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}
