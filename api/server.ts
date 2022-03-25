import express from 'express';
import cors = require('cors');

const port = process.env.port || 8080;
const app = express();

app.use(cors());
app.use('/video', require('./routes/video'))

app.listen(port);
