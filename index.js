const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// เชื่อมต่อ MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// เส้นทางทดสอบ API
app.get('/', (req, res) => {
    res.send('🎉 Welcome to REST API!');
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});