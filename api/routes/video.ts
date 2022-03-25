import express = require('express');
import path = require('path');
import { getAudio } from '../videoHandler';
import bodyParser = require('body-parser')
const router = express.Router();

router.use(express.json())

router.post('/download', (req, res) => {
    let videoPath = req.body.path;
    let outputPath = path.join(__dirname, '../../out/video.mp3');

    getAudio(videoPath);

    setTimeout(() => {
        res.download(outputPath);
    }, 5000);
});

router.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = router;