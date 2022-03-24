import express = require('express');
import path = require('path');
const router = express.Router();

router.get('/download', (req, res) => {
    res.download(path.join(__dirname, 'hi.pdf'));
});

module.exports = router;