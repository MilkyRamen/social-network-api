const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4444;

mongoose.connect('mongodb://localhost:27017/social_network', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
});

app.use('/api', require('./routes/UserRoutes'));
app.use('/api', require('./routes/ThoughtRoutes'));
app.use('/api', require('./routes/ReactionRoutes'));
app.use('/api', require('./routes/FriendRoutes'));

const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB.'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});