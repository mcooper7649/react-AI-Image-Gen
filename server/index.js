//import path, dotenv and express modules
const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();

//add cors
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

//create an instance of express
const app = express();

app.use(cors(corsOptions));
//set the port to 3000
const port = process.env.PORT || 3000;

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set static folder
app.use(express.static(path.join(__dirname, '../public')));

//app use openaiRoutes
app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
