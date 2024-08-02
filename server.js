const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat'); // Make sure this path is correct
const app = express();

require('dotenv').config();

mongoose.connect('mongodb+srv://Jas-13:123@jasper.cclnzjl.mongodb.net/livechat?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes); // Register chat routes

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
