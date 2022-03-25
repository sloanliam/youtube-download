import express = require('express');
import path = require('path');
import { getAudio } from '../videoHandler';
import bodyParser = require('body-parser')
const router = express.Router();

router.use(express.json())

router.get('/download', (req, res) => {
    let videoPath = 'https://www.youtube.com/watch?v=sFsRylCQblw'
    let outputPath = path.join(__dirname, '../../out/video.mp3');

    getAudio(videoPath, () => {
        res.download(outputPath);
    });  
});

module.exports = router;