const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB configuration
const db = config.get('mongoURI');
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected')
}).catch(() => {
  console.log('Connection failed')
})

// ROUTES
app.use('/api/notes', require('./routes/api/notes'));

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`))