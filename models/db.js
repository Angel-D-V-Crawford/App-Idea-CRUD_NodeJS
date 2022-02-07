const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_app_ideas');

const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error);
});

db.once('open', () => {
    console.log('Connected to Database');
});

