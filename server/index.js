const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 5001;

mongoose.connect('mongodb://localhost:27017/clippy')
//logs a message to the terminal, stating there's a successful connection
.then(() => console.log('MongoDB connected successfully'))
//logs the error to the terminal
.catch(err => console.error('MongoDB connection error:' , err));

//logs a message to the terminal. This shows that Mongo, and Express are connected.
app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});