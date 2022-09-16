var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    console.log(233);
    res.send('The URL you are trying to reach does not exist.');
});

module.exports = router;
