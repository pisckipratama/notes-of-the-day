const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./bin/config/db');

dotenv.config({ path: './.env' });
connectDB();
const app = express();

app.use(cors());

app.use('/', require('./bin/routes/index'));

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));