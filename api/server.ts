import express from 'express';
import cors = require('cors');
import { PythonShell } from 'python-shell';

const port = process.env.port || 8080;
const app = express();

app.use(cors());
app.use('/video', require('./routes/video'))

PythonShell.run('./service/output_handler.py', {}, (err) => {
    if(err){
        console.log(err);
    }
});

app.listen(port);
