import express from 'express';

const port = process.env.port || 8080;
const app = express();

app.use('/video', require('./routes/video'))

app.listen(port);
